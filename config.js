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
  BOLEH_ULANG  : true,      // tampilkan tombol "Kerjakan Lagi" (mode simulasi)
  TAMPILKAN_NILAI_SISWA : true,   // tampilkan nilai di layar siswa

  /* ► Isi dengan URL Web App Google Apps Script (berakhiran /exec).
       Lihat PETUNJUK.md langkah 2.  */
  URL_APPS_SCRIPT : "https://script.google.com/macros/s/AKfycbxrQKOjuakwUENBGkOn7oWQhCowh4lxaThS8hnHX38Z8LxblQMZ-OzIsARtjKth7OP04A/exec",

  /* Nama/ID ujian – dicatat di spreadsheet agar bisa dipisah per sesi */
  KODE_UJIAN   : "ASM-L1"
};
