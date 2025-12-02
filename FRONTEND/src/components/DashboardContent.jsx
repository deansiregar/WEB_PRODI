import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const DashboardContent = () => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const res = await axios.get('https://apiwebprodi.vercel.app/api/berita');
        const sortedData = res.data.slice(0, 3);
        setAnnouncements(sortedData);
      } catch (err) {
        console.error("Gagal ambil pengumuman dashboard", err);
      }
    };
    fetchAnnouncements();
  }, []);

  // Data dummy untuk grafik statistik mahasiswa per angkatan
  const studentStats = [
    { year: '2025', count: 150, color: '#2E8B57' },
    { year: '2024', count: 145, color: '#3CB371' },
    { year: '2023', count: 140, color: '#228B22' },
    { year: '2022', count: 135, color: '#32CD32' },
    { year: '2021', count: 130, color: '#90EE90' },
    { year: '2020', count: 125, color: '#98FB98' }
  ];

  // KONTROL TINGGI BAR: Atur tinggi maksimal bar (dalam persen)
  const MAX_BAR_HEIGHT_PERCENTAGE = 90; // Bar tertinggi akan mencapai 90% dari container
  const BAR_HEIGHT_SCALING_FACTOR = 0.8; // Faktor scaling untuk membuat perbedaan lebih terlihat

  // Hitung max count untuk scaling grafik
  const maxCount = Math.max(...studentStats.map(item => item.count));
  
  // Fungsi untuk menghitung tinggi bar dengan kontrol lebih baik
  const calculateBarHeight = (count) => {
    // 1. Hitung persentase dasar
    const basePercentage = (count / maxCount) * 100;
    
    // 2. Terapkan faktor scaling untuk memperbesar perbedaan
    const scaledPercentage = basePercentage * BAR_HEIGHT_SCALING_FACTOR;
    
    // 3. Terapkan batas maksimal
    const finalPercentage = Math.min(scaledPercentage, MAX_BAR_HEIGHT_PERCENTAGE);
    
    return finalPercentage;
  };

  // Fungsi klik Link
  const handleLinkClick = (link) => {
    if (link) {
      window.open(link, '_blank');
    }
  };

  return (
    <div className="dashboard-content">
      {/* Left Column - Charts */}
      <div className="chart-container">
        <div className="section-title">
          <h2>Statistik Mahasiswa per Angkatan</h2>
        </div>
        
        {/* Bar Chart Dummy */}
        <div className="bar-chart-container">

          
          <div className="bar-chart-main">
            <div className="bar-chart-bars">
              {studentStats.map((item) => {
                const barHeight = calculateBarHeight(item.count);
                return (
                  <div key={item.year} className="bar-chart-item">
                    <div className="bar-tooltip">
                      Angkatan {item.year}: <strong>{item.count}</strong> mahasiswa
                    </div>
                    <div 
                      className="bar-chart-bar" 
                      style={{
                        height: `${barHeight}%`,
                        backgroundColor: item.color,
                        '--bar-color': item.color
                      }}
                    >
                      <div className="bar-value">{item.count}</div>
                    </div>
                    <div className="bar-label">{item.year}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        
      
      </div>

      {/* Right Column - Announcements */}
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
                  {new Date(announcement.date).toLocaleDateString('id-ID', { 
                    day: 'numeric', 
                    month: 'long', 
                    year: 'numeric' 
                  })}
                </div>
                <div className="announcement-content">
                  {announcement.content.substring(0, 80)}...
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: '500' }}>
                    {announcement.category}
                  </span>
                  
                  {announcement.link && (
                    <button 
                      onClick={() => handleLinkClick(announcement.link)}
                      style={{
                        background: 'none', 
                        border: 'none', 
                        color: '#007bff', 
                        cursor: 'pointer', 
                        fontSize: '0.8rem', 
                        fontWeight: 'bold'
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