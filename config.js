/* =========================================================
   PENGATURAN UJIAN  –  silakan ubah sesuai kebutuhan
   ========================================================= */
const CONFIG = {
  JUDUL        : "Ujian Assembler Level 1",
  SUB_JUDUL    : "Continuous Casting Machine • Teknisi Rol • K3 • Peraturan Perusahaan",

  DURASI_MENIT : 90,        // waktu ujian (menit)
  KKM          : 70,        // nilai minimal lulus
  ACAK_SOAL    : true,      // acak urutan soal (dalam tiap bagian)
  ACAK_OPSI    : true,      // acak urutan pilihan jawaban
  WAJIB_TOKEN  : true,      // siswa harus order token (dikirim ke WhatsApp) sebelum mulai. Harus sama dengan Code.gs
  BOLEH_ULANG  : true,      // tampilkan tombol "Kerjakan Lagi" (mode simulasi)
  TAMPILKAN_PEMBAHASAN : true,   // siswa bisa melihat jawaban benar/salah + kunci setelah selesai
  TAMPILKAN_NILAI_SISWA : true,   // tampilkan nilai di layar siswa

  /* ► Isi dengan URL Web App Google Apps Script (berakhiran /exec).
       Lihat PETUNJUK.md langkah 2.  */
  URL_APPS_SCRIPT : "https://script.google.com/macros/s/AKfycbwTrIwVHCyEcf6rlROjVRhP_7XCCUQR5B6xjSgOay4wFBIOwTEILnXnWfcLlo_bHZ5yXA/exec",

  TOKEN_COOLDOWN_DETIK : 60,   // jeda sebelum tombol "kirim ulang token" aktif

  /* Nama/ID ujian – dicatat di spreadsheet agar bisa dipisah per sesi */
  KODE_UJIAN   : "ASM-L1"
};
