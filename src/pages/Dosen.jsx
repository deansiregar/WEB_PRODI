import React from 'react';

const Dosen = () => {
  // 1. Variabel BASE untuk mendeteksi apakah sedang di Localhost atau GitHub Pages
  const BASE = import.meta.env.BASE_URL;

  // Data Dosen Lengkap
  const lecturers = [
    {
      name: "Dr. Hermawan Syahputra, M.Si.",
      ttl: "Jati Mulyo, 30-09-1980",
      position: "Lektor (III/c)",
      expertise: "Image Processing, Pattern Recognition, Computer Vision",
      education: [
        "S1 Matematika USU",
        "S2 Ilmu Komputer IPB",
        "S3 Ilmu Komputer UGM"
      ],
      sintaLink: "https://sinta.kemdikbud.go.id/authors/profile/6011957",
      pubLink: "https://scholar.google.com/citations?user=GK5EHLYAAAAJ&hl=en&oi=ao",
      image: `${BASE}hermawan.jpg` // Menggunakan BASE
    },
    {
      name: "Said Iskandar Al Idrus, S.Si., M.Si.",
      ttl: "Rantau, 18-03-1977",
      position: "Lektor (III/c)",
      expertise: "Computational Science",
      education: [
        "S1 Matematika USU",
        "S2 Sains Komputasi ITB"
      ],
      sintaLink: "https://sinta.kemdikbud.go.id/authors/profile/6016058",
      pubLink: "https://scholar.google.com/citations?user=1VgpJpIAAAAJ&hl=en",
      image: `${BASE}said.jpg` // Menggunakan BASE
    },
    {
      name: "Zulfahmi Indra, S.Si., M.Cs.",
      ttl: "Medan, 11-02-1973",
      position: "Lektor (III/c)",
      expertise: "Artificial Intelligence (Algoritma Genetika)",
      education: [
        "S1 Matematika USU",
        "S2 Ilmu Komputer UGM"
      ],
      sintaLink: "https://sinta.kemdikbud.go.id/authors/profile/6026820",
      pubLink: "https://scholar.google.com/citations?user=c2BJ__cAAAAJ&hl=en&oi=ao",
      image: `${BASE}zulfahmi.jpg` // Menggunakan BASE
    },
    {
      name: "Dr. Arnita, M.Si.",
      ttl: "Pangkalan Brandan, 21-06-1976",
      position: "Lektor (III/d)",
      expertise: "Statistic and Data Mining",
      education: [
        "S1 Matematika USU",
        "S2 Statistika IPB",
        "S3 Matematika USU"
      ],
      sintaLink: "https://sinta.kemdikbud.go.id/authors/profile/6101062",
      pubLink: "https://scholar.google.com/citations?user=ih0EgWYAAAAJ&hl=en&oi=ao",
      image: `${BASE}arnita.jpg` // Menggunakan BASE
    },
    {
      name: "Yulita Molliq Rangkuti, S.Si., M.Sc., Ph.D.",
      ttl: "Lubuk Pakam, 22-01-1976",
      position: "Lektor Kepala (III/d)",
      expertise: "Mathematic Modelling",
      education: [
        "S1 Matematika USU",
        "S2 Matematika Universiti Kebangsaan Malaysia",
        "S3 Matematika Universiti Kebangsaan Malaysia"
      ],
      sintaLink: "https://sinta.kemdikbud.go.id/authors/profile/6007066",
      pubLink: "https://scholar.google.com/citations?user=Q6qWe3kAAAAJ&hl=en&oi=ao",
      image: `${BASE}yulita.jpg` // Menggunakan BASE
    },
    {
      name: "Kana Saputra S, S.Pd., M.Kom.",
      ttl: "Sigli, 16-08-1990",
      position: "Asisten Ahli (III/b)",
      expertise: "Bioinformatic and Data Mining",
      education: [
        "S1 Pendidikan Matematika UNSYIAH",
        "S2 Ilmu Komputer IPB"
      ],
      sintaLink: "https://sinta.kemdikbud.go.id/authors/profile/5980636",
      pubLink: "https://scholar.google.com/citations?user=IDcIUS4AAAAJ&hl=en&oi=ao",
      image: `${BASE}kana.jpg` // Menggunakan BASE
    },
    {
      name: "Insan Taufik, M.Kom.",
      ttl: "Aceh Tenggara, 09-02-1991",
      position: "Asisten Ahli (III/b)",
      expertise: "Web Programming, Image Processing",
      education: [
        "S1 Ilmu Komputer",
        "S2 Ilmu Komputer UPI"
      ],
      sintaLink: "https://sinta.kemdikbud.go.id/authors/profile/6732760",
      pubLink: "https://scholar.google.com/citations?user=5gvslm0AAAAJ&hl=en&oi=ao",
      image: `${BASE}insan.jpg` // Menggunakan BASE
    },
    {
      name: "Debi Yandra Niska, M.Kom",
      ttl: "Pesisir Selatan, 19-11-1990",
      position: "Asisten Ahli (III/b)",
      expertise: "Decision Support System",
      education: [
        "S1 Ilmu Komputer UPI",
        "S2 Ilmu Komputer UPI"
      ],
      sintaLink: "https://sinta.kemdikbud.go.id/authors/profile/6162023",
      pubLink: "https://scholar.google.com/citations?user=fm-UV-0AAAAJ&hl=en&oi=ao",
      image: `${BASE}sui.jpg` // Menggunakan BASE
    },
    {
      name: "Dr. Eng. Mansur As",
      ttl: "Dumai Barat, 11-06-1982",
      position: "Lektor (III/c)",
      expertise: "Data Mining and Artificial Intelligence",
      education: [
        "S1 Teknik Informatika STMIK Handayani Makassar",
        "S2 Teknik Informatika UNHAS & Kyushu Univ.",
        "S3 Advanced IT, Kyushu University, Jepang"
      ],
      sintaLink: "https://sinta.kemdikbud.go.id/authors/profile/6774720",
      pubLink: "https://scholar.google.com/citations?user=1jPsRKAAAAAJ&hl=en&oi=ao",
      image: `${BASE}mansur.jpg` // Menggunakan BASE
    },
    {
      name: "Putri Harliana, S.T., M.Kom",
      ttl: "Medan, 23 Maret 1990",
      position: "Lektor (III/d)",
      expertise: "Artificial Intelligence",
      education: [
        "S1 Sekolah Tinggi Teknik Harapan",
        "S2 Universitas Sumatera Utara"
      ],
      sintaLink: "https://sinta.kemdikbud.go.id/authors/profile/6002359",
      pubLink: "https://scholar.google.com/citations?user=CG7og2UAAAAJ&hl=en&oi=ao",
      image: `${BASE}putri.jpg` // Menggunakan BASE
    },
    {
      name: "Fanny Ramadhani, S.Kom., M.Kom",
      ttl: "Medan, 09 Maret 1993",
      position: "Asisten Ahli (III/b)",
      expertise: "Computer Science, Data Science",
      education: [
        "S1 Teknik Informatika USU",
        "S2 Teknik Informatika USU"
      ],
      sintaLink: "https://sinta.kemdikbud.go.id/authors/profile/6752703",
      pubLink: "https://scholar.google.com/citations?hl=en&view_op=list_works&authuser=4&gmla=AJsN-F7BQzVynZA5WvF2t3RQpONZoiwkZJaF6JjkbTZu3AfEZq4DbN323OLnLvTMf9X5zW_DCe24tzz96YkKSLyK9QkXllsL-Q&user=xv03R9cAAAAJ",
      image: `${BASE}fanny.jpg` // Menggunakan BASE
    },
    {
      name: "Adidtya Perdana, S.T., M.Kom",
      ttl: "Medan, 24 Desember 1989",
      position: "Lektor (III/c)",
      expertise: "Artificial Intelligence",
      education: [
        "S1 Teknik Informatika STTH",
        "S2 Teknik Informatika USU"
      ],
      sintaLink: "https://sinta.kemdikbud.go.id/authors/profile/5979680",
      pubLink: "https://scholar.google.com/citations?user=kQKIiT0AAAAJ&hl=id&authuser=1",
      image: `${BASE}adidtya.jpg` // Menggunakan BASE
    },
    {
      name: "Sri Dewi, S.Kom., M.Kom",
      ttl: "Mulyorejo, 27 Juni 1996",
      position: "III/b",
      expertise: "Data Mining",
      education: [
        "S1 Sistem Informasi UPI YPTK Padang",
        "S2 Sistem Informasi UPI YPTK Padang"
      ],
      sintaLink: "https://sinta.kemdikbud.go.id/authors/profile/6835736",
      pubLink: "https://scholar.google.com/citations?user=XwHiyxgAAAAJ&hl=en",
      image: `${BASE}dewi.jpg` // Menggunakan BASE
    },
    {
      name: "Dedy Kiswanto S.Kom., M.Kom",
      ttl: "Sihare-hare, 16 Februari 1990",
      position: "III/b",
      expertise: "Network Infrastruktur, Cyber Security",
      education: [
        "S1 Ilmu Komputer IPB",
        "S2 Ilmu Komputer IPB"
      ],
      sintaLink: "https://sinta.kemdikbud.go.id/authors/profile/6828715",
      pubLink: "https://scholar.google.com/citations?user=_SKa-k0AAAAJ&hl=en&oi=ao",
      image: `${BASE}dedi.jpg` // Menggunakan BASE
    },
    {
      name: "Ichwanul Muslim Karo Karo, S.Kom, M.Kom",
      ttl: "Banda Aceh, 16 September 1993",
      position: "Asisten Ahli (III/b)",
      expertise: "Data Mining, Spatial Mining, Data Science",
      education: [
        "S1 Ilmu Komputasi, Universitas Telkom",
        "S2 Informatika, Universitas Telkom"
      ],
      sintaLink: "https://sinta.kemdikbud.go.id/authors/profile/6731973",
      pubLink: "https://scholar.google.co.id/citations?user=LPPLLhMAAAAJ&hl=id",
      image: `${BASE}iwan.jpg` // Menggunakan BASE
    }
  ];

  return (
    <div className="main-content">
      <div className="header">
        <h1>Data Dosen & Staf Pengajar</h1>
      </div>

      <div className="content-section" style={{ backgroundColor: 'transparent', boxShadow: 'none', padding: 0 }}>
        {}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
          gap: '24px' 
        }}>
          {lecturers.map((dosen, index) => (
            <div key={index} style={{
              backgroundColor: 'white',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              border: '1px solid #eee',
              display: 'flex',
              flexDirection: 'column',
              height: '100%'
            }} className="dosen-card">
              
              {/* Header Warna */}
              <div style={{ height: '80px', background: 'linear-gradient(to right, var(--primary), var(--secondary))', flexShrink: 0 }}></div>
              
              {/* Foto & Nama */}
              <div style={{ 
                textAlign: 'center', 
                padding: '0 20px', 
                marginTop: '-40px',
                flexShrink: 0 
              }}>
                <img 
                  src={dosen.image} 
                  alt={dosen.name}
                  style={{ 
                    width: '80px', 
                    height: '80px', 
                    borderRadius: '50%', 
                    border: '4px solid white', 
                    objectFit: 'cover',
                    backgroundColor: '#f0f0f0',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
                  }} 
                />
                <h3 style={{ fontSize: '1.1rem', margin: '10px 0 5px', color: 'var(--dark)' }}>{dosen.name}</h3>
                <span style={{ 
                  display: 'inline-block',
                  backgroundColor: '#e8f5e9',
                  color: 'var(--primary)',
                  padding: '4px 12px',
                  borderRadius: '15px',
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  marginBottom: '15px'
                }}>
                  {dosen.position}
                </span>
              </div>

              {/* Detail Info Wrapper (Flex column) */}
              <div style={{ 
                padding: '0 20px 20px', 
                display: 'flex', 
                flexDirection: 'column', 
                flex: 1 // Membuat wrapper ini mengisi sisa ruang kartu
              }}>
                
                {/* Konten Teks (Bidang Keahlian, Pendidikan, TTL) */}
                <div style={{ marginBottom: '20px', flex: 1 }}>
                   <div style={{ marginBottom: '15px' }}>
                      <p style={{ fontSize: '0.85rem', color: '#666', marginBottom: '4px' }}><strong>Bidang Keahlian:</strong></p>
                      <p style={{ fontSize: '0.9rem', color: '#333' }}>{dosen.expertise}</p>
                   </div>

                   <div style={{ marginBottom: '15px' }}>
                      <p style={{ fontSize: '0.85rem', color: '#666', marginBottom: '4px' }}><strong>Pendidikan:</strong></p>
                      <ul style={{ paddingLeft: '20px', margin: 0, fontSize: '0.9rem', color: '#555' }}>
                        {dosen.education.map((edu, idx) => (
                          <li key={idx}>{edu}</li>
                        ))}
                      </ul>
                   </div>
                   
                   <div style={{ fontSize: '0.85rem', color: '#888', fontStyle: 'italic' }}>
                      <i className="fas fa-birthday-cake" style={{ marginRight: '6px' }}></i>
                      {dosen.ttl}
                   </div>
                </div>

                {/* Tombol Link */}
                <div style={{ display: 'flex', gap: '10px', marginTop: 'auto' }}>
                  <a 
                    href={dosen.sintaLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      flex: 1,
                      textAlign: 'center',
                      padding: '10px',
                      borderRadius: '6px',
                      backgroundColor: '#FFD700',
                      color: '#333',
                      textDecoration: 'none',
                      fontSize: '0.85rem',
                      fontWeight: 'bold',
                      transition: '0.3s',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}
                  >
                    SINTA
                  </a>
                  <a 
                    href={dosen.pubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      flex: 1,
                      textAlign: 'center',
                      padding: '10px',
                      borderRadius: '6px',
                      backgroundColor: 'var(--primary)',
                      color: 'white',
                      textDecoration: 'none',
                      fontSize: '0.85rem',
                      fontWeight: 'bold',
                      transition: '0.3s',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}
                  >
                    Publikasi
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dosen;