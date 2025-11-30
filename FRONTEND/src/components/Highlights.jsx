import React from 'react';

const Highlights = () => {
  const highlights = [
{
      icon: "fas fa-laptop-code",
      title: "Kurikulum Terkini",
      description: "Mempelajari teknologi terbaru seperti AI, Cloud Computing, dan Mobile Development yang relevan dengan kebutuhan industri 4.0."
    },
    {
      icon: "fas fa-chalkboard-teacher",
      title: "Dosen Kompeten",
      description: "Dibimbing langsung oleh tenaga pengajar profesional dan berpengalaman yang ahli di bidang ilmu komputer dan sains data."
    },
    {
      icon: "fas fa-flask",
      title: "Riset & Inovasi",
      description: "Fasilitas laboratorium lengkap untuk mendukung penelitian mahasiswa dalam menciptakan solusi digital yang bermanfaat bagi masyarakat."
    }
  ];

  return (
    <div className="highlights-section">
      <div className="section-title">
        <h2>Keunggulan Program Studi</h2>
      </div>
      <div className="highlights-grid">
        {highlights.map((highlight, index) => (
          <div key={index} className="highlight-card">
            <div className="highlight-icon">
              <i className={highlight.icon}></i>
            </div>
            <h3>{highlight.title}</h3>
            <p>{highlight.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Highlights;