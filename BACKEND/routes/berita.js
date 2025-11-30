const router = require('express').Router();
const Berita = require('../models/Berita');
const multer = require('multer');
const auth = require('../middleware/authMiddleware');

// --- GANTI BAGIAN INI (Import dari config baru) ---
const { storage } = require('../utils/cloudinaryConfig');
const upload = multer({ storage }); 
// --------------------------------------------------

// GET BERITA
router.get('/', async (req, res) => {
    try {
        const berita = await Berita.find().sort({ date: -1 });
        res.json(berita);
    } catch (err) { res.status(500).json(err); }
});

// TAMBAH BERITA
router.post('/', auth, upload.single('image'), async (req, res) => {
    try {
        const { title, content, category, author, featured, link } = req.body;

        // Di Cloudinary, path gambar ada di req.file.path (berupa URL lengkap)
        const image = req.file ? req.file.path : null;

        const newBerita = new Berita({
            title, content, category, author, 
            featured: featured === 'true',
            link,
            image: image // Simpan URL Cloudinary langsung
        });

        const saved = await newBerita.save();
        res.status(201).json(saved);
    } catch (err) { res.status(500).json(err); }
});

// HAPUS BERITA
router.delete('/:id', auth, async (req, res) => {
    try {
        await Berita.findByIdAndDelete(req.params.id);
        res.json("Berita dihapus");
    } catch (err) { res.status(500).json(err); }
});

module.exports = router;