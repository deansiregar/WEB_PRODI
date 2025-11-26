import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [showLinksDropdown, setShowLinksDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const hamburgerRef = useRef(null);
  const location = useLocation();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowLinksDropdown(false);
      }
      
      if (isMobileMenuOpen && 
          mobileMenuRef.current && 
          !mobileMenuRef.current.contains(event.target) && 
          hamburgerRef.current && 
          !hamburgerRef.current.contains(event.target)) {
        closeMobileMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { id: 'dashboard', path: '/', icon: 'fas fa-home', label: 'Dashboard' },
    { id: 'profil', path: '/profil', icon: 'fas fa-info-circle', label: 'Profil Prodi' },
    { id: 'berita', path: '/berita', icon: 'fas fa-newspaper', label: 'Berita' },
    { id: 'dosen', path: '/dosen', icon: 'fas fa-chalkboard-teacher', label: 'Dosen' },
    { id: 'matakuliah', path: '/matakuliah', icon: 'fas fa-book', label: 'Mata Kuliah' },
    { id: 'jadwal', path: '/jadwal', icon: 'fas fa-calendar-alt', label: 'Jadwal' }
  ];

  const importantLinks = [
    {
      url: "https://devakad.unimed.ac.id/",
      icon: "fas fa-graduation-cap",
      title: "DEVAKAD",
      description: "Sistem Akademik Digital"
    },
    {
      url: "https://simantep.unimed.ac.id/",
      icon: "fas fa-tasks",
      title: "SIMANTEP",
      description: "Sistem Manajemen Teaching Plan"
    },
    {
      url: "https://billing.unimed.ac.id/",
      icon: "fas fa-money-bill-wave",
      title: "E-BILLING",
      description: "Pembayaran Biaya Kuliah"
    },
    {
      url: "https://learning.insantaufik.id/",
      icon: "fas fa-book",
      title: "E-LEARNING",
      description: "E-LEARNING Ilmu Komputer"
    }
  ];

  const toggleLinksDropdown = () => {
    setShowLinksDropdown(!showLinksDropdown);
  };

  const toggleMobileMenu = () => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);
    
    // Prevent body scroll when mobile menu is open
    if (newState) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setShowLinksDropdown(false);
    // Restore body scroll
    document.body.style.overflow = 'unset';
    document.documentElement.style.overflow = 'unset';
  };

  // Cleanup effect
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
    };
  }, []);

  // Check if current path is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo-container">
          <Link to="/" onClick={closeMobileMenu} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
            <div className="logo">
              <img src={`${BASE}logo.png`}alt="logo mipa unimed" />
            </div>
            <div className="logo-text">
              <h2>Ilmu Komputer</h2>
              <p>UNIVERSITAS NEGERI MEDAN</p>
            </div>
          </Link>
        </div>
        
        {/* Hamburger Menu Button */}
        <button 
          ref={hamburgerRef}
          className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          type="button"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation Menu */}
        <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`} ref={mobileMenuRef}>
          {/* Link Unimed Dropdown */}
          <li 
            ref={dropdownRef}
            className={`nav-item dropdown ${showLinksDropdown ? 'active' : ''}`}
            onMouseEnter={() => window.innerWidth > 768 && setShowLinksDropdown(true)}
            onMouseLeave={() => window.innerWidth > 768 && setShowLinksDropdown(false)}
          >
            <div 
              className="dropdown-toggle"
              onClick={toggleLinksDropdown}
              style={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
                color: 'inherit',
                cursor: 'pointer'
              }}
            >
              <i className="fas fa-external-link-alt"></i>
              <span>Link Unimed</span>
              <i className={`fas fa-chevron-down dropdown-arrow ${showLinksDropdown ? 'rotated' : ''}`}></i>
            </div>
            
            {/* Dropdown Menu - DIPERBAIKI untuk mobile */}
            {showLinksDropdown && (
              <div 
                className="dropdown-menu"
                style={{
                  display: 'block',
                  opacity: 1,
                  visibility: 'visible',
                  // Tambahan untuk memastikan tidak menutupi navbar di mobile
                  ...(window.innerWidth <= 768 && {
                    position: 'relative',
                    marginTop: '10px',
                    zIndex: '1002'
                  })
                }}
              >
                {importantLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dropdown-link"
                    onClick={(e) => {
                      e.stopPropagation();
                      closeMobileMenu();
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      textDecoration: 'none'
                    }}
                  >
                    <div className="dropdown-link-icon">
                      <i className={link.icon}></i>
                    </div>
                    <div className="dropdown-link-content">
                      <h4>{link.title}</h4>
                      <p>{link.description}</p>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </li>

          {/* Menu items lainnya dengan Link */}
          {navItems.map(item => (
            <li 
              key={item.id}
              className={`nav-item ${isActive(item.path) ? 'active' : ''}`}
            >
              <Link 
                to={item.path} 
                onClick={closeMobileMenu}
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  textDecoration: 'none', 
                  color: 'inherit',
                }}
              >
                <i className={item.icon} style={{ marginRight: '8px' }}></i>
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Backdrop Overlay */}
        {isMobileMenuOpen && (
          <div 
            className="mobile-menu-backdrop active"
            onClick={closeMobileMenu}
          ></div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;