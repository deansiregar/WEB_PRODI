import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dosen = () => {
  const [lecturers, setLecturers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDosen = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/dosen');
            setLecturers(res.data);
            setLoading(false);
        } catch (err) {
            console.error("Gagal ambil data dosen", err);
            setLoading(false);
        }
    };
    fetchDosen();
  }, []);

  const getImageUrl = (imgName) => {
      if (!imgName) return 'https://via.placeholder.com/150?text=No+Img';
      return imgName.startsWith('http') ? imgName : `http://localhost:5000/uploads/${imgName}`;
  };

  if (loading) return <div className="main-content" style={{textAlign: 'center', padding: '50px'}}>Loading Data Dosen...</div>;

  return (
    <div className="main-content">
      <div className="header">
        <h1>Data Dosen & Staf Pengajar</h1>
      </div>

      <div className="content-section" style={{ backgroundColor: 'transparent', boxShadow: 'none', padding: 0 }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
          gap: '24px' 
        }}>
          {lecturers.map((dosen) => (
            <div key={dosen._id} style={{
              backgroundColor: 'white',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              border: '1px solid #eee',
              display: 'flex',
              flexDirection: 'column',
              height: '100%'
            }}>
              
              {/* Header Warna */}
              <div style={{ height: '80px', background: 'linear-gradient(to right, var(--primary), var(--secondary))', flexShrink: 0 }}></div>
              
              {/* Foto & Nama */}
              <div style={{ textAlign: 'center', padding: '0 20px', marginTop: '-40px', flexShrink: 0 }}>
                <img 
                  src={getImageUrl(dosen.image)} 
                  alt={dosen.name}
                  style={{ 
                    width: '80px', height: '80px', borderRadius: '50%', border: '4px solid white', 
                    objectFit: 'cover', backgroundColor: '#f0f0f0', boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
                  }} 
                />
                <h3 style={{ fontSize: '1.1rem', margin: '10px 0 5px', color: 'var(--dark)' }}>{dosen.name}</h3>
                <span style={{ 
                  display: 'inline-block', backgroundColor: '#e8f5e9', color: 'var(--primary)',
                  padding: '4px 12px', borderRadius: '15px', fontSize: '0.8rem', fontWeight: '600', marginBottom: '15px'
                }}>
                  {dosen.position}
                </span>
              </div>

              {/* Detail Info */}
              <div style={{ padding: '0 20px 20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                
                <div style={{ marginBottom: '20px', flex: 1 }}>
                   <div style={{ marginBottom: '10px' }}>
                      <p style={{ fontSize: '0.85rem', color: '#666', marginBottom: '4px' }}><strong>Bidang Keahlian:</strong></p>
                      <p style={{ fontSize: '0.9rem', color: '#333' }}>{dosen.expertise}</p>
                   </div>

                   <div style={{ marginBottom: '10px' }}>
                      <p style={{ fontSize: '0.85rem', color: '#666', marginBottom: '4px' }}><strong>Pendidikan:</strong></p>
                      <ul style={{ paddingLeft: '20px', margin: 0, fontSize: '0.9rem', color: '#555' }}>
                        {dosen.education && dosen.education.map((edu, idx) => (
                          <li key={idx}>{edu}</li>
                        ))}
                      </ul>
                   </div>
                   
                   <div style={{ fontSize: '0.85rem', color: '#888', fontStyle: 'italic', marginTop: '10px' }}>
                      <i className="fas fa-birthday-cake" style={{ marginRight: '6px' }}></i>
                      {dosen.ttl}
                   </div>
                </div>

                {/* Tombol Link */}
                <div style={{ display: 'flex', gap: '10px', marginTop: 'auto' }}>
                  {dosen.sintaLink && (
                      <a href={dosen.sintaLink} target="_blank" rel="noopener noreferrer"
                        style={{ flex: 1, textAlign: 'center', padding: '8px', borderRadius: '6px', backgroundColor: '#FFD700', color: '#333', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 'bold' }}>
                        SINTA
                      </a>
                  )}
                  {dosen.pubLink && (
                      <a href={dosen.pubLink} target="_blank" rel="noopener noreferrer"
                        style={{ flex: 1, textAlign: 'center', padding: '8px', borderRadius: '6px', backgroundColor: 'var(--primary)', color: 'white', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 'bold' }}>
                        Publikasi
                      </a>
                  )}
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