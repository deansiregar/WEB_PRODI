import React from 'react';
import { beritaData } from '../data/beritaData';
import { Link } from 'react-router-dom';

const DashboardContent = () => {
  // Ambil 3 berita terbaru untuk dashboard
  const latestAnnouncements = beritaData
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  const legendItems = [
    { color: "#2E8B57", label: "Angkatan 2025" },
    { color: "#3CB371", label: "Angkatan 2024" },
    { color: "#228B22", label: "Angkatan 2023" },
    { color: "#32CD32", label: "Angkatan 2022" },
    { color: "#90EE90", label: "Angkatan 2021" },
    { color: "#98FB98", label: "Angkatan 2020" }
  ];

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

      {/* Right Column - Announcements */}
      <div className="info-container">
        <div className="section-title" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2>Pengumuman Terbaru</h2>
          <Link 
            to="/berita" 
            style={{ 
              fontSize: '0.9rem', 
              color: 'var(--primary)', 
              textDecoration: 'none',
              fontWeight: '500'
            }}
          >
            Lihat Semua →
          </Link>
        </div>
        <div className="announcement-list">
          {latestAnnouncements.map((announcement) => (
            <div key={announcement.id} className="announcement-item">
              <div className="announcement-title">
                <i className="fas fa-bullhorn"></i>
                {announcement.title}
              </div>
              <div className="announcement-date">{announcement.date}</div>
              <div className="announcement-content">
                {announcement.excerpt}
              </div>
              <div style={{ 
                marginTop: '8px', 
                fontSize: '0.8rem', 
                color: 'var(--primary)',
                fontWeight: '500'
              }}>
                {announcement.category}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;