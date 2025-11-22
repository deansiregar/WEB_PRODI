import React from 'react';

const DashboardContent = () => {
  const announcements = [
    {
      title: "G31DK",
      date: "31 Oktober 2025",
      content: "Ketidakpuasan terhadap dosen dengan inisial DK"
    },
    {
      title: "Ingin menjadi Programmer handal namun enggan ngoding",
      date: "10 Februari 2025",
      content: "gak mau ngoding"
    },
    {
      title: "anime is life",
      date: "5 oktober 2024",
      content: "mari kita jadikan anime sebagai gaya hidup kita"
    }
  ];

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
        <div className="section-title">
          <h2>Pengumuman Terbaru</h2>
        </div>
        <div className="announcement-list">
          {announcements.map((announcement, index) => (
            <div key={index} className="announcement-item">
              <div className="announcement-title">
                <i className="fas fa-bullhorn"></i>
                {announcement.title}
              </div>
              <div className="announcement-date">{announcement.date}</div>
              <div className="announcement-content">
                {announcement.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;