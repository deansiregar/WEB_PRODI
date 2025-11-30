import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MataKuliah = () => {
  const [matkulList, setMatkulList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Ambil data dari Backend
    axios.get('https://apiwebprodi.vercel.app/api/matakuliah')
      .then(res => {
        setMatkulList(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  // Fungsi mengelompokkan data berdasarkan Semester
  // Output: { 1: [...data sem 1], 2: [...data sem 2], ... }
  const groupedMatkul = matkulList.reduce((acc, curr) => {
    const sem = curr.semester;
    if (!acc[sem]) acc[sem] = [];
    acc[sem].push(curr);
    return acc;
  }, {});

  if (loading) return <div className="main-content" style={{textAlign: 'center', padding: '50px'}}>Loading Kurikulum...</div>;

  return (
    <div className="main-content">
      <div className="header">
        <h1>Kurikulum & Mata Kuliah</h1>
        <p style={{ color: 'var(--gray)', marginTop: '5px' }}>Daftar sebaran mata kuliah per semester</p>
      </div>
      
      <div className="content-section">
        {Object.keys(groupedMatkul).length === 0 ? (
            <p style={{textAlign: 'center', color: '#888'}}>Belum ada data mata kuliah yang diinput.</p>
        ) : (
            // Loop setiap semester yang ada datanya
            Object.keys(groupedMatkul).map(sem => (
                <div key={sem} style={{ marginBottom: '40px' }}>
                    <div style={{ 
                        display: 'flex', alignItems: 'center', marginBottom: '15px',
                        borderBottom: '2px solid var(--primary)', paddingBottom: '10px'
                    }}>
                        <div style={{ 
                            background: 'var(--primary)', color: 'white', 
                            width: '30px', height: '30px', borderRadius: '50%', 
                            display: 'flex', justifyContent: 'center', alignItems: 'center', 
                            fontWeight: 'bold', marginRight: '10px'
                        }}>
                            {sem}
                        </div>
                        <h3 style={{ color: 'var(--primary)', margin: 0 }}>Semester {sem}</h3>
                    </div>

                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', borderRadius: '8px', overflow: 'hidden' }}>
                            <thead>
                                <tr style={{ backgroundColor: '#2E8B57', color: 'white' }}>
                                    <th style={{ padding: '12px 15px', textAlign: 'left', width: '15%' }}>Kode MK</th>
                                    <th style={{ padding: '12px 15px', textAlign: 'left' }}>Nama Mata Kuliah</th>
                                    <th style={{ padding: '12px 15px', textAlign: 'center', width: '10%' }}>SKS</th>
                                    <th style={{ padding: '12px 15px', textAlign: 'center', width: '15%' }}>Jenis</th>
                                </tr>
                            </thead>
                            <tbody>
                                {groupedMatkul[sem].map((mk, idx) => (
                                    <tr key={mk._id} style={{ backgroundColor: idx % 2 === 0 ? 'white' : '#f8f9fa', borderBottom: '1px solid #eee' }}>
                                        <td style={{ padding: '12px 15px', fontWeight: 'bold', color: '#555' }}>{mk.kode}</td>
                                        <td style={{ padding: '12px 15px', fontWeight: '500', color: '#333' }}>{mk.nama}</td>
                                        <td style={{ padding: '12px 15px', textAlign: 'center' }}>{mk.sks}</td>
                                        <td style={{ padding: '12px 15px', textAlign: 'center' }}>
                                            <span style={{ 
                                                padding: '4px 12px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 'bold',
                                                backgroundColor: mk.jenis === 'Wajib' ? '#e8f5e9' : '#fff3cd',
                                                color: mk.jenis === 'Wajib' ? '#2E8B57' : '#856404',
                                                border: mk.jenis === 'Wajib' ? '1px solid #c8e6c9' : '1px solid #ffeeba'
                                            }}>
                                                {mk.jenis}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            ))
        )}
      </div>
    </div>
  );
};

export default MataKuliah;