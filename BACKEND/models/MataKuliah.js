const mongoose = require('mongoose');

const MataKuliahSchema = new mongoose.Schema({
    kode: { type: String, required: true }, // Misal: KOM123
    nama: { type: String, required: true }, // Misal: Algoritma
    sks: { type: Number, required: true },  // Misal: 3
    semester: { type: Number, required: true }, // Misal: 1
    jenis: { type: String, enum: ['Wajib', 'Pilihan'], default: 'Wajib' }
});

module.exports = mongoose.model('MataKuliah', MataKuliahSchema);