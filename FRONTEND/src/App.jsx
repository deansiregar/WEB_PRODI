import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'; // Tambah useLocation
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';

// Pages Publik
import Dashboard from './pages/Dashboard';
import Dosen from './pages/Dosen';
import MataKuliah from './pages/MataKuliah';
import Jadwal from './pages/Jadwal';
import ProfilProdi from './pages/ProfilProdi';
import Berita from './pages/Berita';

// Pages Admin
import Login from './pages/Login';
import DashboardAdmin from './pages/Admin/DashboardAdmin';
import AdminBerita from './pages/Admin/AdminBerita';
import AdminDosen from './pages/Admin/AdminDosen';
import AdminMataKuliah from './pages/Admin/AdminMataKuliah';
import AdminJadwal from './pages/Admin/AdminJadwal';

import './styles/Dashboard.css';

// Komponen Layout untuk menangani logika tampilan Navbar/Footer
const MainLayout = () => {
  const location = useLocation();
  
  // Cek apakah halaman saat ini adalah halaman admin atau login
  // Logic: Jika path diawali '/admin' ATAU path adalah '/login', maka sembunyikan Navbar/Footer user
  const isAdminOrLoginPage = location.pathname.startsWith('/admin') || location.pathname === '/login';

  return (
    <div className="App">
      {/* Tampilkan Navbar User HANYA jika BUKAN halaman admin/login */}
      {!isAdminOrLoginPage && <Navbar />}
      
      <Routes>
        {/* Rute Publik */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/dosen" element={<Dosen />} />
        <Route path="/matakuliah" element={<MataKuliah />} />
        <Route path="/jadwal" element={<Jadwal />} />
        <Route path="/profil" element={<ProfilProdi />} />
        <Route path="/berita" element={<Berita />} />
        
        {/* Rute Login */}
        <Route path="/login" element={<Login />} />

        {/* Rute Admin (Dilindungi ProtectedRoute) */}
        <Route path="/admin/dashboard" element={<ProtectedRoute><DashboardAdmin /></ProtectedRoute>} />
        <Route path="/admin/berita" element={<ProtectedRoute><AdminBerita /></ProtectedRoute>} />
        <Route path="/admin/dosen" element={<ProtectedRoute><AdminDosen /></ProtectedRoute>} />
        <Route path="/admin/matakuliah" element={<ProtectedRoute><AdminMataKuliah /></ProtectedRoute>} />
        <Route path="/admin/jadwal" element={<ProtectedRoute><AdminJadwal /></ProtectedRoute>} />
      </Routes>

      {/* Tampilkan Footer User HANYA jika BUKAN halaman admin/login */}
      {!isAdminOrLoginPage && <Footer />}
    </div>
  );
};

function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}

export default App;