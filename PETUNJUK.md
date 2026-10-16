# Ujian Online – Assembler Level 1

## Isi folder
| File | Fungsi |
|---|---|
| `index.html` | Halaman ujian |
| `style.css` | Tampilan |
| `soal.js` | **Seluruh 150 soal + kunci jawaban** |
| `config.js` | Pengaturan (durasi, KKM, URL Apps Script) |
| `app.js` | Logika ujian, penilaian, kirim hasil |
| `Code.gs` | Skrip Google Apps Script (spreadsheet + WhatsApp Fonnte) |

## Langkah 1 – Siapkan Google Sheet + Apps Script
1. Buat Google Sheet baru (mis. "Hasil Ujian Assembler").
2. Menu **Ekstensi → Apps Script**. Hapus isi default, tempel seluruh isi `Code.gs`, simpan.
3. Pilih fungsi `setup` → **Jalankan** → izinkan akses (membuat sheet "Hasil").
4. **Project Settings (⚙) → Script Properties → Add**: 
   `FONNTE_TOKEN` = *token device dari dashboard Fonnte* (md.fonnte.com → Device → Token).
5. **Deploy → New deployment → Web app**  
   - Execute as: **Me**  
   - Who has access: **Anyone**  
   Salin URL berakhiran `/exec`.

## Langkah 2 – Isi `config.js`
Ganti `URL_APPS_SCRIPT` dengan URL tadi. Atur juga `DURASI_MENIT`, `KKM`.

## Langkah 3 – Publikasikan
Upload semua file (kecuali `Code.gs` dan `PETUNJUK.md`) ke hosting statis:
GitHub Pages, Netlify, Cloudflare Pages, atau hosting sekolah/perusahaan.
Bisa juga dibuka lokal (`index.html`) untuk uji coba.

## Catatan
- Device Fonnte harus berstatus **Connected**.
- Setiap kali kode `Code.gs` diubah, buat **New deployment / Manage deployments → Edit → New version**.
- Nomor WhatsApp otomatis diubah `08…` → `628…`.
- Penilaian: 1 soal = bobot sama; multi-jawaban benar hanya jika semua pilihan benar tepat. Nilai = benar/150 × 100.
- Jawaban siswa tersimpan di perangkat (localStorage) dan tetap aman bila halaman ter-refresh; bisa kirim ulang bila koneksi gagal.
- **Keamanan:** karena kunci jawaban berada di `soal.js` (sesuai permintaan), siswa yang paham teknis dapat melihatnya lewat DevTools. Untuk ujian berisiko tinggi, pindahkan penilaian ke Apps Script.
