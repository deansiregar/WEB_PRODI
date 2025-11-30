const mongoose = require('mongoose');

const DosenSchema = new mongoose.Schema({
    name: { type: String, required: true },
    ttl: { type: String, required: true }, // Tempat Tanggal Lahir
    position: { type: String, required: true }, // Jabatan (e.g. Lektor)
    expertise: { type: String, required: true }, // Bidang Keahlian
    education: { type: [String], required: true }, // Array of strings untuk S1, S2, S3
    sintaLink: { type: String },
    pubLink: { type: String },
    image: { type: String }
});

module.exports = mongoose.model('Dosen', DosenSchema);