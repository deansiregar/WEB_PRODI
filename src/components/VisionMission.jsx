import React from 'react';

const VisionMission = () => {
  const missions = [
    "Menyelenggarakan pendidikan dan pembelajaran ilmu komputer berfokus pada bidang artificial intelegensi dan sains komputasi yang bermutu dan bernuansa link and match dengan kebutuhan stakeholder.",
    "Menyelenggarakan penelitian di bidang ilmu komputer berfokus pada bidang artificial intelegensi dan sains komputasi yang inovatif dan aplikatif serta mengembangkan rekayasa industri dan teknologi yang kreatif.",
    "Menyelenggarakan pengabdian kepada masyarakat melalui pemetaan kebutuhan dan permasalahan teknologi komputer di masyarakat.",
    "Mengembangkan budaya ilmiah dan budaya etnik, kewirausahaan, membina suasana akademik yang sehat.",
    "Menjalin kerjasama secara berkelanjutan dengan berbagai instansi di tingkat lokal, nasional, regional, dan internasional."
  ];

  return (
    <div className="vision-mission-container">
      <div className="section-title">
        <h2>Visi & Misi Program Studi</h2>
      </div>
      <div className="vision-mission-content">
        <div className="vision">
          <h3><i className="fas fa-eye"></i> Visi</h3>
          <p>Menjadi program studi yang unggul pada bidang artificial intelegensi dan sains komputasi secara Nasional dan mendapat pengakuan Internasional.</p>
        </div>
        <div className="mission">
          <h3><i className="fas fa-bullseye"></i> Misi</h3>
          <ul>
            {missions.map((mission, index) => (
              <li key={index}>{mission}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;