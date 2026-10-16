/* =========================================================
   BANK SOAL – ASSEMBLER LEVEL 1
   tipe  : "single" = pilihan ganda (1 jawaban)
           "multi"  = pilihan ganda multi-jawaban (semua kunci harus tepat)
           "tf"     = benar / salah  (opsi 0 = Benar, 1 = Salah)
   kunci : daftar index opsi yang benar (mulai dari 0)
   Kunci jawaban diambil dari teks berwarna MERAH pada file Word.
   ========================================================= */
const SOAL = [
 {
  "id": 1,
  "tipe": "single",
  "soal": "Apa fungsi utama dari mesin pengecoran kontinu (Continuous Casting Machine/CCM)?",
  "opsi": [
   "Mencairkan Baja",
   "Mengubah logam cair menjadi semifinis (slab, bloom, billet) secara kontinu",
   "Menggulung lembaran baja tipis",
   "Memanaskan kembali ingot",
   "Membersihkan permukaan baja"
  ],
  "kunci": [
   1
  ]
 },
 {
  "id": 2,
  "tipe": "single",
  "soal": "Rol dalam mesin pengecoran kontinu berfungsi untuk",
  "opsi": [
   "Menyuplai logam cair",
   "Membentuk dan mendinginkan produk cor",
   "Memotong produk menjadi panjang tertentu",
   "Menahan dan mengarahkan strand yang membeku",
   "Sebagai rol pemutar di area reheating furnace"
  ],
  "kunci": [
   3
  ]
 },
 {
  "id": 3,
  "tipe": "single",
  "soal": "Apa fungsi utama sistem rol dalam mesin pengecoran kontinu?",
  "opsi": [
   "Mencairkan bahan baku",
   "Menuangkan logam cair ke dalam mold",
   "Menahan, membimbing, dan mendinginkan strand yang membeku",
   "Memotong produk jadi menjadi panjang tertentu",
   "Membentuk ulang profil produk"
  ],
  "kunci": [
   2
  ]
 },
 {
  "id": 4,
  "tipe": "single",
  "soal": "Zona pada mesin pengecoran kontinu yang dipenuhi oleh rangkaian rol untuk membimbing dan mendinginkan strand adalah",
  "opsi": [
   "Ladle",
   "Tundish",
   "Mold",
   "Secondary Cooling Zone",
   "Reheating Furnace"
  ],
  "kunci": [
   3
  ]
 },
 {
  "id": 5,
  "tipe": "single",
  "soal": "Rol yang memiliki tenaga penggerak (drive) untuk menarik strand keluar dari mold disebut",
  "opsi": [
   "Guide Roll",
   "Support Roll",
   "Idle Roll",
   "Pinch Roll / Withdrawal Roll",
   "Bending Roll"
  ],
  "kunci": [
   3
  ]
 },
 {
  "id": 6,
  "tipe": "single",
  "soal": "Rol yang berperan mengubah arah strand dari vertikal ke horizontal pada mesin tipe bow-type adalah",
  "opsi": [
   "Support Roll",
   "Straightener Roll",
   "Bending Roll",
   "Guide Roll",
   "Pinch Roll"
  ],
  "kunci": [
   2
  ]
 },
 {
  "id": 7,
  "tipe": "single",
  "soal": "Fenomena dimana permukaan produk cor bergelombang akibat rol yang aus/rusak disebut",
  "opsi": [
   "Crack",
   "Segregation",
   "Roll Mark",
   "Slag Inclusion",
   "Bulging"
  ],
  "kunci": [
   3
  ]
 },
 {
  "id": 8,
  "tipe": "single",
  "soal": "Penyimpangan bentuk (deformasi) pada strand akibat tekanan logam cair dari dalam ketika dukungan rol kurang disebut",
  "opsi": [
   "Longitudinal Crack",
   "Centerline Segregation",
   "Off-Square",
   "Rhomboidity",
   "Bulging"
  ],
  "kunci": [
   4
  ]
 },
 {
  "id": 9,
  "tipe": "single",
  "soal": "Untuk mencegah masalah bulging, hal yang perlu dilakukan pada rol adalah",
  "opsi": [
   "Memperpendek jarak antar rol (roll pitch)",
   "Meningkatkan kecepatan casting",
   "Memperlebar jarak antar rol (roll pitch)",
   "Mengurangi pendinginan",
   "Memanaskan rol secara terus menerus"
  ],
  "kunci": [
   2
  ]
 },
 {
  "id": 10,
  "tipe": "single",
  "soal": "Pertimbangan utama dalam mendesain jarak antar rol (roll pitch) adalah",
  "opsi": [
   "Warna cat rol",
   "Kekuatan strand pada temperatur tinggi",
   "Berat mold",
   "Kapasitas tangki air",
   "Kecepatan angin di sekitar mesin"
  ],
  "kunci": [
   1
  ]
 },
 {
  "id": 11,
  "tipe": "single",
  "soal": "Selain sebagai penahan, fungsi lain dari rol adalah sebagai",
  "opsi": [
   "Media pendinginan melalui kontak langsung",
   "Pemanas listrik",
   "Sumber gas pelindung",
   "Pengaduk logam cair",
   "Tempat penambahan alloy"
  ],
  "kunci": [
   0
  ]
 },
 {
  "id": 12,
  "tipe": "single",
  "soal": "Pada mesin pengecoran kontinu tegak (vertical), sistem rol terutama berfungsi untuk",
  "opsi": [
   "Membengkokkan strand",
   "Menahan dan membimbing strand secara vertikal",
   "Memutar strand 360 derajat",
   "Mendinginkan dengan air bertekanan tinggi",
   "Memotong strand panas"
  ],
  "kunci": [
   1
  ]
 },
 {
  "id": 13,
  "tipe": "single",
  "soal": "Apa yang terjadi jika rol penarik (pinch roll) slip atau gagal menarik?",
  "opsi": [
   "Kecepatan casting meningkat",
   "Terjadi breakout",
   "Kualitas permukaan membaik",
   "Temperatur logam naik",
   "Mold menjadi dingin"
  ],
  "kunci": [
   1
  ]
 },
 {
  "id": 14,
  "tipe": "single",
  "soal": "Roll alignment adalah kegiatan untuk memastikan",
  "opsi": [
   "Rol berputar dengan kecepatan tinggi",
   "Posisi semua rol sejajar dan segaris sesuai desain",
   "Rol memiliki warna yang seragam",
   "Permukaan rol selalu basah",
   "Berat rol sama semua"
  ],
  "kunci": [
   1
  ]
 },
 {
  "id": 15,
  "tipe": "single",
  "soal": "Rol yang tidak memiliki penggerak sendiri dan berputar karena tersentuh strand disebut",
  "opsi": [
   "Drive Roll",
   "Pinch Roll",
   "Idle Roll / Guide Roll",
   "Bending Roll",
   "Working Roll"
  ],
  "kunci": [
   2
  ]
 },
 {
  "id": 16,
  "tipe": "single",
  "soal": "Bahan baku yang umum digunakan untuk membuat rol pengecoran kontinu adalah",
  "opsi": [
   "Kayu keras",
   "Plastik tahan panas",
   "Baja paduan khusus (alloy steel)",
   "Aluminium murni",
   "Karet sintetis"
  ],
  "kunci": [
   2
  ]
 },
 {
  "id": 17,
  "tipe": "single",
  "soal": "Sifat material rol yang PALING penting untuk menahan kondisi operasi adalah",
  "opsi": [
   "Mudah dibengkokkan",
   "Ringan seperti aluminium",
   "Kekuatan pada temperatur tinggi dan tahan thermal fatigue",
   "Berwarna cerah",
   "Murah harganya"
  ],
  "kunci": [
   2
  ]
 },
 {
  "id": 18,
  "tipe": "single",
  "soal": "Apa tujuan dari perawatan dan inspeksi rutin pada sistem rol?",
  "opsi": [
   "Menghemat biaya cat",
   "Mencegah kerusakan tak terduga dan menjaga kualitas produk",
   "Meningkatkan kecepatan putaran rol",
   "Mengurangi berat mesin",
   "Menghilangkan kebutuhan pendinginan"
  ],
  "kunci": [
   1
  ]
 },
 {
  "id": 19,
  "tipe": "single",
  "soal": "Kerusakan rol yang ditandai dengan terkelupasnya material permukaan akibat tegangan panas berulang disebut",
  "opsi": [
   "Wear",
   "Corrosion",
   "Thermal Spalling",
   "Bending",
   "Twisting"
  ],
  "kunci": [
   2
  ]
 },
 {
  "id": 20,
  "tipe": "single",
  "soal": "Pada mesin slab caster, susunan rol biasanya dirancang untuk menahan",
  "opsi": [
   "Gaya tarik vertikal saja",
   "Tekanan dari sisi lebar slab untuk mencegah bulging",
   "Putaran logam cair",
   "Gaya tempa",
   "Getaran mold"
  ],
  "kunci": [
   1
  ]
 },
 {
  "id": 21,
  "tipe": "single",
  "soal": "Komponen yang sering dipasang pada ujung poros rol untuk menyalurkan air pendingin masuk dan keluar adalah",
  "opsi": [
   "Gearbox",
   "Rotary Joint",
   "Bearing Housing",
   "Drive Motor",
   "Coupling"
  ],
  "kunci": [
   1
  ]
 },
 {
  "id": 22,
  "tipe": "single",
  "soal": "Pengukuran yang sering dilakukan teknisi untuk memeriksa keausan rol adalah",
  "opsi": [
   "Suhu warna rol",
   "Diameter dan ovalitas rol",
   "Berat rol di dalam air",
   "Kecepatan putaran maksimum",
   "Intensitas cahaya yang dipantulkan"
  ],
  "kunci": [
   1
  ]
 },
 {
  "id": 23,
  "tipe": "single",
  "soal": "Rol dengan inti berongga dan saluran internal untuk aliran air pendingin disebut",
  "opsi": [
   "Solid Roll",
   "Laminated Roll",
   "Water-Cooled Roll / Hollow Roll",
   "Rubber Roll",
   "Ceramic Roll"
  ],
  "kunci": [
   2
  ]
 },
 {
  "id": 24,
  "tipe": "single",
  "soal": "Keuntungan utama menggunakan rol berpendingin air internal adalah",
  "opsi": [
   "Rol menjadi lebih berat",
   "Meningkatkan umur pakai rol dengan mengendalikan suhu",
   "Membuat permukaan produk mengkilap",
   "Mengurangi kebutuhan listrik",
   "Mempercepat proses pelelehan"
  ],
  "kunci": [
   1
  ]
 },
 {
  "id": 25,
  "tipe": "single",
  "soal": "Rol yang terletak segaris setelah rol pembengkok (bending roll) untuk meluruskan kembali strand adalah",
  "opsi": [
   "Bending Roll",
   "Straightener Roll",
   "Pinch Roll",
   "Support Roll",
   "Deflector Roll"
  ],
  "kunci": [
   1
  ]
 },
 {
  "id": 26,
  "tipe": "single",
  "soal": "Pasangan rol penarik (pinch roll) biasanya terdiri dari",
  "opsi": [
   "Satu rol diam dan satu rol bergerak",
   "Dua rol yang keduanya digerakkan (driven)",
   "Tiga rol penekan",
   "Rantai berjalan",
   "Belt karet"
  ],
  "kunci": [
   1
  ]
 },
 {
  "id": 27,
  "tipe": "single",
  "soal": "Bagian dari rol yang bersentuhan langsung dengan strand panas adalah",
  "opsi": [
   "Poros (Shaft)",
   "Bearing",
   "Shell / Body Roll",
   "Rotary Joint",
   "Foundation"
  ],
  "kunci": [
   2
  ]
 },
 {
  "id": 28,
  "tipe": "single",
  "soal": "Apa fungsi bantalan (bearing) pada unit rol?",
  "opsi": [
   "Mendinginkan poros rol",
   "Membawa beban rol dan memungkinkan putaran lancar",
   "Memotong strand",
   "Menyalurkan air pendingin",
   "Sebagai penggerak utama"
  ],
  "kunci": [
   1
  ]
 },
 {
  "id": 29,
  "tipe": "single",
  "soal": "Jenis bearing yang umum digunakan pada sistem rol pengecoran kontinu karena tahan beban berat adalah",
  "opsi": [
   "Tapered Roller Bearing atau Spherical Roller Bearing",
   "Bearing karet",
   "Ball Bearing kecil",
   "Bearing magnetik",
   "Bearing kayu"
  ],
  "kunci": [
   0
  ]
 },
 {
  "id": 30,
  "tipe": "single",
  "soal": "Penyumbatan pada saluran pendingin internal rol dapat menyebabkan",
  "opsi": [
   "Rol menjadi lebih dingin",
   "Overheating rol dan kerusakan prematur",
   "Tekanan air meningkat",
   "Kualitas produk selalu bagus",
   "Kecepatan casting otomatis naik"
  ],
  "kunci": [
   1
  ]
 },
 {
  "id": 31,
  "tipe": "single",
  "soal": "Tujuan dari pemasangan spray nozzle di antara rol-rol adalah untuk",
  "opsi": [
   "Mencuci lantai pabrik",
   "Mendinginkan bearing",
   "Membersihkan permukaan rol dari debu",
   "Pendinginan sekunder dengan menyemprot air langsung ke strand",
   "Sebagai sumber uap untuk kelembaban"
  ],
  "kunci": [
   3
  ]
 },
 {
  "id": 32,
  "tipe": "single",
  "soal": "Rol pada zona pendinginan terakhir (misal setelah straightener) seringkali hanya berfungsi sebagai",
  "opsi": [
   "Pemanas induksi",
   "Pencetak ulang profil",
   "Pemotong panas",
   "Pengumpul kerak",
   "Penahan dan pembimbing strand yang sudah padat"
  ],
  "kunci": [
   4
  ]
 },
 {
  "id": 33,
  "tipe": "single",
  "soal": "Untuk memudahkan pergantian rol, unit rol sering didesain sebagai",
  "opsi": [
   "Struktur permanen yang dilas",
   "Bagian dari fondasi beton",
   "Komponen yang harus diganti seluruh mesin",
   "Cassette atau cartridge yang bisa ditarik keluar",
   "Rol sekali pakai"
  ],
  "kunci": [
   3
  ]
 },
 {
  "id": 34,
  "tipe": "single",
  "soal": "Pengecekan visual rutin yang dilakukan teknisi pada rol meliputi, KECUALI",
  "opsi": [
   "Retak atau spalling",
   "Keausan permukaan",
   "Kebengkokan poros",
   "Warna cat yang memudar",
   "Adanya tanda bekas terbakar (heat check)"
  ],
  "kunci": [
   3
  ]
 },
 {
  "id": 35,
  "tipe": "single",
  "soal": "Alat ukur yang digunakan untuk memeriksa kesegarisan (alignment) antar rol adalah",
  "opsi": [
   "Thermometer",
   "pH meter",
   "Speedometer",
   "Flowmeter air",
   "Dial Gauge dan alat ukur laser"
  ],
  "kunci": [
   4
  ]
 },
 {
  "id": 36,
  "tipe": "single",
  "soal": "Selain air, media pendingin yang kadang digunakan pada sistem internal rol adalah",
  "opsi": [
   "Minyak",
   "Pasir",
   "Udara terkompresi",
   "Larutan garam",
   "Larutan glikol (air yang dicampur antifreeze)"
  ],
  "kunci": [
   4
  ]
 },
 {
  "id": 37,
  "tipe": "single",
  "soal": "Rol dengan diameter yang sudah menurun di luar batas toleransi harus",
  "opsi": [
   "Diganti atau dimachining ulang (hardfacing & turning)",
   "Dilapisi cat ulang",
   "Dipanaskan hingga memuai",
   "Dipukul-pukul agar bulat kembali",
   "Tetap dipakai karena tidak berpengaruh"
  ],
  "kunci": [
   0
  ]
 },
 {
  "id": 38,
  "tipe": "single",
  "soal": "Proses pengelasan untuk menambah lapisan material keras pada permukaan rol yang aus disebut",
  "opsi": [
   "Annealing",
   "Hardfacing",
   "Galvanizing",
   "Painting",
   "Shot Blasting"
  ],
  "kunci": [
   1
  ]
 },
 {
  "id": 39,
  "tipe": "single",
  "soal": "Sistem hidrolik pada unit rol sering berfungsi untuk",
  "opsi": [
   "Mendinginkan air",
   "Menggerakkan mekanisme pengatur tekanan rol penarik (pinch roll pressure)",
   "Memutar rol secara langsung",
   "Menyemprot air",
   "Memanaskan rol"
  ],
  "kunci": [
   1
  ]
 },
 {
  "id": 40,
  "tipe": "single",
  "soal": "Kegiatan menyetel ulang posisi rol agar sentris dan sejajar setelah pergantian disebut",
  "opsi": [
   "Overhaul",
   "Alignment",
   "Painting",
   "Heating",
   "Casting"
  ],
  "kunci": [
   1
  ]
 },
 {
  "id": 41,
  "tipe": "single",
  "soal": "Logam cair yang menerobos keluar dari shell yang tipis dan membeku di sela-sela rol disebut",
  "opsi": [
   "Good product",
   "Breakout shell yang dapat menyumbat dan merusak rol",
   "Pendingin alami",
   "Lapisan pelindung rol",
   "Material daur ulang"
  ],
  "kunci": [
   1
  ]
 },
 {
  "id": 42,
  "tipe": "single",
  "soal": "Tanda adanya kebocoran pada rotary joint atau saluran pendingin internal adalah",
  "opsi": [
   "Rol berputar lebih cepat",
   "Muncul uap air atau genangan air tidak normal di sekitar ujung poros",
   "Warna rol menjadi lebih terang",
   "Suara bearing lebih halus",
   "Strand menjadi lebih dingin"
  ],
  "kunci": [
   1
  ]
 },
 {
  "id": 43,
  "tipe": "single",
  "soal": "Sebelum memulai operasi casting, hal yang harus diperiksa pada sistem rol adalah",
  "opsi": [
   "Putaran bebas semua rol, kondisi pendinginan, dan alignment",
   "Suhu udara luar",
   "Jumlah karyawan yang hadir",
   "Stok bahan baku di gudang",
   "Warna tembok ruang kontrol"
  ],
  "kunci": [
   0
  ]
 },
 {
  "id": 44,
  "tipe": "single",
  "soal": "Selama operasi normal, teknisi harus memantau",
  "opsi": [
   "Suara tidak normal (bising, dengung) dari unit rol",
   "Keteraturan putaran rol",
   "ebocoran air atau uap",
   "ABCD Benar",
   "Harga saham perusahaan"
  ],
  "kunci": [
   3
  ]
 },
 {
  "id": 45,
  "tipe": "single",
  "soal": "Penyebab umum kerusakan bearing pada rol adalah, KECUALI.",
  "opsi": [
   "Kurang pelumasan",
   "Kontaminasi air atau kotoran",
   "Overload atau misalignment",
   "Pelumasan yang tepat dan terjadwal",
   "Usia pakai (fatigue)"
  ],
  "kunci": [
   3
  ]
 },
 {
  "id": 46,
  "tipe": "single",
  "soal": "Jika ditemukan rol yang berhenti berputar (seized) selama casting, tindakan darurat yang mungkin adalah",
  "opsi": [
   "Meningkatkan kecepatan casting",
   "Menghentikan mesin (emergency stop) untuk pemeriksaan",
   "Menyemprotnya dengan lebih banyak air",
   "Memukulnya dengan palu saat masih beroperasi",
   "Mengabaikannya sampai casting selesai"
  ],
  "kunci": [
   1
  ]
 },
 {
  "id": 47,
  "tipe": "single",
  "soal": "Apa yang harus dilakukan setelah selesai satu kampanye casting (setelah mesin dingin)?",
  "opsi": [
   "Inspeksi visual menyeluruh pada semua rol",
   "Membiarkan saja untuk kampanye berikutnya",
   "Mencat ulang seluruh mesin",
   "Meningkatkan tekanan air pendingin",
   "Melepas semua rol untuk dibersihkan dengan sabun"
  ],
  "kunci": [
   0
  ]
 },
 {
  "id": 48,
  "tipe": "single",
  "soal": "Penyebab getaran berlebihan pada suatu unit rol bisa berasal dari",
  "opsi": [
   "Rol bengkok (bent roll)",
   "Bearing rusak",
   "Unbalance pada rol",
   "Semua jawaban di atas",
   "Pendinginan yang terlalu baik"
  ],
  "kunci": [
   3
  ]
 },
 {
  "id": 49,
  "tipe": "single",
  "soal": "Untuk mencegah akumulasi kerak (scale) pada permukaan rol, dapat dilakukan",
  "opsi": [
   "Menggunakan rol dari bahan kayu",
   "Menyiramnya dengan asam kuat tiap hari",
   "Tidak menggunakan air pendingin",
   "Membiarkan kerak menumpuk sebagai lapisan pelindung",
   "Pemeliharaan rutin dan pembersihan saat mesin berhenti"
  ],
  "kunci": [
   4
  ]
 },
 {
  "id": 50,
  "tipe": "single",
  "soal": "Teknisi menggunakan feeler gauge untuk memeriksa",
  "opsi": [
   "Kekerasan rol",
   "Kecepatan putaran rol",
   "Aliran air di dalam pipa",
   "Suhu permukaan rol",
   "Celah (gap) atau clearance antar komponen"
  ],
  "kunci": [
   4
  ]
 },
 {
  "id": 51,
  "tipe": "single",
  "soal": "Tujuan utama dari keselamatan kerja adalah .…",
  "opsi": [
   "Mengurangi tingkat kecelakaan",
   "Mengurangi beban pekerja",
   "Menambah pendapatan pekerja",
   "Menyeimbangkan beban pekerja"
  ],
  "kunci": [
   0
  ]
 },
 {
  "id": 52,
  "tipe": "single",
  "soal": "Dibawah ini adalah prinsip K3, kecuali?",
  "opsi": [
   "Setiap pekerjaan bisa dilakukan dengan selamat",
   "Kecelakaan pasti ada Penyebabnya",
   "Penyebab kecelakaan harus di cegah/di tiadakan",
   "Kecelakaan adalah takdir/Nasib"
  ],
  "kunci": [
   3
  ]
 },
 {
  "id": 53,
  "tipe": "single",
  "soal": "Berikut ini merupakan langkah yang dilakukan untuk pencegahan terhadap penyakit, kecuali..…",
  "opsi": [
   "Pemeriksaan kesehatan karyawan",
   "Pendidikan kesehatan",
   "Penjelasan sebelum bekerja",
   "Golongan fisik"
  ],
  "kunci": [
   3
  ]
 },
 {
  "id": 54,
  "tipe": "single",
  "soal": "Suatu peristiwa yang tidak disengaja seperti kejadian yang tidak diharapkan dan tidak terkontrol yang dapat menyebabkan kerusakan peralatan, material bahkan kecelakaan pada pekerja disebut:",
  "opsi": [
   "Kerugian kerja",
   "Kerusakan kerja",
   "Fatal kerja",
   "Kecelakaan kerja"
  ],
  "kunci": [
   3
  ]
 },
 {
  "id": 55,
  "tipe": "single",
  "soal": "Tujuan pemeriksaan kesehatan sebelum bekerja (awal) adalah :",
  "opsi": [
   "Agar tenaga kerja yang diterima berada dalam kondisi kesehatan yang lebih baik",
   "Tidak mempunyai penyakit menular yang akan menular tenaga kerja lainnya",
   "Sebagai bahan acuan dasar dalam penentuan riwayat kesehatan selama bekerja",
   "Semua jawaban benar"
  ],
  "kunci": [
   3
  ]
 },
 {
  "id": 56,
  "tipe": "single",
  "soal": "Pemeriksaan kesehatan tenaga kerja meliputi :",
  "opsi": [
   "Pemeriksaan kesehatan awal dan berkala",
   "Pemeriksaan kesehatan berkala dan berjangka",
   "Pemeriksaan kesehatan awal, berkala dan khusus",
   "Pemeriksaan kesehatan awal, berjangka dan khusus"
  ],
  "kunci": [
   2
  ]
 },
 {
  "id": 57,
  "tipe": "single",
  "soal": "Penyebab langsung (immediate cause) dari kecelakaan adalah :",
  "opsi": [
   "Tindakan dan Kondisi yang tidak aman",
   "Faktor individu.",
   "Faktor pekerjaan",
   "Faktor pekerjaan dan Faktor individu"
  ],
  "kunci": [
   0
  ]
 },
 {
  "id": 58,
  "tipe": "single",
  "soal": "Dibawah ini adalah alasan-alasan kenapa perusahaan harus mengelola safety (keselamatan kerja) ditempat kerja, yaitu:",
  "opsi": [
   "Untuk mencegah cedera pada pekerja",
   "Untuk meningkatkan keuntungan dan menjaga reputasi perusahaan",
   "Untuk memenuhi peraturan perundangan yang berlaku",
   "Semua jawaban benar"
  ],
  "kunci": [
   3
  ]
 },
 {
  "id": 59,
  "tipe": "single",
  "soal": "Dibawah ini yang termasuk Kategori bahaya adalah :",
  "opsi": [
   "Bahaya Ergonomi (stress fisik, Stress Kejiwaan)",
   "Bahaya Mekanis, Bahaya Kimia, Bahaya Biologi",
   "Bahaya Psikososial, Bahaya Tingkah Laku, Bahaya Kelistrikan",
   "Semua jawaban benar"
  ],
  "kunci": [
   3
  ]
 },
 {
  "id": 60,
  "tipe": "single",
  "soal": "Suatu kondisi dimana atau kapan munculnya sumber bahaya telah dapat dikendalikan ke tingkat yang memadai, ini adalah lawan dari bahaya (danger) merupakan pengertian dari.…",
  "opsi": [
   "Keamanan",
   "Alat pelindung diri",
   "Kesehatan",
   "Kepedulian"
  ],
  "kunci": [
   0
  ]
 },
 {
  "id": 61,
  "tipe": "single",
  "soal": "Warna merah dalam simbol keselamatan kerja memiliki makna.…",
  "opsi": [
   "memberi perintah wajib untuk ditaati",
   "memberi peringatan dan informasi waspada",
   "menunjukkan perintah larangan, berhenti",
   "memiliki arti dalam keadaan aman, dapat melintas"
  ],
  "kunci": [
   2
  ]
 },
 {
  "id": 62,
  "tipe": "single",
  "soal": "Apa kepanjangan dari K3?",
  "opsi": [
   "Keselamatan dan Keamanan Kerja",
   "Keselamatan Kesehatan kerja",
   "Kesehatan dan Keselamatan kerja",
   "Kesehatan Keamanan bekerja"
  ],
  "kunci": [
   2
  ]
 },
 {
  "id": 63,
  "tipe": "single",
  "soal": "Metode pemadaman kebakaran meliputi",
  "opsi": [
   "Cooling, Smoothing, Breaking Chain Reaction And Starvation",
   "Cooling, Smothering and Breaking Chain Reaction",
   "Cooling, Smothering, Starvation, and Breaking Chain Reaction",
   "Breaking News Reaction, Cooling, Starvation and Smothering"
  ],
  "kunci": [
   2
  ]
 },
 {
  "id": 64,
  "tipe": "single",
  "soal": "Berikut adalah Hak Perusahaan, kecuali",
  "opsi": [
   "Memberikan Perintah Kerja",
   "Memerintahkan Kerja Lembur",
   "Mutasi dan demosi",
   "Menyampaikan Keluh Kesah Dan Saran kepada karyawan"
  ],
  "kunci": [
   3
  ]
 },
 {
  "id": 65,
  "tipe": "single",
  "soal": "Pelanggaran yang termasuk tingkat pelanggaran Surat Peringatan Pertama dan Terakhir (SPPT) adalah…",
  "opsi": [
   "Mangkir 2 hari",
   "Mengemudikan unit/alat milik perusahaan tanpa SIM dan SIMPER",
   "Tidur selama jam kerja",
   "Mangkir 5 hari berturut-turut"
  ],
  "kunci": [
   1
  ]
 },
 {
  "id": 66,
  "tipe": "single",
  "soal": "Peraturan Perusahaan adalah peraturan tertulis yang dibuat oleh Perusahaan yang memuat pedoman diantaranya tentang….",
  "opsi": [
   "hak dan kewajiban Perusahaan dan Karyawan",
   "Perselisihan hubungan industrial",
   "Menciptakan lapangan kerja",
   "Hak dan kewajiban Pemerintah"
  ],
  "kunci": [
   0
  ]
 },
 {
  "id": 67,
  "tipe": "single",
  "soal": "Sebelum mogok kerja dilakukan, pemberitahuan dilakukan selambat-lambatnya berapa hari?",
  "opsi": [
   "4 hari",
   "5 hari",
   "6 hari",
   "7 hari"
  ],
  "kunci": [
   3
  ]
 },
 {
  "id": 68,
  "tipe": "single",
  "soal": "Berikut ini yang termasuk Hak karyawan adalah, kecuali…",
  "opsi": [
   "Imbal Jasa",
   "Waktu Istirahat dan Cuti",
   "Mengundurkan Diri",
   "Membayar upah"
  ],
  "kunci": [
   3
  ]
 },
 {
  "id": 69,
  "tipe": "multi",
  "soal": "Sebagai teknisi rol, tanggung jawab utama Anda mencakup",
  "opsi": [
   "Mengoperasikan tungku peleburan (Furnace).",
   "Melakukan inspeksi visual rutin pada kondisi fisik rol.",
   "Menyetel dan menyelaraskan (alignment) rol.",
   "Mengganti rol yang aus atau rusak.",
   "Mengatur komposisi kimia logam cair."
  ],
  "kunci": [
   1,
   2,
   3
  ]
 },
 {
  "id": 70,
  "tipe": "multi",
  "soal": "Pengetahuan dasar yang harus dikuasai seorang teknisi rol adalah tentang",
  "opsi": [
   "Prinsip kerja mesin pengecoran kontinu (CCM)",
   "Jenis-jenis rol (guide, support, bending, pinch roll) dan fungsinya",
   "Sistem hidrolik dan pneumatik pada unit rol",
   "Proses pembuatan baja di area Steel Making",
   "Sistem pendinginan (cooling) pada rol dan strand"
  ],
  "kunci": [
   0,
   1,
   2,
   4
  ]
 },
 {
  "id": 71,
  "tipe": "multi",
  "soal": "Dokumen yang harus selalu diperhatikan dan diisi oleh teknisi rol meliputi",
  "opsi": [
   "Laporan inspeksi dan checklist harian/mingguan",
   "Work Order atau Job Order untuk perbaikan",
   "Roll history card (catatan riwayat perbaikan dan pengukuran rol)",
   "Laporan keuangan departemen",
   "Tag Lockout-Tagout (LOTO)"
  ],
  "kunci": [
   0,
   1,
   2,
   4
  ]
 },
 {
  "id": 72,
  "tipe": "multi",
  "soal": "Sebelum melakukan pekerjaan perawatan atau perbaikan pada sistem rol, langkah  keselamatan wajib adalah",
  "opsi": [
   "Meminta izin dari kepala produksi",
   "Melakukan Lockout-Tagout (LOTO) pada sumber energi (listrik, hidrolik)",
   "Memastikan mesin dalam kondisi berhenti dan strand kosong",
   "Memakai Alat Pelindung Diri (APD) yang lengkap",
   "Langsung bekerja karena sudah terbiasa"
  ],
  "kunci": [
   1,
   2,
   3
  ]
 },
 {
  "id": 73,
  "tipe": "multi",
  "soal": "Alat ukur yang biasa digunakan teknisi rol untuk pemeriksaan meliputi",
  "opsi": [
   "Dial Indicator untuk memeriksa run-out atau alignment",
   "Feeler Gauge untuk mengukur celah (clearance)",
   "Micrometer atau jangka sorong untuk mengukur diameter rol",
   "Thermometer infra merah untuk memeriksa suhu permukaan",
   "Spektrometer untuk menganalisis komposisi kimia baja"
  ],
  "kunci": [
   0,
   1,
   2,
   3
  ]
 },
 {
  "id": 74,
  "tipe": "multi",
  "soal": "Penyebab umum yang membuat rol harus diganti sebelum waktunya adalah",
  "opsi": [
   "Keausan (wear) diameter di luar batas toleransi",
   "Retak (crack) pada body atau poros rol",
   "Spalling (terkelupas) pada permukaan akibat thermal fatigue",
   "Rol bengkok (bent) akibat kecelakaan atau beban berlebih",
   "Warna cat yang memudar"
  ],
  "kunci": [
   0,
   1,
   2,
   3
  ]
 },
 {
  "id": 75,
  "tipe": "multi",
  "soal": "Tanda-tanda operasional bahwa ada masalah pada bearing suatu rol adalah",
  "opsi": [
   "Suara berisik (grinding, squealing) yang tidak normal",
   "Getaran berlebih pada unit rol",
   "Suhu bearing housing yang abnormal tinggi",
   "Kebocoran grease atau masuknya air",
   "Rol berputar lebih lancar dari biasanya"
  ],
  "kunci": [
   0,
   1,
   2,
   3
  ]
 },
 {
  "id": 76,
  "tipe": "multi",
  "soal": "Kegiatan preventive maintenance (pencegahan) yang dilakukan teknisi rol meliputi",
  "opsi": [
   "Pelumasan (greasing) bearing sesuai jadwal",
   "Pemeriksaan dan penyetelan alignment rol secara periodik",
   "Pemeriksaan kebocoran pada sistem pendingin internal rol",
   "Penggantian seluruh rol setiap bulan, apapun kondisinya",
   "Pembersihan area sekitar rol dari kerak dan tumpahan logam"
  ],
  "kunci": [
   0,
   1,
   2,
   4
  ]
 },
 {
  "id": 77,
  "tipe": "multi",
  "soal": "Saat terjadi breakout, peran teknisi rol setelah area dibersihkan adalah",
  "opsi": [
   "Memeriksa rol-rol di zona kejadian apakah ada yang rusak atau tersumbat logam beku",
   "Membantu proses restart casting",
   "Langsung mengganti semua rol di mesin tanpa pemeriksaan",
   "Melaporkan temuan kerusakan pada supervisor",
   "Memastikan alignment dan putaran rol berjalan normal sebelum casting dimulai lagi"
  ],
  "kunci": [
   0,
   1,
   3,
   4
  ]
 },
 {
  "id": 78,
  "tipe": "multi",
  "soal": "Untuk memastikan kualitas produk, teknisi rol harus menjaga",
  "opsi": [
   "Kesegarisan (alignment) seluruh rol sesuai standar",
   "Jarak antar rol (roll pitch) yang tepat untuk mencegah bulging",
   "Tekanan pada pinch roll yang sesuai",
   "Permukaan rol bebas dari kerusakan (crack, spalling) yang bisa meninggalkan mark pada produk",
   "Kecepatan putaran motor penggerak tundish"
  ],
  "kunci": [
   0,
   1,
   2,
   3
  ]
 },
 {
  "id": 79,
  "tipe": "multi",
  "soal": "Sebelum kampanye casting dimulai, teknisi rol harus memastikan",
  "opsi": [
   "Semua rol berputar bebas (tidak seized)",
   "Sistem pendinginan air untuk rol berfungsi baik, tidak tersumbat",
   "Pressure hydraulic untuk pinch roll sudah disetel",
   "Safety guard pada area rol terpasang dengan baik",
   "Mold sudah dipanaskan hingga suhu operasi"
  ],
  "kunci": [
   0,
   1,
   2,
   3
  ]
 },
 {
  "id": 80,
  "tipe": "multi",
  "soal": "Komunikasi yang efektif bagi teknisi rol penting dengan",
  "opsi": [
   "Operator casting untuk melaporkan masalah atau menerima instruksi",
   "Teknisi listrik/instrumentasi jika ada masalah sensor atau motor",
   "Supervisor maintenance untuk melaporkan progres pekerjaan",
   "Bagian QC untuk memahami defect produk yang berkaitan dengan rol",
   "Bagian personalia untuk mengurus gaji"
  ],
  "kunci": [
   0,
   1,
   2,
   3
  ]
 },
 {
  "id": 81,
  "tipe": "multi",
  "soal": "Pekerjaan yang memerlukan kerja tim (tim work) bagi teknisi rol adalah",
  "opsi": [
   "Penggantian rol yang besar dan berat (menggunakan crane)",
   "Alignment menyeluruh satu segment roll",
   "Penanganan darurat saat rol macet selama operas",
   "Pemindahan rol dari gudang ke area mesin",
   "Pelumasan bearing rol mingguan"
  ],
  "kunci": [
   0,
   1,
   2,
   3
  ]
 },
 {
  "id": 82,
  "tipe": "multi",
  "soal": "Material yang umum digunakan untuk membuat rol adalah baja paduan dengan sifat",
  "opsi": [
   "Kekuatan panas (hot strength) yang baik",
   "Ketahanan aus (wear resistance) tinggi",
   "Tahan terhadap kelelahan termal (thermal fatigue resistance)",
   "Konduktivitas termal yang baik",
   "Mudah dibengkokkan saat dingin"
  ],
  "kunci": [
   0,
   1,
   2,
   3
  ]
 },
 {
  "id": 83,
  "tipe": "multi",
  "soal": "Kegiatan yang termasuk dalam predictive maintenance untuk sistem rol adalah",
  "opsi": [
   "Analisis getaran (vibration analysis) pada bearing rol",
   "Pemantauan suhu bearing dengan termometer infra merah",
   "Penggantian rol berdasarkan jam operasi (running hours) yang ditetapkan",
   "Pemeriksaan ultrasonik (UT) untuk mendeteksi retak internal",
   "Menunggu sampai rol rusak total"
  ],
  "kunci": [
   0,
   1,
   2,
   3
  ]
 },
 {
  "id": 84,
  "tipe": "multi",
  "soal": "Jika menemukan retak kecil pada body rol selama inspeksi, tindakan yang tepat adalah",
  "opsi": [
   "Mencatat dan melaporkan kepada supervisor",
   "Memutuskan penggantian atau perbaikan (hardfacing) berdasarkan kedalaman dan posisi retak",
   "Mengabaikannya karena masih kecil",
   "Memukul retak tersebut dengan palu agar menutup",
   "Memberi tanda pada rol dengan cat"
  ],
  "kunci": [
   0,
   1,
   4
  ]
 },
 {
  "id": 85,
  "tipe": "multi",
  "soal": "Alat bantu yang digunakan untuk menarik/mendorong rol saat proses alignment adalah",
  "opsi": [
   "Jack hidrolik (hydraulic jack)",
   "Puller",
   "Sledge hammer (palu besar)",
   "Shims (lembaran perata)",
   "Kunci L"
  ],
  "kunci": [
   0,
   1,
   3
  ]
 },
 {
  "id": 86,
  "tipe": "multi",
  "soal": "Penyebab misalignment pada sistem rol dapat berupa",
  "opsi": [
   "Fondasi mesin yang turun (settlement) tidak merata",
   "Bearing yang aus atau rusak",
   "Body rol yang bengkok",
   "Pengencangan baut yang tidak merata pada housing",
   "Perubahan suhu lingkungan yang ekstrem"
  ],
  "kunci": [
   0,
   1,
   2,
   3
  ]
 },
 {
  "id": 87,
  "tipe": "multi",
  "soal": "Setelah mengganti rol baru, hal yang WAJIB dilakukan adalah",
  "opsi": [
   "Melakukan alignment rol tersebut dengan rol sekitarnya",
   "Memastikan bearing terpasang dengan benar dan mendapat pelumasan",
   "Mengecek putaran bebasnya (free rotation)",
   "Memastikan sistem pendingin internalnya terhubung dan tidak bocor",
   "Langsung menjalankan mesin casting dengan kecepatan maksimal"
  ],
  "kunci": [
   0,
   1,
   2,
   3
  ]
 },
 {
  "id": 88,
  "tipe": "multi",
  "soal": "Keterampilan (skill) yang harus dimiliki seorang teknisi rol adalah",
  "opsi": [
   "Kemampuan membaca gambar teknik (technical drawing)",
   "Keterampilan mekanikal dasar (menggunakan alat tangan, mengukur)",
   "Pemahaman dasar sistem hidrolik dan pneumatik",
   "Kemampuan melakukan pengelasan (welding) hardfacing",
   "Kemampuan melakukan analisis kimia logam"
  ],
  "kunci": [
   0,
   1,
   2,
   3
  ]
 },
 {
  "id": 89,
  "tipe": "multi",
  "soal": "Selama operasi casting normal, teknisi rol harus memantau",
  "opsi": [
   "Suara tidak normal (bising, dengung, gesekan) dari area rol",
   "Adanya getaran yang berlebihan",
   "Kebocoran air dari rotary joint atau saluran pendingi",
   "Asap atau uap yang tidak wajar dari kontak rol dan strand",
   "Performa tim sepak bola favorit di TV ruang kontrol"
  ],
  "kunci": [
   0,
   1,
   2,
   3
  ]
 },
 {
  "id": 90,
  "tipe": "multi",
  "soal": "Tindakan pertama jika mendeteksi rol yang berhenti berputar (seized) selama operasi adalah",
  "opsi": [
   "Segera melaporkan ke operator dan supervisor",
   "Mencoba menyemprotkan air lebih banyak ke rol tersebut",
   "Bersiap untuk kemungkinan emergency stop jika membahayakan",
   "Memukul rol dengan palu dari jarak jauh agar berputar",
   "Mengabaikan karena mungkin akan berputar lagi sendiri"
  ],
  "kunci": [
   0,
   2
  ]
 },
 {
  "id": 91,
  "tipe": "multi",
  "soal": "Indikasi bahwa tekanan pinch roll tidak tepat adalah",
  "opsi": [
   "Slip mark pada produk (jika tekanan kurang)",
   "Deformasi atau roll mark dalam pada produk (jika tekanan berlebih)",
   "Arus motor penggerak pinch roll yang tidak stabil",
   "Kecepatan casting yang selalu konstan",
   "Suara gemeretuk dari gearbox"
  ],
  "kunci": [
   0,
   1,
   2,
   4
  ]
 },
 {
  "id": 92,
  "tipe": "multi",
  "soal": "Penyebab aliran air pendingin internal rol berkurang atau terhenti bisa jadi",
  "opsi": [
   "Rotary joint tersumbat atau rusak",
   "Saluran air di dalam rol tersumbat kerak (scale)",
   "Pressure air dari sumber utama turun",
   "Valve (katup) pada saluran air tertutup",
   "Rol terbuat dari bahan yang tidak bisa dialiri air"
  ],
  "kunci": [
   0,
   1,
   2,
   3
  ]
 },
 {
  "id": 93,
  "tipe": "multi",
  "soal": "Untuk membersihkan kerak (scale) yang menempel keras di permukaan rol, metode yang bisa digunakan adalah",
  "opsi": [
   "Mechanical descaling (dengan pemukul, sikat baja)",
   "Chemical cleaning dengan larutan asam khusus (dilakukan dengan prosedur aman)",
   "Thermal shocking (dipanaskan lalu didinginkan mendadak",
   "Membiarkannya karena akan lepas sendiri",
   "Mengikir permukaan rol"
  ],
  "kunci": [
   0,
   1
  ]
 },
 {
  "id": 94,
  "tipe": "multi",
  "soal": "Prosedur penggantian sebuah rol meliputi langkah-langkah",
  "opsi": [
   "Isolasi energi dan dapatkan izin kerja (work permit)",
   "Lepaskan sambungan listrik/sensor dan saluran pendingin.Buka baut pengunci housing atau cartridge",
   "Gunakan crane untuk mengangkat rol keluar",
   "Pasang rol baru dan lakukan reverse step pemasangan",
   "Setelah terpasang, langsung hidupkan mesin"
  ],
  "kunci": [
   0,
   1,
   2,
   3
  ]
 },
 {
  "id": 95,
  "tipe": "multi",
  "soal": "Kerusakan pada seal rotary joint dapat mengakibatkan",
  "opsi": [
   "Kebocoran air pendingin",
   "Air masuk ke dalam bearing dan merusaknya",
   "Tekanan air di sistem menjadi lebih tinggi",
   "Putaran rol menjadi lebih kencang",
   "Pendinginan rol menjadi lebih efektif"
  ],
  "kunci": [
   0,
   1
  ]
 },
 {
  "id": 96,
  "tipe": "multi",
  "soal": "Penyebab getaran pada satu set rol (segment) dapat berasal dari",
  "opsi": [
   "Rol yang tidak seimbang (unbalance) karena keausan tidak merata",
   "Bearing yang rusak pada salah satu rol",
   "Kopling (coupling) motor penggerak yang tidak sejajar",
   "Gigi (gear) pada drive system yang aus",
   "Kecepatan casting yang terlalu rendah"
  ],
  "kunci": [
   0,
   1,
   2,
   3
  ]
 },
 {
  "id": 97,
  "tipe": "multi",
  "soal": "Dalam sistem rol berpendingin air, kualitas air yang buruk (banyak endapan/kotoran) dapat menyebabkan",
  "opsi": [
   "Penyumbatan saluran internal",
   "Korosi pada bagian dalam rol",
   "Berkurangnya efisiensi pendinginan dan overheating rol",
   "Meningkatnya umur pakai rol",
   "Permukaan produk menjadi lebih halus"
  ],
  "kunci": [
   0,
   1,
   2
  ]
 },
 {
  "id": 98,
  "tipe": "multi",
  "soal": "Tujuan dari kegiatan roll alignment adalah untuk",
  "opsi": [
   "Memastikan produk bergerak lurus tanpa mengalami tekukan paksa",
   "Mendistribusikan beban secara merata ke semua rol",
   "Memperpanjang umur bearing dan rol",
   "Mencegah defect seperti camber (lengkung) atau crack pada produk",
   "Mempercepat proses pendinginan strand"
  ],
  "kunci": [
   0,
   1,
   2,
   3
  ]
 },
 {
  "id": 99,
  "tipe": "multi",
  "soal": "Alat yang digunakan untuk mengukur dan menyetel alignment antara dua rol biasanya adalah",
  "opsi": [
   "Dial indicator dengan magnetic base",
   "Laser alignment tool",
   "Straight edge (penggaris lurus) dan feeler gauge",
   "Waterpass (spirit level)",
   "Measuring tape (meteran)"
  ],
  "kunci": [
   0,
   1,
   2
  ]
 },
 {
  "id": 100,
  "tipe": "multi",
  "soal": "Jika produk slab menunjukkan gejala bulging (tonjolan di tengah), kemungkinan penyebab dari sisi rol adalah",
  "opsi": [
   "Jarak antar rol (roll pitch) di zona secondary cooling terlalu lebar",
   "Rol di zona tersebut aus atau diameter berkurang signifikan",
   "Tekanan hidrolik pada rol penahan kurang",
   "Kecepatan casting terlalu rendah",
   "Suhu logam cair terlalu dingin"
  ],
  "kunci": [
   0,
   1,
   2
  ]
 },
 {
  "id": 101,
  "tipe": "multi",
  "soal": "Tindakan perbaikan sementara (temporary fix) yang TIDAK disarankan untuk masalah rol adalah",
  "opsi": [
   "Mengelas permukaan rol yang aus kasar tanpa machining ulang",
   "Memasang shim tidak merata untuk menutupi misalignment",
   "Memotong bagian rol yang menyangkut tanpa persetujuan engineering",
   "Melumasi bearing yang sudah rusak parah hanya untuk melanjutkan operasi",
   "Mencatat kerusakan dan merencanakan perbaikan saat mesin stop berikutnya"
  ],
  "kunci": [
   0,
   1,
   2,
   3
  ]
 },
 {
  "id": 102,
  "tipe": "multi",
  "soal": "APAR yang disediakan di suatu lokasi hanya efektif untuk memadamkan benda yang baru terbakar karena",
  "opsi": [
   "Jumlah APAR terbatas",
   "Mampu memadamkan kebakaran",
   "Jangka semprot yang lama",
   "Jarak semprot yang terbatas"
  ],
  "kunci": [
   0,
   3
  ]
 },
 {
  "id": 103,
  "tipe": "multi",
  "soal": "Contoh pemadaman api dengan cara Starvation adalah",
  "opsi": [
   "Menutup drum yang terbakar",
   "Memadamkan api dengan air",
   "Menghentikan supply bahan bakar",
   "Memutuskan aliran bahan bakar yang menuju tempat kebakaran"
  ],
  "kunci": [
   2,
   3
  ]
 },
 {
  "id": 104,
  "tipe": "multi",
  "soal": "Contoh dibawah ini yang termasuk kondisi tidak aman adalah kecuali:",
  "opsi": [
   "Perkakas atau peralatan rusak",
   "Mengoperasikan kendaraan dengan ugal-ugalan",
   "Bersenda gurau sambil bekerja",
   "Tempat kerja Penuh Ceceran Oli"
  ],
  "kunci": [
   1,
   2
  ]
 },
 {
  "id": 105,
  "tipe": "multi",
  "soal": "Syarat-syarat helm untuk alat pelindung diri, yaitu.…",
  "opsi": [
   "tahan benturan",
   "meredam kejutan",
   "tidak mudah terbakar",
   "mudah disesuaikan",
   "anti air"
  ],
  "kunci": [
   0,
   1,
   2,
   3
  ]
 },
 {
  "id": 106,
  "tipe": "multi",
  "soal": "Berikut yang bertanggung jawab terhadap K3 di tempat kerja yaitu...…",
  "opsi": [
   "Manajemen",
   "Pengawas",
   "Petugas K3",
   "Investor",
   "Masyarakat sekitar"
  ],
  "kunci": [
   0,
   1,
   2
  ]
 },
 {
  "id": 107,
  "tipe": "multi",
  "soal": "Berikut manakah yang merupakan prinsip K3...…",
  "opsi": [
   "Langkah keselamatan seadanya",
   "Setiap pekerjaan bisa dilakukan dengan selamat",
   "Kecelakaan pasti ada penyebabnya",
   "Penyebab kecelakaan harus di cegah/di tiadakan",
   "Kecelakaan adalah takdir"
  ],
  "kunci": [
   1,
   2,
   3
  ]
 },
 {
  "id": 108,
  "tipe": "multi",
  "soal": "Cidera yang umum terjadi pada konstruksi bangunan yaitu...…",
  "opsi": [
   "Cidera akibat sengatan listrik",
   "Cidera akibat kebisingan",
   "Cidera akibat jatuh dari ketinggian",
   "Cidera akibat mekanisme peralatan",
   "Cidera akibat hantaman benda"
  ],
  "kunci": [
   0,
   2,
   3,
   4
  ]
 },
 {
  "id": 109,
  "tipe": "multi",
  "soal": "Berikut merupakan Hak dari karyawan yang diatur dalam aturan Perusahaan…",
  "opsi": [
   "Karyawan berhak mendapatkan imbal jasa berupa upah atau yang lainnya atas pekerjaan yang dilakukannya",
   "Karyawan berhak mendapatkan waktu istirahat kerja dan cuti sebagaimana diatur dalam Perjanjian Kerja Bersama/Peraturan Perusahaan ini",
   "Masuk bekerja tidak mengikuti pengaturan kerja dari perusahaan",
   "Karyawan berhak mendapatkan bantuan dari Perusahaan ketika mendapat  permasalahan/ancaman",
   "Karyawan berhak mengundurkan diri dengan menjalankan prosedur pengunduran diri sesuai dengan prosedur yang disepakati dalam Perjanjian Kerja Bersama/Peraturan Perusahaan ini"
  ],
  "kunci": [
   0,
   1,
   3,
   4
  ]
 },
 {
  "id": 110,
  "tipe": "multi",
  "soal": "Berikut merupakan kewajiban dari karyawan yang diatur dalam aturan Perusahaan…",
  "opsi": [
   "Karyawan wajib tunduk dan mengikatkan diri pada Perjanjian Kerja Bersama/Peraturan Perusahaan ini",
   "Karyawan wajib menaati instruksi, perintah, dan peraturan yang dikeluarkan oleh Perusahaan baik lisan maupun tertulis",
   "Karyawan wajib hadir di waktu kerja dan lokasi kerja yang ditetapkan dan diperlukan oleh Perusahaan",
   "Karyawan tidak wajib mengunakan alat pelindung diri selama bekerja",
   "Karyawan wajib menjaga kerahasiaan upah yang diterimanya"
  ],
  "kunci": [
   0,
   1,
   2,
   4
  ]
 },
 {
  "id": 111,
  "tipe": "multi",
  "soal": "Berikut merupakan Hak dari Perushaan yang diatur dalam aturan Perusahaan…",
  "opsi": [
   "Perusahaan berhak memberikan perintah kerja kepada Karyawan",
   "Perusahaan berhak menunda pembayaran gaji",
   "Perusahaan berhak menentukan peraturan atau tata tertib kerja",
   "Perusahaan berhak menetapkan hari dan jam kerja serta waktu istirahat kerja",
   "Perusahaan berhak mengatur penggunaan waktu cuti dan izin meninggalkan pekerjaan bagi Karyawan"
  ],
  "kunci": [
   0,
   2,
   3,
   4
  ]
 },
 {
  "id": 112,
  "tipe": "multi",
  "soal": "Berikut merupakan kewajiban dari Perusahaan yang diatur dalam aturan Perusahaan",
  "opsi": [
   "Perusahaan wajib membayarkan utang karyawan",
   "Perusahaan wajib untuk membagikan dan menjelaskan Perjanjian Kerja Bersama/Peraturan Perusahaan ini kepada Karyawan",
   "Perusahaan wajib menyelenggarakan sistem manajemen kerja dan membayar upah sesuai yang diperjanjikan kepada Karyawan",
   "Perusahaan wajib menyesuaikan sistem manajemen kinerja, struktur dan skala upah apabila terdapat perubahan upah pada setiap tahunnya",
   "Perusahaan wajib memberikan seragam kerja yang layak kepada Karyawan"
  ],
  "kunci": [
   1,
   2,
   3,
   4
  ]
 },
 {
  "id": 113,
  "tipe": "multi",
  "soal": "Berikut hal-hal yang perlu dilaksanakan ketika masuk bekerja",
  "opsi": [
   "Karyawan wajib mengunakan alat pelindung diri selama bekerja",
   "Karyawan wajib memakai id card",
   "Karyawan wajib absen manual dan absen sidik jari/wajah",
   "Karyawan wajib datang tepat waktu di lokasi kerja",
   "Karyawan wajib meminjamkan APD rekan kerja"
  ],
  "kunci": [
   0,
   1,
   2,
   3
  ]
 },
 {
  "id": 114,
  "tipe": "tf",
  "soal": "Teknisi rol bertanggung jawab penuh atas pengoperasian tungku peleburan",
  "opsi": [
   "Benar",
   "Salah"
  ],
  "kunci": [
   1
  ]
 },
 {
  "id": 115,
  "tipe": "tf",
  "soal": "Inspeksi visual harian pada kondisi fisik rol merupakan bagian dari tugas rutin teknisi rol",
  "opsi": [
   "Benar",
   "Salah"
  ],
  "kunci": [
   0
  ]
 },
 {
  "id": 116,
  "tipe": "tf",
  "soal": "Menyetel dan menyelaraskan (alignment) rol untuk memastikan produk bergerak lurus adalah tugas teknisi rol",
  "opsi": [
   "Benar",
   "Salah"
  ],
  "kunci": [
   0
  ]
 },
 {
  "id": 117,
  "tipe": "tf",
  "soal": "Teknisi rol tidak perlu memahami prinsip kerja dasar mesin pengecoran kontinu (CCM)",
  "opsi": [
   "Benar",
   "Salah"
  ],
  "kunci": [
   1
  ]
 },
 {
  "id": 118,
  "tipe": "tf",
  "soal": "Roll history card digunakan untuk mencatat riwayat perbaikan dan pengukuran rol",
  "opsi": [
   "Benar",
   "Salah"
  ],
  "kunci": [
   0
  ]
 },
 {
  "id": 119,
  "tipe": "tf",
  "soal": "Lockout-Tagout (LOTO) adalah prosedur opsional sebelum memperbaiki sistem rol",
  "opsi": [
   "Benar",
   "Salah"
  ],
  "kunci": [
   1
  ]
 },
 {
  "id": 120,
  "tipe": "tf",
  "soal": "Dial indicator adalah alat yang digunakan teknisi rol untuk memeriksa run-out atau misalignment",
  "opsi": [
   "Benar",
   "Salah"
  ],
  "kunci": [
   0
  ]
 },
 {
  "id": 121,
  "tipe": "tf",
  "soal": "Keausan (wear) diameter rol di luar batas toleransi bukan alasan untuk mengganti rol",
  "opsi": [
   "Benar",
   "Salah"
  ],
  "kunci": [
   1
  ]
 },
 {
  "id": 122,
  "tipe": "tf",
  "soal": "Suara berisik (grinding) dari bearing rol merupakan tanda operasi normal",
  "opsi": [
   "Benar",
   "Salah"
  ],
  "kunci": [
   1
  ]
 },
 {
  "id": 123,
  "tipe": "tf",
  "soal": "Pelumasan (greasing) bearing sesuai jadwal merupakan kegiatan preventive maintenance",
  "opsi": [
   "Benar",
   "Salah"
  ],
  "kunci": [
   0
  ]
 },
 {
  "id": 124,
  "tipe": "tf",
  "soal": "Saat terjadi breakout, teknisi rol tidak perlu memeriksa rol di zona kejadian",
  "opsi": [
   "Benar",
   "Salah"
  ],
  "kunci": [
   1
  ]
 },
 {
  "id": 125,
  "tipe": "tf",
  "soal": "Kesegarisan (alignment) rol yang tepat membantu mencegah defect produk seperti camber",
  "opsi": [
   "Benar",
   "Salah"
  ],
  "kunci": [
   0
  ]
 },
 {
  "id": 126,
  "tipe": "tf",
  "soal": "Sebelum casting dimulai, teknisi rol harus memastikan semua rol berputar bebas (tidak seized)",
  "opsi": [
   "Benar",
   "Salah"
  ],
  "kunci": [
   0
  ]
 },
 {
  "id": 127,
  "tipe": "tf",
  "soal": "Teknisi rol hanya perlu berkomunikasi dengan sesama teknisi, tidak dengan operator casting",
  "opsi": [
   "Benar",
   "Salah"
  ],
  "kunci": [
   1
  ]
 },
 {
  "id": 128,
  "tipe": "tf",
  "soal": "Penggantian rol yang besar dan berat dapat dilakukan sendirian tanpa bantuan crane atau tim",
  "opsi": [
   "Benar",
   "Salah"
  ],
  "kunci": [
   1
  ]
 },
 {
  "id": 129,
  "tipe": "tf",
  "soal": "Material rol harus memiliki ketahanan aus (wear resistance) yang tinggi",
  "opsi": [
   "Benar",
   "Salah"
  ],
  "kunci": [
   0
  ]
 },
 {
  "id": 130,
  "tipe": "tf",
  "soal": "Analisis getaran (vibration analysis) pada bearing rol adalah contoh predictive maintenance",
  "opsi": [
   "Benar",
   "Salah"
  ],
  "kunci": [
   0
  ]
 },
 {
  "id": 131,
  "tipe": "tf",
  "soal": "Retak kecil pada body rol dapat diabaikan dan tidak perlu dilaporkan",
  "opsi": [
   "Benar",
   "Salah"
  ],
  "kunci": [
   1
  ]
 },
 {
  "id": 132,
  "tipe": "tf",
  "soal": "Shims (lembaran perata) digunakan untuk menyetel celah dan alignment rol",
  "opsi": [
   "Benar",
   "Salah"
  ],
  "kunci": [
   0
  ]
 },
 {
  "id": 133,
  "tipe": "tf",
  "soal": "Bearing yang aus atau rusak dapat menyebabkan misalignment pada sistem rol",
  "opsi": [
   "Benar",
   "Salah"
  ],
  "kunci": [
   0
  ]
 },
 {
  "id": 134,
  "tipe": "tf",
  "soal": "Setelah mengganti rol baru, alignment dengan rol sekitarnya adalah langkah opsional",
  "opsi": [
   "Benar",
   "Salah"
  ],
  "kunci": [
   1
  ]
 },
 {
  "id": 135,
  "tipe": "tf",
  "soal": "Kemampuan membaca gambar teknik merupakan keterampilan yang berguna bagi teknisi rol",
  "opsi": [
   "Benar",
   "Salah"
  ],
  "kunci": [
   0
  ]
 },
 {
  "id": 136,
  "tipe": "tf",
  "soal": "Memantau suara tidak normal dari area rol selama operasi adalah bagian dari tanggung jawab teknisi",
  "opsi": [
   "Benar",
   "Salah"
  ],
  "kunci": [
   0
  ]
 },
 {
  "id": 137,
  "tipe": "tf",
  "soal": "Jika menemukan rol yang berhenti berputar (seized) selama operasi, tindakan pertama adalah memukulnya dengan palu",
  "opsi": [
   "Benar",
   "Salah"
  ],
  "kunci": [
   1
  ]
 },
 {
  "id": 138,
  "tipe": "tf",
  "soal": "Slip mark pada produk dapat mengindikasikan tekanan pinch roll yang kurang",
  "opsi": [
   "Benar",
   "Salah"
  ],
  "kunci": [
   0
  ]
 },
 {
  "id": 139,
  "tipe": "tf",
  "soal": "Simbol K3 yang berwarna kuning menandakan peringatan kewaspadaan",
  "opsi": [
   "Benar",
   "Salah"
  ],
  "kunci": [
   0
  ]
 },
 {
  "id": 140,
  "tipe": "tf",
  "soal": "Upaya pencegahan lebih baik daripada upaya pengobatan terhadap kecelakaan atau akibat kerja, sebagai alternatif terakhir dari pencegahan dalam hirarki pengendalian bahaya adalah Alat Pelindung Diri.",
  "opsi": [
   "Benar",
   "Salah"
  ],
  "kunci": [
   0
  ]
 },
 {
  "id": 141,
  "tipe": "tf",
  "soal": "Setiap kecelakaan yang terjadi, maka akan ada rekomendasi atau tindakan perbaikan dari kecelakaan tersebut, tujuan dari rekomendasi tindakan perbaikan adalah Agar kecelakaan Tersebut Tidak Terulang Kembali.",
  "opsi": [
   "Benar",
   "Salah"
  ],
  "kunci": [
   0
  ]
 },
 {
  "id": 142,
  "tipe": "tf",
  "soal": "Warna biru yang digunakan dalam sign menandakan “Kewajiban”.",
  "opsi": [
   "Benar",
   "Salah"
  ],
  "kunci": [
   0
  ]
 },
 {
  "id": 143,
  "tipe": "tf",
  "soal": "Pekerja yang perlu waktu menyelesaikan pekerjaan 5-10 menit tidak perlu menggunakan APD.",
  "opsi": [
   "Benar",
   "Salah"
  ],
  "kunci": [
   1
  ]
 },
 {
  "id": 144,
  "tipe": "tf",
  "soal": "Tindakan pembetulan dan pencegahan yang mendasar merupakan salah satu keuntungan dari Inspeksi",
  "opsi": [
   "Benar",
   "Salah"
  ],
  "kunci": [
   0
  ]
 },
 {
  "id": 145,
  "tipe": "tf",
  "soal": "Safety line kuning artinya area berbahaya dimana setiap orang yang melintas harus berhati-hati",
  "opsi": [
   "Benar",
   "Salah"
  ],
  "kunci": [
   0
  ]
 },
 {
  "id": 146,
  "tipe": "tf",
  "soal": "Peraturan Perusahaan adalah peraturan tertulis yang dibuat oleh Perusahaan yang memuat pedoman diantaranya tentang hak dan kewajiban Perusahaan dan Karyawan",
  "opsi": [
   "Benar",
   "Salah"
  ],
  "kunci": [
   0
  ]
 },
 {
  "id": 147,
  "tipe": "tf",
  "soal": "Mangkir 2 hari dapat dikenakan sanski Surat Peringatan III",
  "opsi": [
   "Benar",
   "Salah"
  ],
  "kunci": [
   1
  ]
 },
 {
  "id": 148,
  "tipe": "tf",
  "soal": "Karyawan tidak dibenarkan mengoperasikan unit/alat tanpa memiliki SIMPER",
  "opsi": [
   "Benar",
   "Salah"
  ],
  "kunci": [
   0
  ]
 },
 {
  "id": 149,
  "tipe": "tf",
  "soal": "Mangkir 1 hari dapat dikenakan sanksi Surat Tegura",
  "opsi": [
   "Benar",
   "Salah"
  ],
  "kunci": [
   1
  ]
 },
 {
  "id": 150,
  "tipe": "tf",
  "soal": "Masa berlaku Surat Peringatan I, Surat Peringatan II, Surat Peringatan III adalah 6 bulan",
  "opsi": [
   "Benar",
   "Salah"
  ],
  "kunci": [
   0
  ]
 }
];
