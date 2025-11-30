const router = require('express').Router();
const MataKuliah = require('../models/MataKuliah');
const auth = require('../middleware/authMiddleware'); // Satpam Login

// GET SEMUA (Bisa diakses siapa saja)
router.get('/', async (req, res) => {
    try {
        // Kita urutkan berdasarkan Semester (1, 2, 3...) lalu Nama
        const matkul = await MataKuliah.find().sort({ semester: 1, nama: 1 });
        res.json(matkul);
    } catch (err) {
        res.status(500).json(err);
    }
});

// TAMBAH (Hanya Admin)
router.post('/', auth, async (req, res) => {
    const newMatkul = new MataKuliah(req.body);
    try {
        const savedMatkul = await newMatkul.save();
        res.status(201).json(savedMatkul);
    } catch (err) {
        res.status(500).json(err);
    }
});

// HAPUS (Hanya Admin)
router.delete('/:id', auth, async (req, res) => {
    try {
        await MataKuliah.findByIdAndDelete(req.params.id);
        res.json("Mata Kuliah dihapus");
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;