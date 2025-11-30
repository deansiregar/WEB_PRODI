import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AdminNavbar from '../../components/AdminNavbar';

const AdminMataKuliah = () => {
    const [matkulList, setMatkulList] = useState([]);
    const [formData, setFormData] = useState({ kode: '', nama: '', sks: '', semester: '', jenis: 'Wajib' });
    const navigate = useNavigate();

    // Helper Autentikasi
    const getAuthHeader = () => ({
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
    });

    // Ambil Data
    const fetchMatkul = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/matakuliah');
            setMatkulList(res.data);
        } catch (err) { console.error(err); }
    };

    useEffect(() => { fetchMatkul(); }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/matakuliah', formData, getAuthHeader());
            alert('Mata Kuliah Berhasil Disimpan!');
            setFormData({ kode: '', nama: '', sks: '', semester: '', jenis: 'Wajib' }); // Reset form
            fetchMatkul(); // Refresh tabel
        } catch (error) {
            alert('Gagal menyimpan data');
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm("Yakin hapus mata kuliah ini?")) return;
        try {
            await axios.delete(`http://localhost:5000/api/matakuliah/${id}`, getAuthHeader());
            fetchMatkul();
        } catch (error) { console.error(error); }
    };

    return (
        <div className="main-content">
            <AdminNavbar />
            <div className="header" style={{display: 'flex', justifyContent: 'space-between'}}>
                <h1>Admin - Mata Kuliah</h1>
               
            </div>
            
            <div className="content-section" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '30px' }}>
                {/* FORM INPUT */}
                <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px', height: 'fit-content' }}>
                    <h3 style={{marginBottom: '15px', color: '#2E8B57'}}>Input Mata Kuliah</h3>
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <input required type="text" name="kode" placeholder="Kode (Contoh: KOM101)" value={formData.kode} onChange={handleChange} style={{padding: '10px', borderRadius: '4px', border: '1px solid #ccc'}} />
                        <input required type="text" name="nama" placeholder="Nama Mata Kuliah" value={formData.nama} onChange={handleChange} style={{padding: '10px', borderRadius: '4px', border: '1px solid #ccc'}} />
                        
                        <div style={{display: 'flex', gap: '10px'}}>
                            <input required type="number" name="sks" placeholder="SKS" value={formData.sks} onChange={handleChange} style={{padding: '10px', width: '50%', borderRadius: '4px', border: '1px solid #ccc'}} />
                            <input required type="number" name="semester" placeholder="Semester" value={formData.semester} onChange={handleChange} style={{padding: '10px', width: '50%', borderRadius: '4px', border: '1px solid #ccc'}} />
                        </div>

                        <select name="jenis" value={formData.jenis} onChange={handleChange} style={{padding: '10px', borderRadius: '4px', border: '1px solid #ccc'}}>
                            <option value="Wajib">Wajib</option>
                            <option value="Pilihan">Pilihan</option>
                        </select>

                        <button type="submit" style={{marginTop: '10px', padding: '10px', background: 'var(--primary)', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold'}}>+ Simpan</button>
                    </form>
                </div>

                {/* TABEL DATA */}
                <div style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
                    <h3 style={{marginBottom: '15px', color: '#2E8B57'}}>Daftar Mata Kuliah</h3>
                    <div style={{ maxHeight: '500px', overflowY: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                            <thead>
                                <tr style={{ background: '#eee', textAlign: 'left' }}>
                                    <th style={{padding: '10px'}}>Sem</th>
                                    <th style={{padding: '10px'}}>Kode</th>
                                    <th style={{padding: '10px'}}>Nama</th>
                                    <th style={{padding: '10px'}}>SKS</th>
                                    <th style={{padding: '10px'}}>Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {matkulList.map(mk => (
                                    <tr key={mk._id} style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{padding: '10px', textAlign: 'center'}}>{mk.semester}</td>
                                        <td style={{padding: '10px', fontWeight: 'bold'}}>{mk.kode}</td>
                                        <td style={{padding: '10px'}}>
                                            {mk.nama} 
                                            {mk.jenis === 'Pilihan' && <span style={{marginLeft: '5px', fontSize: '0.7rem', background: '#fff3cd', padding: '2px 5px', borderRadius: '4px'}}>Pilihan</span>}
                                        </td>
                                        <td style={{padding: '10px', textAlign: 'center'}}>{mk.sks}</td>
                                        <td style={{padding: '10px'}}>
                                            <button onClick={() => handleDelete(mk._id)} style={{background: '#dc3545', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer'}}>Hapus</button>
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

export default AdminMataKuliah;