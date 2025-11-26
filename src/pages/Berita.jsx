import React, { useState } from 'react';
import { beritaData } from '../data/beritaData';

const Berita = () => {
  const BASE = import.meta.env.BASE_URL;
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [searchTerm, setSearchTerm] = useState('');

  // Kategori unik dari data berita
  const categories = ['Semua', ...new Set(beritaData.map(berita => berita.category))];

  // Filter berita berdasarkan kategori dan pencarian
  const filteredBerita = beritaData.filter(berita => {
    const matchesCategory = selectedCategory === 'Semua' || berita.category === selectedCategory;
    const matchesSearch = berita.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         berita.content.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Berita featured (untuk highlight)
  const featuredBerita = beritaData.filter(berita => berita.featured);

  return (
    <div className="main-content">
      <div className="header">
        <h1>Berita & Pengumuman</h1>
        <p style={{ color: 'var(--gray)', marginTop: '10px' }}>
          Informasi terbaru seputar Program Studi Ilmu Komputer UNIMED
        </p>
      </div>

      {/* Featured Berita */}
      {featuredBerita.length > 0 && (
        <div className="content-section" style={{ padding: '0', overflow: 'hidden' }}>
          <div style={{
            backgroundColor: 'var(--primary)',
            color: 'white',
            padding: '20px',
            textAlign: 'center'
          }}>
            <h2 style={{ margin: 0, fontSize: '1.5rem' }}>
              <i className="fas fa-star" style={{ marginRight: '10px' }}></i>
              Berita Utama
            </h2>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '0'
          }}>
            {featuredBerita.map(berita => (
              <div key={berita.id} style={{
                padding: '25px',
                borderRight: '1px solid #eee',
                borderBottom: '1px solid #eee',
                transition: 'all 0.3s ease'
              }} className="featured-news-item">
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '15px'
                }}>
                  <span style={{
                    backgroundColor: 'var(--accent)',
                    color: 'var(--dark)',
                    padding: '4px 12px',
                    borderRadius: '15px',
                    fontSize: '0.8rem',
                    fontWeight: 'bold'
                  }}>
                    {berita.category}
                  </span>
                  <span style={{
                    marginLeft: '10px',
                    color: 'var(--gray)',
                    fontSize: '0.9rem'
                  }}>
                    {berita.date}
                  </span>
                </div>
                <h3 style={{
                  color: 'var(--dark)',
                  marginBottom: '10px',
                  fontSize: '1.3rem',
                  lineHeight: '1.4'
                }}>
                  {berita.title}
                </h3>
                <p style={{
                  color: 'var(--gray)',
                  lineHeight: '1.6',
                  marginBottom: '15px'
                }}>
                  {berita.excerpt}
                </p>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <span style={{
                    color: 'var(--primary)',
                    fontSize: '0.9rem',
                    fontWeight: '500'
                  }}>
                    {berita.author}
                  </span>
                  <button style={{
                    padding: '8px 16px',
                    backgroundColor: 'transparent',
                    color: 'var(--primary)',
                    border: '1px solid var(--primary)',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    transition: 'all 0.3s ease'
                  }}>
                    Baca Selengkapnya
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Filter dan Pencarian */}
      <div className="content-section">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          gap: '20px',
          alignItems: 'end',
          marginBottom: '30px'
        }}>
          <div>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: '600',
              color: 'var(--dark)'
            }}>
              Cari Berita
            </label>
            <input
              type="text"
              placeholder="Ketik judul atau isi berita..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '1px solid #ddd',
                borderRadius: '6px',
                fontSize: '1rem',
                transition: 'border-color 0.3s'
              }}
            />
          </div>
          <div>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: '600',
              color: 'var(--dark)'
            }}>
              Filter Kategori
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              style={{
                padding: '12px 16px',
                border: '1px solid #ddd',
                borderRadius: '6px',
                fontSize: '1rem',
                minWidth: '150px',
                cursor: 'pointer'
              }}
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Daftar Berita */}
        <div style={{
          display: 'grid',
          gap: '20px'
        }}>
          {filteredBerita.map(berita => (
            <div key={berita.id} style={{
              backgroundColor: 'white',
              borderRadius: '8px',
              padding: '25px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              borderLeft: '4px solid var(--primary)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer'
            }} className="news-item">
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '15px'
              }}>
                <div>
                  <span style={{
                    backgroundColor: 'var(--primary)',
                    color: 'white',
                    padding: '4px 12px',
                    borderRadius: '15px',
                    fontSize: '0.8rem',
                    fontWeight: 'bold',
                    marginRight: '10px'
                  }}>
                    {berita.category}
                  </span>
                  <span style={{
                    color: 'var(--gray)',
                    fontSize: '0.9rem'
                  }}>
                    <i className="far fa-calendar" style={{ marginRight: '5px' }}></i>
                    {berita.date}
                  </span>
                </div>
                {berita.featured && (
                  <span style={{
                    backgroundColor: 'var(--accent)',
                    color: 'var(--dark)',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '0.7rem',
                    fontWeight: 'bold'
                  }}>
                    <i className="fas fa-star" style={{ marginRight: '4px' }}></i>
                    Featured
                  </span>
                )}
              </div>

              <h3 style={{
                color: 'var(--dark)',
                marginBottom: '12px',
                fontSize: '1.4rem',
                lineHeight: '1.3'
              }}>
                {berita.title}
              </h3>

              <p style={{
                color: 'var(--gray)',
                lineHeight: '1.6',
                marginBottom: '15px',
                fontSize: '1rem'
              }}>
                {berita.content}
              </p>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: '15px',
                borderTop: '1px solid #eee'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  color: 'var(--primary)',
                  fontSize: '0.9rem'
                }}>
                  <i className="fas fa-user" style={{ marginRight: '8px' }}></i>
                  {berita.author}
                </div>
                <button style={{
                  padding: '8px 20px',
                  backgroundColor: 'var(--primary)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  transition: 'background-color 0.3s ease'
                }}>
                  Baca Selengkapnya
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredBerita.length === 0 && (
          <div style={{
            textAlign: 'center',
            padding: '40px',
            color: 'var(--gray)'
          }}>
            <i className="fas fa-search" style={{ fontSize: '3rem', marginBottom: '16px' }}></i>
            <p>Tidak ada berita yang sesuai dengan filter pencarian.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Berita;