import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AdminNavbar from '../../components/AdminNavbar';

const DashboardAdmin = () => {
    const [stats, setStats] = useState({
        berita: 0,
        dosen: 0,
        matakuliah: 0,
        jadwal: 0
    });

    useEffect(() => {
        const fetchStats = async () => {
            try {
                // Ambil semua data sekaligus
                const [resBerita, resDosen, resMatkul, resJadwal] = await Promise.all([
                    axios.get('https://apiwebprodi.vercel.app/api/berita'),
                    axios.get('https://apiwebprodi.vercel.app/api/dosen'),
                    axios.get('https://apiwebprodi.vercel.app/api/matakuliah'),
                    axios.get('https://apiwebprodi.vercel.app/api/jadwal')
                ]);

                setStats({
                    berita: resBerita.data.length,
                    dosen: resDosen.data.length,
                    matakuliah: resMatkul.data.length,
                    jadwal: resJadwal.data.length
                });
            } catch (error) {
                console.error("Gagal mengambil data statistik", error);
            }
        };

        fetchStats();
    }, []);

    const cards = [
        { title: 'Total Berita', count: stats.berita, icon: 'fas fa-newspaper', color: '#3498db', link: '/admin/berita' },
        { title: 'Total Dosen', count: stats.dosen, icon: 'fas fa-chalkboard-teacher', color: '#e74c3c', link: '/admin/dosen' },
        { title: 'Mata Kuliah', count: stats.matakuliah, icon: 'fas fa-book', color: '#f1c40f', link: '/admin/matakuliah' },
        { title: 'Data Jadwal', count: stats.jadwal, icon: 'fas fa-calendar-alt', color: '#2ecc71', link: '/admin/jadwal' },
    ];

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = '/login';
    };

    return (
        <div className="main-content">
            <AdminNavbar />
            <div className="header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h1>Dashboard Admin</h1>
                
            </div>

            <div className="content-section">
                <h3 style={{marginBottom: '20px', color: '#2E8B57'}}>Selamat Datang, Admin!</h3>
                <p style={{marginBottom: '30px'}}>Berikut adalah ringkasan data pada Website Program Studi Ilmu Komputer.</p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                    {cards.map((card, index) => (
                        <Link to={card.link} key={index} style={{ textDecoration: 'none' }}>
                            <div style={{ 
                                backgroundColor: 'white', 
                                padding: '25px', 
                                borderRadius: '10px', 
                                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                                borderLeft: `5px solid ${card.color}`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                transition: 'transform 0.2s',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                            >
                                <div>
                                    <h4 style={{ margin: 0, color: '#666', fontSize: '0.9rem' }}>{card.title}</h4>
                                    <h2 style={{ margin: '5px 0 0 0', fontSize: '2rem', color: '#333' }}>{card.count}</h2>
                                </div>
                                <div style={{ fontSize: '2.5rem', color: card.color, opacity: 0.3 }}>
                                    <i className={card.icon}></i>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DashboardAdmin;