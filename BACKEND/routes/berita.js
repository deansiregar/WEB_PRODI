const router = require('express').Router();
const Berita = require('../models/Berita');
const multer = require('multer');
const path = require('path');
const auth = require('../middleware/authMiddleware'); // Panggil Satpam

// Setup Upload Gambar
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'uploads/'),
    filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage });

// PUBLIK: Bisa diakses siapa saja
router.get('/', async (req, res) => {
    try {
        const berita = await Berita.find().sort({ date: -1 });
        res.json(berita);
    } catch (err) { res.status(500).json(err); }
});

// PRIVATE: Harus Login (Ada middleware 'auth')
router.post('/', auth, upload.single('image'), async (req, res) => {
    const { title, content, category, author, featured, link } = req.body;
    const newBerita = new Berita({
        ...req.body,
        featured: req.body.featured === 'true',
        image: req.file ? req.file.filename : null,
        link: link
    });
    try {
        const saved = await newBerita.save();
        res.status(201).json(saved);
    } catch (err) { res.status(500).json(err); }
});

router.delete('/:id', auth, async (req, res) => {
    try {
        await Berita.findByIdAndDelete(req.params.id);
        res.json("Berita dihapus");
    } catch (err) { res.status(500).json(err); }
});

module.exports = router;