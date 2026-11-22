export const siteConfig = {
  name: "Fathur",
  fullName: "Fathurrahman Hariyadi",
  role: "Web Developer",
  domain: "fthr",
  location: "Lampung, Indonesia",
  timezone: "GMT+7",
  email: "hello@fathurrahmanh.me",
  available: true,
  tagline:
    "Web Developer & Mahasiswa Ilmu Komputer yang antusias membangun solusi web kreatif dan fungsional.",
  description:
    "Mahasiswa Ilmu Komputer di Universitas Lampung yang berfokus pada pengembangan aplikasi web modern, antarmuka interaktif, dan pengelolaan komunitas digital.",
  social: {
    github: "https://github.com/fhariyadi-dev",
    linkedin: "-",
    instagram: "https://www.instagram.com/fthr.sja/",
    email: "mailto:hello@fathurrahmanh.me",
    discord: "https://discord.gg/B2eErwmkna",
  },
  bubbles: ["fthr", "bot", "noob", "plenger"],
};

export const stats = [
  { label: "Proyek Selesai", value: 5, suffix: "+" },
  { label: "Teknologi & Bahasa", value: 8, suffix: "+" },
  { label: "Klien & Testimoni", value: 4, suffix: "+" },
  { label: "Sertifikat", value: 7, suffix: "" },
];

export const educationChips = [
  "Ilmu Komputer — Universitas Lampung",
  "Web & Frontend Development",
  "Photography & Videography",
];

export const skillGroups = [
  {
    label: "Web & Frontend Development",
    accent: "primary",
    skills: [
      { name: "JavaScript", level: 50 },
      { name: "Frontend Development", level: 40 },
      { name: "User Authentication Systems", level: 50 },
      { name: "Role-Based Access Control", level: 60 },
    ],
  },
  {
    label: "Programming Languages",
    accent: "secondary",
    skills: [
      { name: "C", level: 45 },
      { name: "C++", level: 85 },
      { name: "Python", level: 50 },
      { name: "Assembly", level: 50 },
    ],
  },
  {
    label: "Photographer",
    accent: "accent-2",
    skills: [
      { name: "Photography", level: 95 },
      { name: "Videography", level: 75 },
      { name: "Editing", level: 55 },
    ],
  },
];

export const journey = [
  {
    year: "2006",
    title: "Kelahiran",
    context: "Awal Mula",
    description:
      "Saya lahir di Lampung, Indonesia. Sejak kecil, saya sudah tertarik dengan teknologi dan komputer, yang menjadi fondasi awal minat saya dalam dunia pemrograman dan pengembangan web.",
  },
  {
    year: "2013",
    title: "Sekolah Dasar",
    context: "Pendidikan Awal",
    description:
      "Saya memulai pendidikan saya di sekolah dasar, di mana saya mulai mengembangkan keterampilan dasar dalam matematika, yang nantinya akan sangat berguna dalam pemrograman.",
  },
  {
    year: "2019",
    title: "Sekolah Menengah Pertama",
    context: "Pendidikan Menengah Pertama",
    description:
      "Saya melanjutkan pendidikan saya di sekolah menengah, di mana saya mulai mengembangkan minat saya dalam bidang teknologi dan pemrograman.",
  },
  {
    year: "2022",
    title: "Sekolah Menengah Atas",
    context: "Pendidikan Menengah Atas",
    description:
      "Saya melanjutkan pendidikan saya di sekolah menengah atas, di mana saya mulai mengembangkan keterampilan saya dalam pemrograman dan pengembangan web. Saya juga fokus belajar terhadap mata pelajaran yang berhubungan dengan teknologi dan komputer seperti Informatika",
  },
  {
    year: "2025 - 2026",
    title: "Mahasiswa",
    context: "Pendidikan Tinggi",
    description:
      "Saya melanjutkan pendidikan saya di Universitas Lampung, mengambil jurusan Ilmu Komputer. Di sini, saya fokus pada pengembangan web dan pemrograman, serta memperluas pengetahuan saya dalam bidang teknologi. Namun, sebelum di Universitas Lampung saya juga pernah menempuh pendidikan di Universitas Ahmad Dahlan Yogyakarta, mengambil jurusan Teknik Informatika. Disini saya belajar banyak tentang pemrograman dimulai dari bahasa pemrograman C, C++, dan Assembly.",
  },
];

