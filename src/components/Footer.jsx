import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo-section">
          <div className="footer-logo">
            <img src="logo.png" alt="logo unimed" />
          </div>
          <div className="footer-logo-text">
            <h2>Ilmu Komputer</h2>
            <p>UNIVERSITAS NEGERI MEDAN</p>
            <div className="footer-social">
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
        </div>
        <div className="footer-contact-info">
          <div className="footer-title">
            <i className="fas fa-map-marker-alt"></i>
            <span>PROGRAM STUDI ILMU KOMPUTER</span>
          </div>
          <div className="footer-subtitle">FAKULTAS MATEMATIKA DAN ILMU PENGETAHUAN ALAM</div>
          <div className="footer-subtitle">UNIVERSITAS NEGERI MEDAN</div>
          <div className="footer-contact">
            <i className="fas fa-phone"></i>
            <span>Contact: +6282173074884 (Humas Unimed)</span>
          </div>
        </div>
        <div className="footer-location">
          <div className="footer-title">
            <i className="fas fa-university"></i>
            <span>LOKASI KAMPUS</span>
          </div>
          <div className="footer-address">
            KAB. DELI SERDANG, SUMATERA UTARA 20371<br />
            JL WILLEM ISKANDAR PSR V, MEDAN ESTATE, PERCUT SEI TUAN Indonesia
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2023 Program Studi Ilmu Komputer - Universitas Negeri Medan. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;