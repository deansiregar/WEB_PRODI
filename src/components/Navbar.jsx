import React, { useState, useRef, useEffect } from 'react';

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('dashboard');
  const [showLinksDropdown, setShowLinksDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowLinksDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navItems = [
    { id: 'dashboard', icon: 'fas fa-home', label: 'Dashboard' },
    { id: 'mahasiswa', icon: 'fas fa-user-graduate', label: 'Mahasiswa' },
    { id: 'dosen', icon: 'fas fa-chalkboard-teacher', label: 'Dosen' },
    { id: 'matakuliah', icon: 'fas fa-book', label: 'Mata Kuliah' },
    { id: 'jadwal', icon: 'fas fa-calendar-alt', label: 'Jadwal' }
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

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo-container">
          <div className="logo">
            <img src="/logo.png" alt="logo mipa unimed" />
          </div>
          <div className="logo-text">
            <h2>Ilmu Komputer</h2>
            <p>UNIVERSITAS NEGERI MEDAN</p>
          </div>
        </div>
        
        <ul className="nav-menu">
          {/* Link Unimed Dropdown - Dipindahkan ke posisi pertama */}
          <li 
            ref={dropdownRef}
            className={`nav-item dropdown ${showLinksDropdown ? 'active' : ''}`}
            onMouseEnter={() => setShowLinksDropdown(true)}
            onMouseLeave={() => setShowLinksDropdown(false)}
            onClick={toggleLinksDropdown}
          >
            <i className="fas fa-external-link-alt"></i>
            <span>Link Unimed</span>
            <i className={`fas fa-chevron-down dropdown-arrow ${showLinksDropdown ? 'rotated' : ''}`}></i>
            
            {/* Dropdown Menu */}
            {showLinksDropdown && (
              <div className="dropdown-menu">
                {importantLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dropdown-link"
                    onClick={(e) => e.stopPropagation()}
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

          {/* Menu items lainnya */}
          {navItems.map(item => (
            <li 
              key={item.id}
              className={`nav-item ${activeNav === item.id ? 'active' : ''}`}
              onClick={() => {
                setActiveNav(item.id);
                setShowLinksDropdown(false);
              }}
            >
              <i className={item.icon}></i>
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;