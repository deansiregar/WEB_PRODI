const router = require('express').Router();
const Dosen = require('../models/Dosen');
const multer = require('multer');
const path = require('path');
const auth = require('../middleware/authMiddleware'); // Satpam

// Setup Upload Gambar
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'uploads/'),
    filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage });

// GET SEMUA DOSEN (Publik)
router.get('/', async (req, res) => {
    try {
        const dosen = await Dosen.find();
        res.json(dosen);
    } catch (err) {
        res.status(500).json(err);
    }
});

// TAMBAH DOSEN (Admin Only)
router.post('/', auth, upload.single('image'), async (req, res) => {
    try {
        // Education dikirim sebagai string dipisah koma/enter, kita ubah jadi array
        // Contoh input: "S1 USU, S2 IPB" -> ["S1 USU", "S2 IPB"]
        let eduArray = [];
        if (req.body.education) {
            eduArray = req.body.education.split(',').map(item => item.trim());
        }

        const newDosen = new Dosen({
            name: req.body.name,
            ttl: req.body.ttl,
            position: req.body.position,
            expertise: req.body.expertise,
            education: eduArray,
            sintaLink: req.body.sintaLink,
            pubLink: req.body.pubLink,
            image: req.file ? req.file.filename : null
        });

        const savedDosen = await newDosen.save();
        res.status(201).json(savedDosen);
    } catch (err) {
        res.status(500).json(err);
    }
});

// HAPUS DOSEN (Admin Only)
router.delete('/:id', auth, async (req, res) => {
    try {
        await Dosen.findByIdAndDelete(req.params.id);
        res.json("Data Dosen dihapus");
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;