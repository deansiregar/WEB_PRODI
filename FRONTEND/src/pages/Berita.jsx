import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Berita = () => {
  const [beritaList, setBeritaList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [searchTerm, setSearchTerm] = useState('');

  // 1. AMBIL DATA DARI SERVER (BACKEND)
  useEffect(() => {
    const fetchBerita = async () => {
      try {
        const response = await axios.get('https://apiwebprodi.vercel.app/api/berita');
        setBeritaList(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Gagal mengambil berita:", error);
        setLoading(false);
      }
    };

    fetchBerita();
  }, []);

  // Helper untuk URL Gambar
  const getImageUrl = (imgName) => {
    if (!imgName) return 'https://via.placeholder.com/400x250?text=No+Image'; // Gambar default
    // Jika gambar adalah link eksternal (https://...) biarkan, jika nama file lokal, tambahkan URL backend
    return imgName.startsWith('http') ? imgName : `https://apiwebprodi.vercel.app/uploads/${imgName}`;
  };

  // Kategori unik dari data berita yang ada
  const categories = ['Semua', ...new Set(beritaList.map(berita => berita.category))];

  // Filter berita
  const filteredBerita = beritaList.filter(berita => {
    const matchesCategory = selectedCategory === 'Semua' || berita.category === selectedCategory;
    const matchesSearch = berita.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         berita.content.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredBerita = beritaList.filter(berita => berita.featured);

  if (loading) {
    return <div className="main-content" style={{textAlign: 'center', padding: '50px'}}>Loading Berita...</div>;
  }

  return (
    <div className="main-content">
      <div className="header">
        <h1>Berita & Pengumuman</h1>
        <p style={{ color: 'var(--gray)', marginTop: '10px' }}>
          Informasi terbaru seputar Program Studi Ilmu Komputer UNIMED
        </p>
      </div>

      {/* Featured Berita Section */}
      {featuredBerita.length > 0 && (
        <div className="content-section" style={{ padding: '0', overflow: 'hidden' }}>
          <div style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '20px', textAlign: 'center' }}>
            <h2 style={{ margin: 0, fontSize: '1.5rem' }}>
              <i className="fas fa-star" style={{ marginRight: '10px' }}></i>
              Berita Utama
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '0' }}>
            {featuredBerita.map(berita => (
              <div key={berita._id} style={{ padding: '25px', borderRight: '1px solid #eee', borderBottom: '1px solid #eee' }} className="featured-news-item">
                <img 
                  src={getImageUrl(berita.image)} 
                  alt={berita.title} 
                  style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px', marginBottom: '15px' }} 
                />
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                  <span style={{ backgroundColor: '#FFD700', color: '#333', padding: '4px 12px', borderRadius: '15px', fontSize: '0.8rem', fontWeight: 'bold' }}>
                    {berita.category}
                  </span>
                  <span style={{ marginLeft: '10px', color: '#666', fontSize: '0.9rem' }}>
                    {new Date(berita.date).toLocaleDateString()}
                  </span>
                </div>
                <h3 style={{ color: '#333', marginBottom: '10px', fontSize: '1.3rem' }}>{berita.title}</h3>
                <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '15px' }}>
                  {berita.content.substring(0, 100)}...
                </p>
                
                {/* LOGIKA TOMBOL LINK UNTUK FEATURED */}
                {berita.link ? (
                  <a 
                    href={berita.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ 
                      display: 'inline-block',
                      color: 'var(--primary)', 
                      background: 'none', 
                      border: '1px solid var(--primary)', 
                      padding: '8px 16px', 
                      borderRadius: '4px', 
                      cursor: 'pointer',
                      textDecoration: 'none',
                      fontWeight: '500'
                    }}
                  >
                    Baca Selengkapnya <i className="fas fa-external-link-alt" style={{ marginLeft: '5px' }}></i>
                  </a>
                ) : (
                  <button disabled style={{ color: '#999', background: '#f5f5f5', border: '1px solid #ddd', padding: '8px 16px', borderRadius: '4px', cursor: 'not-allowed' }}>
                    Info Lengkap
                  </button>
                )}
                
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Filter & List Berita Section */}
      <div className="content-section">
        <div style={{ display: 'flex', gap: '15px', marginBottom: '30px', flexWrap: 'wrap' }}>
          <input
            type="text"
            placeholder="Cari Berita..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ flex: 1, padding: '10px', borderRadius: '6px', border: '1px solid #ddd', minWidth: '200px' }}
          />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            style={{ padding: '10px', borderRadius: '6px', border: '1px solid #ddd', minWidth: '150px' }}
          >
            {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
          </select>
        </div>

        <div style={{ display: 'grid', gap: '20px' }}>
          {filteredBerita.map(berita => (
            <div key={berita._id} style={{ display: 'flex', gap: '20px', backgroundColor: 'white', borderRadius: '8px', padding: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', borderLeft: '4px solid var(--primary)' }} className="news-item">
              
              {/* Gambar Thumbnail */}
              <div style={{ flexShrink: 0 }}>
                 <img 
                    src={getImageUrl(berita.image)} 
                    alt={berita.title}
                    style={{ width: '150px', height: '100px', objectFit: 'cover', borderRadius: '6px' }}
                 />
              </div>

              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <div>
                    <span style={{ backgroundColor: '#e8f5e9', color: 'var(--primary)', padding: '4px 10px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 'bold', marginRight: '10px' }}>
                      {berita.category}
                    </span>
                    <span style={{ color: '#888', fontSize: '0.85rem' }}>
                      <i className="far fa-calendar" style={{ marginRight: '5px' }}></i>
                      {new Date(berita.date).toLocaleDateString()}
                    </span>
                  </div>
                </div>

                <h3 style={{ color: '#2c3e50', marginBottom: '8px', fontSize: '1.2rem' }}>{berita.title}</h3>
                <p style={{ color: '#666', fontSize: '0.95rem', marginBottom: '15px' }}>
                  {berita.content.substring(0, 150)}...
                </p>
                
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '10px', borderTop: '1px solid #f0f0f0'}}>
                    <div style={{display: 'flex', alignItems: 'center', fontSize: '0.85rem', color: '#888'}}>
                        <i className="fas fa-user" style={{ marginRight: '5px' }}></i> {berita.author || 'Admin'}
                    </div>

                    {/* LOGIKA TOMBOL LINK UNTUK LIST ITEM */}
                    {berita.link ? (
                      <a 
                        href={berita.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: 'bold', fontSize: '0.9rem', display: 'flex', alignItems: 'center' }}
                      >
                        Baca Selengkapnya <i className="fas fa-arrow-right" style={{ marginLeft: '5px' }}></i>
                      </a>
                    ) : (
                      <span style={{ color: '#aaa', fontSize: '0.9rem', cursor: 'default' }}>
                        Info Lengkap
                      </span>
                    )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredBerita.length === 0 && (
          <div style={{ textAlign: 'center', padding: '40px', color: '#888' }}>
            <p>Tidak ada berita ditemukan.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Berita;