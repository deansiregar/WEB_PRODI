import React from 'react';

const ProfilProdi = () => {
  // Data prospek karir
  const careerProspects = [
    {
      icon: 'fas fa-brain',
      title: 'Intelligent System',
      description: 'Mengembangkan sistem cerdas dan AI untuk solusi bisnis'
    },
    {
      icon: 'fas fa-laptop-code',
      title: 'Software Engineer',
      description: 'Mendesain dan mengembangkan aplikasi software berkualitas'
    },
    {
      icon: 'fas fa-chart-bar',
      title: 'Data Analyst',
      description: 'Menganalisis data untuk insights bisnis yang strategis'
    },
    {
      icon: 'fas fa-search',
      title: 'System Analysis',
      description: 'Menganalisis dan merancang sistem informasi perusahaan'
    },
    {
      icon: 'fas fa-tasks',
      title: 'IT Project Manager',
      description: 'Mengelola proyek teknologi dari perencanaan hingga implementasi'
    },
    {
      icon: 'fas fa-network-wired',
      title: 'Network Engineer',
      description: 'Membangun dan memelihara infrastruktur jaringan'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Cyber Security',
      description: 'Melindungi sistem dari ancaman keamanan siber'
    }
  ];

  // Data prestasi horizontal
  const achievements = [
    {
      year: '2025',
      title: 'Lorem Ipsum Dolor Sit',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.'
    },
    {
      year: '2024',
      title: 'Consectetur Adipiscing',
      description: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.'
    },
    {
      year: '2023',
      title: 'Sed Do Eiusmod Tempor',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.'
    },
    {
      year: '2022',
      title: 'Incididunt Ut Labore',
      description: 'Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.'
    },
    {
      year: '2021',
      title: 'Ut Enim Ad Minim',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.'
    }
  ];

  return (
    <div className="main-content">
      <div className="header">
        <h1>Profil Program Studi Ilmu Komputer</h1>
        <p style={{ color: 'var(--gray)', marginTop: '10px' }}>
          Universitas Negeri Medan - Fakultas Matematika dan Ilmu Pengetahuan Alam
        </p>
      </div>

      {/* Akreditasi & Keunggulan (Bersampingan di desktop) */}
      <div className="content-section">
        <div className="grid-section">
          {/* Akreditasi */}
          <div>
            <h3 style={{ 
              color: 'var(--primary)', 
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center'
            }}>
              <i className="fas fa-award" style={{ marginRight: '10px' }}></i>
              Akreditasi Program Studi
            </h3>
            <div style={{
              background: 'linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)',
              padding: '30px',
              borderRadius: '12px',
              border: '2px solid var(--primary)',
              textAlign: 'center',
              boxShadow: '0 8px 20px rgba(46, 139, 87, 0.15)',
              position: 'relative',
              overflow: 'hidden',
              height: '100%'
            }}>
              <div style={{
                position: 'absolute',
                top: '-20px',
                right: '-20px',
                width: '100px',
                height: '100px',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '50%'
              }}></div>
              <div style={{
                position: 'absolute',
                bottom: '-30px',
                left: '-30px',
                width: '120px',
                height: '120px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '50%'
              }}></div>

              <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: 'var(--primary)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                color: 'white',
                fontSize: '2rem',
                boxShadow: '0 4px 12px rgba(46, 139, 87, 0.3)'
              }}>
                <i className="fas fa-star"></i>
              </div>

              <h3 style={{ 
                color: 'var(--primary)', 
                marginBottom: '15px',
                fontSize: '1.8rem',
                fontWeight: 'bold'
              }}>
                BAIK SEKALI
              </h3>

              <div style={{
                backgroundColor: 'white',
                padding: '20px',
                borderRadius: '8px',
                marginBottom: '20px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                textAlign: 'left'
              }}>
                <div style={{ marginBottom: '15px' }}>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    marginBottom: '8px' 
                  }}>
                    <i className="fas fa-certificate" style={{ 
                      color: 'var(--primary)', 
                      marginRight: '10px',
                      width: '16px'
                    }}></i>
                    <strong>Sertifikat LAM INFOKOM</strong>
                  </div>
                  <div style={{ fontSize: '0.9rem', color: '#666', paddingLeft: '26px' }}>
                    No. 246/SK/LAM-INFOKOM/Ak/S/VIII/2025
                  </div>
                </div>

                <div style={{ marginBottom: '15px' }}>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    marginBottom: '8px' 
                  }}>
                    <i className="fas fa-calendar-alt" style={{ 
                      color: 'var(--primary)', 
                      marginRight: '10px',
                      width: '16px'
                    }}></i>
                    <strong>Masa Berlaku</strong>
                  </div>
                  <div style={{ fontSize: '0.9rem', color: '#666', paddingLeft: '26px' }}>
                    18 Agustus 2025 - 18 Agustus 2030
                  </div>
                </div>

                <div>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    marginBottom: '8px' 
                  }}>
                    <i className="fas fa-university" style={{ 
                      color: 'var(--primary)', 
                      marginRight: '10px',
                      width: '16px'
                    }}></i>
                    <strong>Program Studi</strong>
                  </div>
                  <div style={{ fontSize: '0.9rem', color: '#666', paddingLeft: '26px' }}>
                    Ilmu Komputer - Universitas Negeri Medan
                  </div>
                </div>
              </div>

              <a 
                href="/SERTIFIKAT_PRODI_ILMU_KOMPUTER.pdf"
                download="SERTIFIKAT_AKREDITASI_ILMU_KOMPUTER_UNIMED.pdf"
                style={{
                  display: 'inline-block',
                  backgroundColor: 'var(--primary)',
                  color: 'white',
                  padding: '8px 20px',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#1e6b47';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'var(--primary)';
                }}
              >
                TERAKREDITASI
              </a>
            </div>
          </div>

          {/* Keunggulan */}
          <div>
            <h3 style={{ 
              color: 'var(--primary)', 
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center'
            }}>
              <i className="fas fa-star" style={{ marginRight: '10px' }}></i>
              Keunggulan Program Studi
            </h3>
            <div style={{ 
              backgroundColor: 'white',
              padding: '25px',
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              height: '100%'
            }}>
              <p style={{ lineHeight: '1.8', marginBottom: '15px' }}>
                <strong>Lorem ipsum dolor sit amet</strong>, consectetur adipiscing elit. 
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
              <p style={{ lineHeight: '1.8', marginBottom: '15px' }}>
                <strong>Duis aute irure dolor</strong> in reprehenderit in voluptate velit 
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                cupidatat non proident, sunt in culpa qui officia deserunt mollit.
              </p>
              <p style={{ lineHeight: '1.8' }}>
                <strong>Sed ut perspiciatis unde</strong> omnis iste natus error sit 
                voluptatem accusantium doloremque laudantium, totam rem aperiam, 
                eaque ipsa quae ab illo inventore veritatis.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sejarah & Visi Misi (Bersampingan di desktop) */}
      <div className="content-section">
        <div className="grid-section">
          {/* Sejarah */}
          <div>
            <h3 style={{ 
              color: 'var(--primary)', 
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center'
            }}>
              <i className="fas fa-history" style={{ marginRight: '10px' }}></i>
              Sejarah Program Studi
            </h3>
            <div style={{ 
              lineHeight: '1.8',
              backgroundColor: 'white',
              padding: '25px',
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              height: '100%'
            }}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                eu fugiat nulla pariatur.
              </p>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus 
                error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
              </p>
            </div>
          </div>

          {/* Visi Misi */}
          <div>
            <h3 style={{ 
              color: 'var(--primary)', 
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center'
            }}>
              <i className="fas fa-bullseye" style={{ marginRight: '10px' }}></i>
              Visi & Misi
            </h3>
            <div style={{ 
              backgroundColor: 'rgba(46, 139, 87, 0.05)', 
              padding: '25px',
              borderRadius: '8px',
              borderLeft: '4px solid var(--primary)',
              height: '100%'
            }}>
              <h4 style={{ color: 'var(--primary)', marginBottom: '10px' }}>Visi:</h4>
              <p style={{ fontStyle: 'italic', marginBottom: '20px' }}>
                "Menjadi program studi yang unggul pada bidang artificial intelegensi dan 
                sains komputasi secara Nasional dan mendapat pengakuan Internasional."
              </p>
              
              <h4 style={{ color: 'var(--primary)', marginBottom: '10px' }}>Misi:</h4>
              <ul style={{ paddingLeft: '20px' }}>
                <li>Menyelenggarakan pendidikan dan pembelajaran ilmu komputer berfokus pada bidang artificial intelegensi dan sains komputasi yang bermutu dan bernuansa link and match dengan kebutuhan stakeholder.</li>
                <li>Menyelenggarakan penelitian di bidang ilmu komputer berfokus pada bidang artificial intelegensi dan sains komputasi yang inovatif dan aplikatif serta mengembangkan rekayasa industri dan teknologi yang kreatif.</li>
                <li>Menyelenggarakan pengabdian kepada masyarakat melalui pemetaan kebutuhan dan permasalahan teknologi komputer di masyarakat.</li>
                <li>Mengembangkan budaya ilmiah dan budaya etnik, kewirausahaan, membina suasana akademik yang sehat.</li>
                <li>Menjalin kerjasama secara berkelanjutan dengan berbagai instansi di tingkat lokal, nasional, regional, dan internasional.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Prospek Karir (Full Width) */}
      <div className="content-section">
        <h3 style={{ 
          color: 'var(--primary)', 
          marginBottom: '30px',
          textAlign: 'center'
        }}>
          <i className="fas fa-briefcase" style={{ marginRight: '10px' }}></i>
          Prospek Karir Lulusan
        </h3>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px'
        }}>
          {careerProspects.map((career, index) => (
            <div key={index} style={{
              backgroundColor: 'white',
              padding: '25px',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              textAlign: 'center',
              borderTop: '4px solid var(--primary)',
              transition: 'transform 0.3s ease',
              cursor: 'pointer'
            }} 
            className="career-card"
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                backgroundColor: 'rgba(46, 139, 87, 0.1)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 15px',
                color: 'var(--primary)',
                fontSize: '1.5rem'
              }}>
                <i className={career.icon}></i>
              </div>
              <h4 style={{ 
                color: 'var(--dark)', 
                marginBottom: '10px',
                fontSize: '1.1rem'
              }}>
                {career.title}
              </h4>
              <p style={{ 
                color: 'var(--gray)', 
                fontSize: '0.9rem',
                lineHeight: '1.5',
                margin: 0
              }}>
                {career.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Prestasi & Pencapaian (Full Width) */}
      <div className="content-section">
        <h3 style={{ 
          color: 'var(--primary)', 
          marginBottom: '30px',
          textAlign: 'center'
        }}>
          <i className="fas fa-trophy" style={{ marginRight: '10px' }}></i>
          Prestasi & Pencapaian
        </h3>
        
        <div style={{
          display: 'flex',
          overflowX: 'auto',
          gap: '20px',
          padding: '10px 0',
          scrollbarWidth: 'thin',
          msOverflowStyle: 'none'
        }} className="achievement-scroll">
          {achievements.map((achievement, index) => (
            <div key={index} style={{
              minWidth: '280px',
              backgroundColor: 'white',
              padding: '25px',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              borderLeft: '4px solid var(--accent)',
              display: 'flex',
              flexDirection: 'column',
              height: '180px'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '15px'
              }}>
                <div style={{
                  backgroundColor: 'var(--accent)',
                  color: 'var(--dark)',
                  padding: '6px 12px',
                  borderRadius: '4px',
                  fontWeight: 'bold',
                  marginRight: '15px',
                  fontSize: '0.9rem'
                }}>
                  {achievement.year}
                </div>
                <h4 style={{ 
                  color: 'var(--dark)', 
                  margin: 0,
                  fontSize: '1.1rem'
                }}>
                  {achievement.title}
                </h4>
              </div>
              <p style={{ 
                color: 'var(--gray)', 
                margin: 0,
                fontSize: '0.9rem',
                lineHeight: '1.5',
                flex: 1
              }}>
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Kontak & Lokasi (Bersampingan di desktop) */}
      <div className="content-section">
        <div className="grid-section">
          {/* Kontak */}
          <div>
            <h3 style={{ 
              color: 'var(--primary)', 
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center'
            }}>
              <i className="fas fa-envelope" style={{ marginRight: '10px' }}></i>
              Kontak Program Studi
            </h3>
            <div style={{ 
              backgroundColor: 'rgba(46, 139, 87, 0.05)', 
              padding: '25px',
              borderRadius: '8px',
              height: '100%'
            }}>
              <div style={{ marginBottom: '15px' }}>
                <strong>Program Studi Ilmu Komputer</strong><br/>
                Fakultas Matematika dan Ilmu Pengetahuan Alam<br/>
                Universitas Negeri Medan
              </div>
              
              <div style={{ display: 'grid', gap: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <i className="fas fa-phone" style={{ 
                    color: 'var(--primary)', 
                    marginRight: '10px',
                    width: '20px'
                  }}></i>
                  <span>+62 821 7307 4884 (Humas UNIMED)</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <i className="fas fa-envelope" style={{ 
                    color: 'var(--primary)', 
                    marginRight: '10px',
                    width: '20px'
                  }}></i>
                  <span>Lorem, ipsum.</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <i className="fas fa-globe" style={{ 
                    color: 'var(--primary)', 
                    marginRight: '10px',
                    width: '20px'
                  }}></i>
                  <span>Lorem, ipsum dolor.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Lokasi dengan Google Maps Embed */}
          <div>
            <h3 style={{ 
              color: 'var(--primary)', 
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center'
            }}>
              <i className="fas fa-map-marker-alt" style={{ marginRight: '10px' }}></i>
              Lokasi Kampus
            </h3>
            <div style={{
              backgroundColor: '#f5f5f5',
              padding: '0',
              borderRadius: '8px',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden'
            }}>
              <div style={{
                flex: 1,
                minHeight: '300px'
              }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d18645.301905230495!2d98.71030593647056!3d3.6037090599036246!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x303131714c40fccd%3A0x17660a6371985d8c!2sState%20University%20of%20Medan!5e0!3m2!1sid!2sid!4v1763966843366!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: '8px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi Universitas Negeri Medan"
                ></iframe>
              </div>
              <div style={{ padding: '15px' }}>
                <p style={{ margin: 0, lineHeight: '1.6', fontSize: '0.9rem' }}>
                  <strong>Kampus UNIMED</strong><br/>
                  Jl. Willem Iskandar Pasar V, Medan Estate<br/>
                  Kec. Percut Sei Tuan, Kab. Deli Serdang<br/>
                  Sumatera Utara 20371
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilProdi;