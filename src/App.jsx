import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Mahasiswa from './pages/Mahasiswa';
import Dosen from './pages/Dosen';
import MataKuliah from './pages/MataKuliah';
import Jadwal from './pages/Jadwal';
import Footer from './components/Footer';
import './styles/Dashboard.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/mahasiswa" element={<Mahasiswa />} />
          <Route path="/dosen" element={<Dosen />} />
          <Route path="/matakuliah" element={<MataKuliah />} />
          <Route path="/jadwal" element={<Jadwal />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;