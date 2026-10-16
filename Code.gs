/**
 * GOOGLE APPS SCRIPT – penerima hasil ujian
 *  1. Menyimpan hasil ke Google Sheet (sheet "Hasil")
 *  2. Mengirim nilai ke WhatsApp siswa lewat Fonnte
 *
 * TOKEN FONTE JANGAN ditulis di file ini / di website.
 * Simpan di:  Project Settings ⚙ → Script Properties → FONNTE_TOKEN
 */

const NAMA_SHEET   = 'Hasil';
const BOLEH_ULANG  = true;    // true = siswa boleh mengulang (tiap percobaan jadi 1 baris). false = 1 nomor hanya 1x
const KIRIM_WA     = true;

const KOLOM = [
  'Waktu', 'ID Submit', 'Kode Ujian', 'Nama', 'NIS/Kelas', 'No WhatsApp',
  'Nilai', 'Benar', 'Salah', 'Kosong', 'Total Soal', 'Status',
  'Benar PG', 'Benar Multi', 'Benar B/S', 'Durasi (menit)', 'Pindah Tab',
  'Status WA', 'Jawaban (no:pilihan)', 'Percobaan'
];

function doGet() {
  return json_({ ok: true, pesan: 'API ujian online aktif' });
}

function doPost(e) {
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(30000);
    const d = JSON.parse(e.postData.contents);
    if (!d.subId || !d.nama || !d.wa) return json_({ ok: false, error: 'Data tidak lengkap' });

    const sh = sheet_();
    const rows = sh.getLastRow() > 1 ? sh.getRange(2, 1, sh.getLastRow() - 1, 6).getValues() : [];

    // kirim ulang dengan ID yang sama = sudah tersimpan (idempoten)
    if (rows.some(r => r[1] === d.subId)) return json_({ ok: true, ulang: true });

    if (!BOLEH_ULANG && rows.some(r => String(r[5]) === String(d.wa) && r[2] === d.kode)) {
      return json_({ ok: false, error: 'Nomor ini sudah pernah mengerjakan ujian.' });
    }

    const p = d.bagian || {};
    const b = k => (p[k] ? p[k].b : '');
    const status = d.lulus ? 'LULUS' : 'BELUM LULUS';
    const percobaan = rows.filter(r => String(r[5]) === String(d.wa) && r[2] === d.kode).length + 1;
    d.percobaan = percobaan;
    const rowIdx = sh.getLastRow() + 1;
    sh.appendRow([
      new Date(), d.subId, d.kode, d.nama, "'" + d.nis, "'" + d.wa,
      d.skor, d.benar, d.salah, d.kosong, d.total, status,
      b('single'), b('multi'), b('tf'),
      Math.round((d.durasiDetik || 0) / 60 * 10) / 10, d.pindahTab || 0,
      'menunggu', d.jawaban, percobaan
    ]);

    let wa = { sent: false, detail: 'dinonaktifkan' };
    if (KIRIM_WA) wa = kirimWA_(d, status);
    sh.getRange(rowIdx, KOLOM.indexOf('Status WA') + 1).setValue(wa.sent ? 'terkirim' : 'gagal: ' + wa.detail);

    return json_({ ok: true, wa: wa });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  } finally {
    try { lock.releaseLock(); } catch (x) {}
  }
}

function kirimWA_(d, status) {
  const token = PropertiesService.getScriptProperties().getProperty('FONNTE_TOKEN');
  if (!token) return { sent: false, detail: 'FONNTE_TOKEN belum diisi' };

  const pesan =
    '*HASIL UJIAN ONLINE*\n' + (d.judul || d.kode) + '\n\n' +
    'Nama   : ' + d.nama + '\n' +
    'Percobaan ke-' + (d.percobaan || 1) + '\n' +
    'NIS/Kls: ' + d.nis + '\n' +
    '────────────────\n' +
    '*NILAI : ' + d.skor + '*\n' +
    'Status : ' + status + ' (KKM ' + d.kkm + ')\n' +
    'Benar  : ' + d.benar + ' dari ' + d.total + ' soal\n' +
    'Salah  : ' + d.salah + '\n' +
    'Kosong : ' + d.kosong + '\n\n' +
    'Terima kasih telah mengikuti ujian.';

  try {
    const res = UrlFetchApp.fetch('https://api.fonnte.com/send', {
      method: 'post',
      headers: { Authorization: token.trim() },
      payload: { target: String(d.wa), message: pesan, countryCode: '62' },
      muteHttpExceptions: true
    });
    const j = JSON.parse(res.getContentText());
    return j.status ? { sent: true } : { sent: false, detail: (j.reason || res.getContentText()).slice(0, 300) };
  } catch (e) {
    return { sent: false, detail: String(e).slice(0, 300) };
  }
}

function sheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(NAMA_SHEET);
  if (!sh) {
    sh = ss.insertSheet(NAMA_SHEET);
    sh.appendRow(KOLOM);
    sh.getRange(1, 1, 1, KOLOM.length).setFontWeight('bold').setBackground('#ff8a1f');
    sh.setFrozenRows(1);
    sh.getRange('B:B').setNumberFormat('@');
    sh.getRange('E:F').setNumberFormat('@');
  }
  // sheet lama: pastikan header kolom "Percobaan" ada
  if (sh.getRange(1, KOLOM.length).getValue() !== 'Percobaan') {
    sh.getRange(1, KOLOM.length).setValue('Percobaan').setFontWeight('bold').setBackground('#ff8a1f');
  }
  return sh;
}

function json_(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}

/** Jalankan sekali dari editor untuk memberi izin & membuat sheet. */
function setup() { sheet_(); Logger.log('Sheet siap.'); }

/**
 * TES WHATSAPP – jalankan dari editor Apps Script.
 * 1) Ganti NOMOR_TES dengan nomor WhatsApp Anda (format 08xx atau 628xx)
 * 2) Pilih fungsi "tesWA" → Jalankan → klik Izinkan (WAJIB, ini memberi izin akses internet)
 * 3) Lihat hasilnya di menu "Eksekusi / Execution log"
 */
function tesWA() {
  const NOMOR_TES = '08xxxxxxxxxx';   // <-- GANTI
  let no = String(NOMOR_TES).replace(/\D/g, '');
  if (no.indexOf('0') === 0) no = '62' + no.slice(1);

  const token = PropertiesService.getScriptProperties().getProperty('FONNTE_TOKEN');
  Logger.log('Token terbaca: ' + (token ? 'YA (' + token.length + ' karakter)' : 'TIDAK - isi dulu di Script Properties'));
  if (!token) return;

  const res = UrlFetchApp.fetch('https://api.fonnte.com/send', {
    method: 'post',
    headers: { Authorization: token.trim() },
    payload: { target: no, message: 'Tes sistem ujian online ✅', countryCode: '62' },
    muteHttpExceptions: true
  });
  Logger.log('HTTP ' + res.getResponseCode());
  Logger.log('Balasan Fonnte: ' + res.getContentText());
}
