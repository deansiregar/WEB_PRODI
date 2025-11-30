const mongoose = require('mongoose');

const JadwalSchema = new mongoose.Schema({
    blok: { type: String, required: true },      // Contoh: "BLOK I"
    semester: { type: String, required: true },  // Contoh: "SEMESTER 1"
    kelas: { type: String, required: true },     // Contoh: "KELAS 25A"
    hari: { type: String, required: true },      // Contoh: "Senin"
    jam: { type: String, required: true },       // Contoh: "08:00 - 10:30"
    mataKuliah: { type: String, required: true },
    dosen: { type: String, required: true },
    ruangan: { type: String, required: true }
});

module.exports = mongoose.model('Jadwal', JadwalSchema);