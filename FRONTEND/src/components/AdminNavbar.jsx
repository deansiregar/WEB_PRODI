import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const AdminNavbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    if (window.confirm('Yakin ingin keluar?')) {
      localStorage.removeItem('token');
      navigate('/login');
    }
  };

  const navItems = [
    { path: '/admin/dashboard', label: 'Dashboard', icon: 'fas fa-tachometer-alt' },
    { path: '/admin/berita', label: 'Berita', icon: 'fas fa-newspaper' },
    { path: '/admin/dosen', label: 'Dosen', icon: 'fas fa-chalkboard-teacher' },
    { path: '/admin/matakuliah', label: 'Mata Kuliah', icon: 'fas fa-book' },
    { path: '/admin/jadwal', label: 'Jadwal', icon: 'fas fa-calendar-alt' },
  ];

  return (
    <div className="admin-navbar" style={{
      background: '#2c3e50', 
      padding: '15px 20px', 
      borderRadius: '8px', 
      marginBottom: '25px', 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      color: 'white', 
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      flexWrap: 'wrap',
      gap: '10px'
    }}>
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
        <h3 style={{ margin: 0, marginRight: '10px', color: '#FFD700', fontSize: '1.2rem' }}>
          <i className="fas fa-user-shield"></i> Admin Panel
        </h3>
        
        {/* Menu Items */}
        <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
          {navItems.map((item) => (
            <Link 
              key={item.path} 
              to={item.path} 
              style={{ 
                color: location.pathname === item.path ? '#FFD700' : '#ecf0f1', 
                textDecoration: 'none', 
                fontWeight: location.pathname === item.path ? 'bold' : '500',
                display: 'flex', 
                alignItems: 'center', 
                gap: '8px', 
                fontSize: '0.9rem',
                padding: '5px 10px',
                borderRadius: '4px',
                backgroundColor: location.pathname === item.path ? 'rgba(255,255,255,0.1)' : 'transparent',
                transition: 'all 0.3s'
              }}
            >
              <i className={item.icon}></i> {item.label}
            </Link>
          ))}
        </div>
      </div>

      <button 
        onClick={handleLogout} 
        style={{ 
          background: '#e74c3c', 
          color: 'white', 
          border: 'none', 
          padding: '8px 16px', 
          borderRadius: '4px', 
          cursor: 'pointer', 
          fontWeight: 'bold',
          fontSize: '0.9rem',
          display: 'flex',
          alignItems: 'center',
          gap: '5px'
        }}
      >
        <i className="fas fa-sign-out-alt"></i> Logout
      </button>
    </div>
  );
};

export default AdminNavbar;