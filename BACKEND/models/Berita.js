const mongoose = require('mongoose');

const BeritaSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    category: { type: String, default: 'Berita' },
    author: { type: String, default: 'Admin' },
    image: { type: String },
    date: { type: Date, default: Date.now },
    featured: { type: Boolean, default: false },
    link: { type: String } // <--- TAMBAHAN BARU (Opsional)
});

module.exports = mongoose.model('Berita', BeritaSchema);