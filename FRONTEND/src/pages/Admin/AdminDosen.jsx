import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AdminNavbar from '../../components/AdminNavbar';

const AdminDosen = () => {
    const [dosenList, setDosenList] = useState([]);
    const [formData, setFormData] = useState({
        name: '', ttl: '', position: '', expertise: '', education: '', sintaLink: '', pubLink: '', image: null
    });
    const navigate = useNavigate();

    const getAuthHeader = () => ({
        headers: { 
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'multipart/form-data' 
        }
    });

    const fetchDosen = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/dosen');
            setDosenList(res.data);
        } catch (err) { console.error(err); }
    };

    useEffect(() => { fetchDosen(); }, []);

    const handleChange = (e) => {
        if (e.target.name === 'image') setFormData({ ...formData, image: e.target.files[0] });
        else setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        Object.keys(formData).forEach(key => data.append(key, formData[key]));

        try {
            await axios.post('http://localhost:5000/api/dosen', data, getAuthHeader());
            alert('Data Dosen Berhasil Ditambahkan!');
            setFormData({ name: '', ttl: '', position: '', expertise: '', education: '', sintaLink: '', pubLink: '', image: null });
            fetchDosen();
        } catch (error) {
            console.error(error);
            alert('Gagal menambahkan dosen');
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm("Yakin hapus data dosen ini?")) return;
        try {
            await axios.delete(`http://localhost:5000/api/dosen/${id}`, {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            });
            fetchDosen();
        } catch (error) { console.error(error); }
    };

    return (
        <div className="main-content">
            <AdminNavbar />
            <div className="header">
                <h1>Admin Panel - Manajemen Dosen</h1>
               
            </div>
            
            <div className="content-section" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                {/* Form Input */}
                <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px', border: '1px solid #ddd' }}>
                    <h3 style={{marginBottom: '15px', color: '#2E8B57'}}>Tambah Dosen</h3>
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <input required type="text" name="name" placeholder="Nama Lengkap & Gelar" value={formData.name} onChange={handleChange} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
                        <input required type="text" name="ttl" placeholder="Tempat, Tanggal Lahir (Contoh: Medan, 12-01-1980)" value={formData.ttl} onChange={handleChange} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
                        <input required type="text" name="position" placeholder="Jabatan (Contoh: Lektor Kepala)" value={formData.position} onChange={handleChange} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
                        <input required type="text" name="expertise" placeholder="Bidang Keahlian (Contoh: AI, Data Mining)" value={formData.expertise} onChange={handleChange} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
                        
                        <label style={{fontSize: '0.8rem', fontWeight: 'bold'}}>Riwayat Pendidikan (Pisahkan dengan koma):</label>
                        <textarea required name="education" placeholder="Contoh: S1 Matematika USU, S2 Ilmu Komputer IPB" rows="3" value={formData.education} onChange={handleChange} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}></textarea>
                        
                        <input type="text" name="sintaLink" placeholder="Link SINTA" value={formData.sintaLink} onChange={handleChange} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
                        <input type="text" name="pubLink" placeholder="Link Google Scholar" value={formData.pubLink} onChange={handleChange} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
                        
                        <label style={{fontSize: '0.8rem', fontWeight: 'bold'}}>Foto Profil:</label>
                        <input type="file" name="image" onChange={handleChange} />
                        
                        <button type="submit" style={{ marginTop: '10px', padding: '10px', background: '#2E8B57', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>+ Simpan Data</button>
                    </form>
                </div>

                {/* List Dosen */}
                <div>
                    <h3 style={{marginBottom: '15px', color: '#2E8B57'}}>Daftar Dosen</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxHeight: '600px', overflowY: 'auto' }}>
                        {dosenList.map(item => (
                            <div key={item._id} style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '8px', display: 'flex', alignItems: 'center', background: 'white' }}>
                                <img src={item.image ? `http://localhost:5000/uploads/${item.image}` : 'https://via.placeholder.com/50'} alt={item.name} style={{width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover', marginRight: '10px'}} />
                                <div style={{flex: 1}}>
                                    <h4 style={{ margin: 0, fontSize: '0.95rem' }}>{item.name}</h4>
                                    <small style={{ color: '#666' }}>{item.position}</small>
                                </div>
                                <button onClick={() => handleDelete(item._id)} style={{ background: '#dc3545', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer', fontSize: '0.8rem' }}>Hapus</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDosen;