import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AdminNavbar from '../../components/AdminNavbar';

const AdminBerita = () => {
    const [beritaList, setBeritaList] = useState([]);
    const [formData, setFormData] = useState({
        title: '', content: '', category: 'Berita', author: 'Admin', featured: false, image: null, link: ''
    });
    const navigate = useNavigate();

    // Helper: Siapkan header token untuk izin akses
    const getAuthHeader = () => ({
        headers: { 
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'multipart/form-data' 
        }
    });

    // Ambil data berita dari backend
    const fetchBerita = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/berita');
            setBeritaList(res.data);
        } catch (err) { console.error(err); }
    };

    useEffect(() => { fetchBerita(); }, []);

    const handleChange = (e) => {
        if (e.target.name === 'image') setFormData({ ...formData, image: e.target.files[0] });
        else if (e.target.name === 'featured') setFormData({ ...formData, featured: e.target.checked });
        else setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        // Masukkan semua data ke FormData agar bisa kirim file gambar
        Object.keys(formData).forEach(key => data.append(key, formData[key]));
        

        try {
            await axios.post('http://localhost:5000/api/berita', data, getAuthHeader());
            alert('Berita Berhasil Ditambahkan!');
            setFormData({ title: '', content: '', category: 'Berita', author: 'Admin', featured: false, image: null, link: '' });
            fetchBerita(); // Refresh daftar berita
        } catch (error) {
            console.error(error);
            if (error.response && error.response.status === 401) {
                alert("Sesi habis, silakan login lagi.");
                navigate('/login');
            } else {
                alert('Gagal: ' + (error.response?.data?.message || 'Terjadi kesalahan'));
            }
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm("Yakin hapus berita ini?")) return;
        try {
            await axios.delete(`http://localhost:5000/api/berita/${id}`, {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            });
            fetchBerita();
        } catch (error) { console.error(error); }
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <div className="main-content">
            <AdminNavbar />
            <div className="header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h1>Admin Panel - Berita</h1>
                
            </div>
            
            <div className="content-section" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                {/* Form Input */}
                <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px', border: '1px solid #ddd' }}>
                    <h3 style={{marginBottom: '15px', color: '#2E8B57'}}>Tambah Berita Baru</h3>
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <input required type="text" name="title" placeholder="Judul Berita" value={formData.title} onChange={handleChange} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
                        <textarea required name="content" placeholder="Isi Berita" rows="4" value={formData.content} onChange={handleChange} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}></textarea>
                        <select name="category" value={formData.category} onChange={handleChange} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}>
                            <option>Berita</option><option>Pengumuman</option><option>Prestasi</option><option>Artikel</option>
                        </select>
                        <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                            <input type="checkbox" id="featured" name="featured" checked={formData.featured} onChange={handleChange} /> 
                            <label htmlFor="featured">Jadikan Featured (Tampil di Slide)</label>
                        </div>
                        <input type="file" name="image" onChange={handleChange} style={{marginTop: '5px'}} />
                        <input 
    type="text" 
    name="link" 
    placeholder="Link Tautan (Opsional - misal: https://google.com)" 
    value={formData.link} 
    onChange={handleChange} 
    style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} 
/>
                        <button type="submit" style={{ marginTop: '10px', padding: '10px', background: '#2E8B57', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>+ Simpan Berita</button>
                    </form>
                </div>

                {/* List Berita */}
                <div>
                    <h3 style={{marginBottom: '15px', color: '#2E8B57'}}>Daftar Berita Aktif</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxHeight: '500px', overflowY: 'auto' }}>
                        {beritaList.map(item => (
                            <div key={item._id} style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'white', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                                <div style={{flex: 1, marginRight: '10px'}}>
                                    <h4 style={{ margin: '0 0 5px 0', fontSize: '1rem' }}>{item.title}</h4>
                                    <div style={{fontSize: '0.8rem', color: '#666'}}>
                                        <span style={{background: '#eee', padding: '2px 6px', borderRadius: '4px', marginRight: '8px'}}>{item.category}</span>
                                        {new Date(item.date).toLocaleDateString()}
                                    </div>
                                </div>
                                <button onClick={() => handleDelete(item._id)} style={{ background: '#dc3545', color: 'white', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer' }}>Hapus</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminBerita;