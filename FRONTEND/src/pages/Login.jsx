import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            // Panggil API Backend
            const res = await axios.post('http://localhost:5000/api/auth/login', {
                username, 
                password
            });
            
            // Simpan token "kunci rahasia" di browser
            localStorage.setItem('token', res.data.token); 
            
            alert("Login Berhasil!");
            navigate('/admin/dashboard'); // Pindah ke halaman admin
        } catch (err) {
            console.error(err);
            alert("Username atau Password Salah!");
        }
    };

    return (
        <div className="main-content" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
            <div style={{ padding: '30px', background: 'white', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', width: '350px' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#2E8B57' }}>Admin Login</h2>
                <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <input 
                        type="text" placeholder="Username" 
                        value={username} onChange={(e) => setUsername(e.target.value)}
                        style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
                    />
                    <input 
                        type="password" placeholder="Password" 
                        value={password} onChange={(e) => setPassword(e.target.value)}
                        style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
                    />
                    <button type="submit" style={{ padding: '10px', background: '#2E8B57', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
                        LOGIN
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;