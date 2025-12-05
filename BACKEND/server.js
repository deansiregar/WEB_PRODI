require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();

// --- 1. MIDDLEWARE ---
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// --- 2. KONEKSI DATABASE ---
mongoose.connect(process.env.MONGO_URI, {
  serverSelectionTimeoutMS: 30000,
  socketTimeoutMS: 45000,
})
  .then(() => {
    console.log("✅ MongoDB Connected");
    console.log("📍 Database:", mongoose.connection.name);
  })
  .catch(err => {
    console.error("❌ MongoDB Connection Error:");
    console.error("Message:", err.message);
    console.error("Code:", err.code);
  });

// Tambahan: Monitor connection events
mongoose.connection.on('error', err => {
  console.error('❌ MongoDB Runtime Error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.warn('⚠️ MongoDB Disconnected');
});
// --- 3. IMPORT ROUTES (WAJIB DI ATAS APP.USE) ---
const authRoutes = require('./routes/auth');
const beritaRoutes = require('./routes/berita');
const dosenRoutes = require('./routes/dosen');
const matakuliahRoutes = require('./routes/matakuliah');
const jadwalRoutes = require('./routes/jadwal');
// --- 4. USE ROUTES ---
app.use('/api/auth', authRoutes);
app.use('/api/berita', beritaRoutes);
app.use('/api/dosen', dosenRoutes);
app.use('/api/matakuliah', matakuliahRoutes);
app.use('/api/jadwal', jadwalRoutes); //
app.get('/', (req, res) => {
    res.send("Backend API Web Prodi is Running...");
});
// --- 5. JALANKAN SERVER ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server berjalan di port ${PORT}`);
});
///