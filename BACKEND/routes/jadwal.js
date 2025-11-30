const router = require('express').Router();
const Jadwal = require('../models/Jadwal');
const auth = require('../middleware/authMiddleware');

// GET SEMUA JADWAL
router.get('/', async (req, res) => {
    try {
        const jadwal = await Jadwal.find();
        res.json(jadwal);
    } catch (err) {
        res.status(500).json(err);
    }
});

// TAMBAH JADWAL (Admin)
router.post('/', auth, async (req, res) => {
    const newJadwal = new Jadwal(req.body);
    try {
        const savedJadwal = await newJadwal.save();
        res.status(201).json(savedJadwal);
    } catch (err) {
        res.status(500).json(err);
    }
});

// HAPUS JADWAL (Admin)
router.delete('/:id', auth, async (req, res) => {
    try {
        await Jadwal.findByIdAndDelete(req.params.id);
        res.json("Jadwal dihapus");
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;