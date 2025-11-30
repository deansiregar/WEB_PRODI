import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AdminNavbar from '../../components/AdminNavbar';

const AdminJadwal = () => {
    const [jadwalList, setJadwalList] = useState([]);
    const [formData, setFormData] = useState({
        blok: 'BLOK I', semester: 'SEMESTER 1', kelas: 'KELAS 25A',
        hari: 'Senin', jam: '', mataKuliah: '', dosen: '', ruangan: ''
    });
    const navigate = useNavigate();

    const getAuthHeader = () => ({
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
    });

    const fetchJadwal = async () => {
        try {
            const res = await axios.get('https://apiwebprodi.vercel.app/api/jadwal');
            setJadwalList(res.data);
        } catch (err) { console.error(err); }
    };

    useEffect(() => { fetchJadwal(); }, []);

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://apiwebprodi.vercel.app/api/jadwal', formData, getAuthHeader());
            alert('Jadwal Berhasil Disimpan!');
            // Reset sebagian form saja agar mudah input berulang
            setFormData({ ...formData, jam: '', mataKuliah: '', dosen: '', ruangan: '' });
            fetchJadwal();
        } catch (error) { alert('Gagal menyimpan data'); }
    };

    const handleDelete = async (id) => {
        if (!window.confirm("Yakin hapus?")) return;
        try {
            await axios.delete(`https://apiwebprodi.vercel.app/api/jadwal/${id}`, getAuthHeader());
            fetchJadwal();
        } catch (error) { console.error(error); }
    };

    return (
        <div className="main-content">
            <AdminNavbar />
            <div className="header" style={{display: 'flex', justifyContent: 'space-between'}}>
                <h1>Admin - Jadwal Kuliah</h1>
              
            </div>
            
            <div className="content-section" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '30px' }}>
                {/* FORM INPUT */}
                <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px', height: 'fit-content' }}>
                    <h3 style={{marginBottom: '15px', color: '#2E8B57'}}>Input Jadwal</h3>
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        
                        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px'}}>
                            <select name="blok" value={formData.blok} onChange={handleChange} style={{padding: '8px'}}>
                                <option>BLOK I</option><option>BLOK II</option>
                            </select>
                            <select name="semester" value={formData.semester} onChange={handleChange} style={{padding: '8px'}}>
                                <option>SEMESTER 1</option><option>SEMESTER 3</option><option>SEMESTER 5</option><option>SEMESTER 7</option>
                            </select>
                        </div>

                        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px'}}>
                            <input required type="text" name="kelas" placeholder="Kelas (ex: KELAS 25A)" value={formData.kelas} onChange={handleChange} style={{padding: '8px'}} />
                            <select name="hari" value={formData.hari} onChange={handleChange} style={{padding: '8px'}}>
                                <option>Senin</option><option>Selasa</option><option>Rabu</option><option>Kamis</option><option>Jumat</option>
                            </select>
                        </div>

                        <input required type="text" name="jam" placeholder="Jam (ex: 08:00 - 10:30)" value={formData.jam} onChange={handleChange} style={{padding: '8px'}} />
                        <input required type="text" name="mataKuliah" placeholder="Mata Kuliah" value={formData.mataKuliah} onChange={handleChange} style={{padding: '8px'}} />
                        <input required type="text" name="dosen" placeholder="Kode Dosen (ex: SIA)" value={formData.dosen} onChange={handleChange} style={{padding: '8px'}} />
                        <input required type="text" name="ruangan" placeholder="Ruangan (ex: 77.1.01)" value={formData.ruangan} onChange={handleChange} style={{padding: '8px'}} />

                        <button type="submit" style={{marginTop: '10px', padding: '10px', background: 'var(--primary)', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold'}}>+ Simpan Jadwal</button>
                    </form>
                </div>

                {/* TABEL DATA */}
                <div style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
                    <h3 style={{marginBottom: '15px', color: '#2E8B57'}}>Data Jadwal Terinput</h3>
                    <div style={{ maxHeight: '500px', overflowY: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
                            <thead>
                                <tr style={{ background: '#eee', textAlign: 'left' }}>
                                    <th style={{padding: '8px'}}>Detail Kelas</th>
                                    <th style={{padding: '8px'}}>Waktu/Mapel</th>
                                    <th style={{padding: '8px'}}>Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {jadwalList.map(item => (
                                    <tr key={item._id} style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{padding: '8px'}}>
                                            <b>{item.blok}</b><br/>
                                            {item.semester} - {item.kelas}<br/>
                                            <span style={{color: 'var(--primary)'}}>{item.hari}</span>
                                        </td>
                                        <td style={{padding: '8px'}}>
                                            <b>{item.jam}</b><br/>
                                            {item.mataKuliah}<br/>
                                            <small>{item.dosen} | {item.ruangan}</small>
                                        </td>
                                        <td style={{padding: '8px'}}>
                                            <button onClick={() => handleDelete(item._id)} style={{background: '#dc3545', color: 'white', border: 'none', padding: '4px 8px', borderRadius: '4px', cursor: 'pointer'}}>Hapus</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminJadwal;