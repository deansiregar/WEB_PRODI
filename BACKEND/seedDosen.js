require('dotenv').config();
const mongoose = require('mongoose');
const Dosen = require('./models/Dosen'); // Pastikan path model benar

// Data Dosen Lama (Format disesuaikan dengan Schema)
const lecturers = [
  {
    name: "Dr. Hermawan Syahputra, M.Si.",
    ttl: "Jati Mulyo, 30-09-1980",
    position: "Lektor (III/c)",
    expertise: "Image Processing, Pattern Recognition, Computer Vision",
    education: ["S1 Matematika USU", "S2 Ilmu Komputer IPB", "S3 Ilmu Komputer UGM"],
    sintaLink: "https://sinta.kemdikbud.go.id/authors/profile/6011957",
    pubLink: "https://scholar.google.com/citations?user=GK5EHLYAAAAJ&hl=en&oi=ao",
    image: "hermawan.jpg"
  },
  {
    name: "Said Iskandar Al Idrus, S.Si., M.Si.",
    ttl: "Rantau, 18-03-1977",
    position: "Lektor (III/c)",
    expertise: "Computational Science",
    education: ["S1 Matematika USU", "S2 Sains Komputasi ITB"],
    sintaLink: "https://sinta.kemdikbud.go.id/authors/profile/6016058",
    pubLink: "https://scholar.google.com/citations?user=1VgpJpIAAAAJ&hl=en",
    image: "said.jpg"
  },
  {
    name: "Zulfahmi Indra, S.Si., M.Cs.",
    ttl: "Medan, 11-02-1973",
    position: "Lektor (III/c)",
    expertise: "Artificial Intelligence (Algoritma Genetika)",
    education: ["S1 Matematika USU", "S2 Ilmu Komputer UGM"],
    sintaLink: "https://sinta.kemdikbud.go.id/authors/profile/6026820",
    pubLink: "https://scholar.google.com/citations?user=c2BJ__cAAAAJ&hl=en&oi=ao",
    image: "zulfahmi.jpg"
  },
  {
    name: "Dr. Arnita, M.Si.",
    ttl: "Pangkalan Brandan, 21-06-1976",
    position: "Lektor (III/d)",
    expertise: "Statistic and Data Mining",
    education: ["S1 Matematika USU", "S2 Statistika IPB", "S3 Matematika USU"],
    sintaLink: "https://sinta.kemdikbud.go.id/authors/profile/6101062",
    pubLink: "https://scholar.google.com/citations?user=ih0EgWYAAAAJ&hl=en&oi=ao",
    image: "arnita.jpg"
  },
  {
    name: "Yulita Molliq Rangkuti, S.Si., M.Sc., Ph.D.",
    ttl: "Lubuk Pakam, 22-01-1976",
    position: "Lektor Kepala (III/d)",
    expertise: "Mathematic Modelling",
    education: ["S1 Matematika USU", "S2 Matematika Universiti Kebangsaan Malaysia", "S3 Matematika Universiti Kebangsaan Malaysia"],
    sintaLink: "https://sinta.kemdikbud.go.id/authors/profile/6007066",
    pubLink: "https://scholar.google.com/citations?user=Q6qWe3kAAAAJ&hl=en&oi=ao",
    image: "yulita.jpg"
  },
  {
    name: "Kana Saputra S, S.Pd., M.Kom.",
    ttl: "Sigli, 16-08-1990",
    position: "Asisten Ahli (III/b)",
    expertise: "Bioinformatic and Data Mining",
    education: ["S1 Pendidikan Matematika UNSYIAH", "S2 Ilmu Komputer IPB"],
    sintaLink: "https://sinta.kemdikbud.go.id/authors/profile/5980636",
    pubLink: "https://scholar.google.com/citations?user=IDcIUS4AAAAJ&hl=en&oi=ao",
    image: "kana.jpg"
  },
  {
    name: "Insan Taufik, M.Kom.",
    ttl: "Aceh Tenggara, 09-02-1991",
    position: "Asisten Ahli (III/b)",
    expertise: "Web Programming, Image Processing",
    education: ["S1 Ilmu Komputer", "S2 Ilmu Komputer UPI"],
    sintaLink: "https://sinta.kemdikbud.go.id/authors/profile/6732760",
    pubLink: "https://scholar.google.com/citations?user=5gvslm0AAAAJ&hl=en&oi=ao",
    image: "insan.jpg"
  },
  {
    name: "Debi Yandra Niska, M.Kom",
    ttl: "Pesisir Selatan, 19-11-1990",
    position: "Asisten Ahli (III/b)",
    expertise: "Decision Support System",
    education: ["S1 Ilmu Komputer UPI", "S2 Ilmu Komputer UPI"],
    sintaLink: "https://sinta.kemdikbud.go.id/authors/profile/6162023",
    pubLink: "https://scholar.google.com/citations?user=fm-UV-0AAAAJ&hl=en&oi=ao",
    image: "sui.jpg"
  },
  {
    name: "Dr. Eng. Mansur As",
    ttl: "Dumai Barat, 11-06-1982",
    position: "Lektor (III/c)",
    expertise: "Data Mining and Artificial Intelligence",
    education: ["S1 Teknik Informatika STMIK Handayani Makassar", "S2 Teknik Informatika UNHAS & Kyushu Univ.", "S3 Advanced IT, Kyushu University, Jepang"],
    sintaLink: "https://sinta.kemdikbud.go.id/authors/profile/6774720",
    pubLink: "https://scholar.google.com/citations?user=1jPsRKAAAAAJ&hl=en&oi=ao",
    image: "mansur.jpg"
  },
  {
    name: "Putri Harliana, S.T., M.Kom",
    ttl: "Medan, 23 Maret 1990",
    position: "Lektor (III/d)",
    expertise: "Artificial Intelligence",
    education: ["S1 Sekolah Tinggi Teknik Harapan", "S2 Universitas Sumatera Utara"],
    sintaLink: "https://sinta.kemdikbud.go.id/authors/profile/6002359",
    pubLink: "https://scholar.google.com/citations?user=CG7og2UAAAAJ&hl=en&oi=ao",
    image: "putri.jpg"
  },
  {
    name: "Fanny Ramadhani, S.Kom., M.Kom",
    ttl: "Medan, 09 Maret 1993",
    position: "Asisten Ahli (III/b)",
    expertise: "Computer Science, Data Science",
    education: ["S1 Teknik Informatika USU", "S2 Teknik Informatika USU"],
    sintaLink: "https://sinta.kemdikbud.go.id/authors/profile/6752703",
    pubLink: "https://scholar.google.com/citations?hl=en&view_op=list_works&authuser=4&gmla=AJsN-F7BQzVynZA5WvF2t3RQpONZoiwkZJaF6JjkbTZu3AfEZq4DbN323OLnLvTMf9X5zW_DCe24tzz96YkKSLyK9QkXllsL-Q&user=xv03R9cAAAAJ",
    image: "fanny.jpg"
  },
  {
    name: "Adidtya Perdana, S.T., M.Kom",
    ttl: "Medan, 24 Desember 1989",
    position: "Lektor (III/c)",
    expertise: "Artificial Intelligence",
    education: ["S1 Teknik Informatika STTH", "S2 Teknik Informatika USU"],
    sintaLink: "https://sinta.kemdikbud.go.id/authors/profile/5979680",
    pubLink: "https://scholar.google.com/citations?user=kQKIiT0AAAAJ&hl=id&authuser=1",
    image: "adidtya.jpg"
  },
  {
    name: "Sri Dewi, S.Kom., M.Kom",
    ttl: "Mulyorejo, 27 Juni 1996",
    position: "III/b",
    expertise: "Data Mining",
    education: ["S1 Sistem Informasi UPI YPTK Padang", "S2 Sistem Informasi UPI YPTK Padang"],
    sintaLink: "https://sinta.kemdikbud.go.id/authors/profile/6835736",
    pubLink: "https://scholar.google.com/citations?user=XwHiyxgAAAAJ&hl=en",
    image: "dewi.jpg"
  },
  {
    name: "Dedy Kiswanto S.Kom., M.Kom",
    ttl: "Sihare-hare, 16 Februari 1990",
    position: "III/b",
    expertise: "Network Infrastruktur, Cyber Security",
    education: ["S1 Ilmu Komputer IPB", "S2 Ilmu Komputer IPB"],
    sintaLink: "https://sinta.kemdikbud.go.id/authors/profile/6828715",
    pubLink: "https://scholar.google.com/citations?user=_SKa-k0AAAAJ&hl=en&oi=ao",
    image: "dedi.jpg"
  },
  {
    name: "Ichwanul Muslim Karo Karo, S.Kom, M.Kom",
    ttl: "Banda Aceh, 16 September 1993",
    position: "Asisten Ahli (III/b)",
    expertise: "Data Mining, Spatial Mining, Data Science",
    education: ["S1 Ilmu Komputasi, Universitas Telkom", "S2 Informatika, Universitas Telkom"],
    sintaLink: "https://sinta.kemdikbud.go.id/authors/profile/6731973",
    pubLink: "https://scholar.google.co.id/citations?user=LPPLLhMAAAAJ&hl=id",
    image: "iwan.jpg"
  }
];

// Fungsi untuk memasukkan data
const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ Connected to MongoDB');

    // Hapus data lama agar tidak duplikat (Opsional, uncomment jika mau reset)
    // await Dosen.deleteMany({});
    // console.log('🗑️ Data lama dihapus');

    await Dosen.insertMany(lecturers);
    console.log('🎉 Semua data Dosen berhasil ditambahkan!');
    
    mongoose.connection.close();
  } catch (err) {
    console.error('❌ Error seeding database:', err);
    mongoose.connection.close();
  }
};

seedDB();