export const projects = [
  {
    id: "project-01",
    title: "Website Roleplay FiveM | The Old Norse IME ROLEPLAY",
    description:
      "Website Roleplay FiveM yang digunakan untuk menyimpan data roleplay suatu kelompok di dalam game GTA V yang berada di server IME Roleplay, website ini berbasis realtime untuk mencatat pemesanan resource weapon, pemasukan serta pengeluaran keuangan kelompok dan juga untuk melihat data anggota yang ada di kelompok tersebut.",
    tags: ["HTML", "CSS", "JavaScript", "React"],
    featured: true,
    impact: "Sentralisasi Data Anggota, Keuangan & Logistik Kelompok Secara Real-time",
    github: "https://github.com/fhariyadi-dev/tonvault.my.id",
    demo: "https://www.tonvault.my.id/",
    image: "/assets/project-ton-imerp.svg",
  },
  {
    id: "project-02",
    title: "Pemrograman Validasi Kartu Kredit | Tugas Akhir EMU8086",
    description:
      "Tugas Akhir Mata Kuliah Dasar Sistem Komputer, membuat program validasi kartu kredit menggunakan bahasa assembly EMU8086, program ini dapat memvalidasi kartu kredit dengan menggunakan algoritma Luhn.",
    tags: ["Assembly", "EMU8086", "Validasi"],
    github: "https://github.com/fhariyadi-dev/program_emu8086_validasikartukredit",
    demo: "-",
    image: "/assets/project-validasi-kartu-kredit.svg",
  },
  {
    id: "project-03",
    title: "Sistem Pembagian Tagihan & Pengeluaran Kost",
    description:
      "Tugas Akhir Project Semester 1 Ilmu Komputer berupa program berbasis C++ untuk mencatat, menghitung, dan membagi tagihan serta pengeluaran bulanan penghuni kost secara otomatis, transparan, dan akurat.",
    tags: ["C++", "Algoritma", "CLI"],
    github: "https://github.com/fhariyadi-dev/Sistem-Pembagian-Tagihan-Pengeluaran-Kost",
    demo: "-",
    image: "/assets/project-tagihan-kost.svg",
  },
  {
    id: "project-04",
    title: "Website Penjadwalan Mata Kuliah",
    description:
      "Aplikasi web interaktif berbasis HTML, CSS, dan JavaScript untuk menyusun serta mengelola jadwal mata kuliah mahasiswa agar lebih terstruktur. Dikembangkan untuk tugas Mata Kuliah Penerapan Gen AI.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/fhariyadi-dev/Website-Penjadwalan-Mata-Kuliah",
    demo: "https://website-penjadwalan-mata-kuliah.vercel.app",
    image: "/assets/project-jadwal-kuliah.svg",
  },
  {
    id: "project-05",
    title: "Website Animation Song | Playlist Lagu Interaktif",
    description:
      "Website pemutar daftar lagu (playlist) interaktif yang dilengkapi dengan tampilan visual dan animasi antarmuka berbasis HTML, CSS, dan JavaScript.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/fhariyadi-dev/Website-Animation-Song",
    demo: "-",
    image: "/assets/project-animation-song.svg",
  },
];

export const testimonials = [
  {
    name: "Lixxz",
    role: "Buyer Desain Discord Community",
    quote:
      "Service nya sangat baik, fast respon untuk komunikasinya, bisa request bot discord, dan hasil desainnya juga sangat memuaskan. Recommended banget buat kalian yang mau bikin desain server discord.",
  },
  {
    name: "Ozii",
    role: "Buyer Website Roleplay FiveM",
    quote:
      "Hasilnya sangat memuaskan, bebas maintenance, dan bisa request fitur tambahan. Recommended banget buat kalian yang mau bikin website roleplay FiveM.",
  },
  {
    name: "Mikee",
    role: "Buyer Website Roleplay FiveM",
    quote:
      "Pengerjaannya termasuk cepat, hasilnya memuaskan, bisa request fitur tambahan, dan bisa maintenance sendiri. Cocok buat yang butuh website untuk kerja/game seperti GTA V Roleplay.",
  },
  {
    name: "Hadezz",
    role: "Buyer Discord Community & Data Base Server Roleplay",
    quote:
      "Admin ramah & fast respon, pengerjaan bagian discord cepat dan terstruktur bot yang ditambahkan juga sangat membantu, untuk data base server cukup worth it untuk yang ingin buat server roleplay sendiri.",
  },
];

export const faqs = [
  {
    q: "Apakah Anda terbuka untuk diskusi atau kolaborasi non-komersial?",
    a: "Yaa sangat terbuka! Saya aktif membangun dan mengelola ruang komunitas di Discord untuk berdiskusi seputar teknologi, jadi saya selalu antusias jika ada kesempatan untuk bertukar pikiran atau berkolaborasi.",
  },
  {
    q: "Layanan apa saja yang bisa Anda kerjakan?",
    a: "Fokus utama saya adalah frontend web development dan desain antarmuka. Selain itu, saya juga menyediakan jasa desain community di discord, hingga penyuntingan foto.",
  },
  {
    q: "Apakah Anda menerima proyek freelance?",
    a: "Ya, saya terbuka untuk proyek freelance. Saya memiliki pengalaman mengembangkan aplikasi web sisi klien mulai dari sistem autentikasi hingga dashboard dan memastikannya siap diserahkan kepada klien.",
  },
  {
    q: "Bagaimana estimasi waktu pengerjaan proyek Anda?",
    a: "Sebagai mahasiswa aktif Ilmu Komputer, saya menerapkan jam kerja yang fleksibel. Namun, saya selalu merencanakan timeline yang jelas di awal bersama klien untuk memastikan proyek selesai tepat waktu dengan kualitas terbaik.",
  },
];