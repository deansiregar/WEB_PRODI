import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import axios

const DashboardContent = () => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/berita');
        // Ambil 3 berita terbaru saja
        const sortedData = res.data.slice(0, 3);
        setAnnouncements(sortedData);
      } catch (err) {
        console.error("Gagal ambil pengumuman dashboard", err);
      }
    };
    fetchAnnouncements();
  }, []);

  const legendItems = [
    { color: "#2E8B57", label: "Angkatan 2025" },
    { color: "#3CB371", label: "Angkatan 2024" },
    { color: "#228B22", label: "Angkatan 2023" },
    { color: "#32CD32", label: "Angkatan 2022" },
    { color: "#90EE90", label: "Angkatan 2021" },
    { color: "#98FB98", label: "Angkatan 2020" }
  ];

  // Fungsi klik Link
  const handleLinkClick = (link) => {
    if (link) {
      window.open(link, '_blank'); // Buka di tab baru
    } else {
      // Jika tidak ada link, arahkan ke halaman detail berita (opsional) atau alert
      // window.location.href = '/berita'; 
    }
  };

  return (
    <div className="dashboard-content">
      {/* Left Column - Charts */}
      <div className="chart-container">
        <div className="section-title">
          <h2>Statistik Mahasiswa per Angkatan</h2>
          <span style={{ color: 'var(--gray)', fontSize: '0.9rem' }}>Tahun 2025</span>
        </div>
        <div className="chart-placeholder">
          <i className="fas fa-chart-bar" style={{ marginRight: '10px' }}></i>
          Grafik Statistik Mahasiswa per Angkatan
        </div>
        <div className="chart-legend">
          {legendItems.map((item, index) => (
            <div key={index} className="legend-item">
              <div className="legend-color" style={{ backgroundColor: item.color }}></div>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column - Announcements (DARI API) */}
      <div className="info-container">
        <div className="section-title" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2>Pengumuman Terbaru</h2>
          <Link 
            to="/berita" 
            style={{ fontSize: '0.9rem', color: 'var(--primary)', textDecoration: 'none', fontWeight: '500' }}
          >
            Lihat Semua →
          </Link>
        </div>
        
        <div className="announcement-list">
          {announcements.length === 0 ? (
            <p style={{color: '#888', fontStyle: 'italic'}}>Belum ada pengumuman.</p>
          ) : (
            announcements.map((announcement) => (
              <div key={announcement._id} className="announcement-item">
                <div className="announcement-title">
                  <i className="fas fa-bullhorn"></i>
                  {announcement.title}
                </div>
                <div className="announcement-date">
                    {new Date(announcement.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                </div>
                <div className="announcement-content">
                  {announcement.content.substring(0, 80)}...
                </div>
                
                {/* Tombol Link / Kategori */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px' }}>
                    <span style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: '500' }}>
                        {announcement.category}
                    </span>
                    
                    {/* Jika ada link, munculkan tombol kecil */}
                    {announcement.link && (
                        <button 
                            onClick={() => handleLinkClick(announcement.link)}
                            style={{
                                background: 'none', border: 'none', color: '#007bff', 
                                cursor: 'pointer', fontSize: '0.8rem', fontWeight: 'bold'
                            }}
                        >
                            Buka Tautan <i className="fas fa-external-link-alt"></i>
                        </button>
                    )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;