const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// REGISTER (Ini rute yang Anda panggil)
// router.post('/register', async (req, res) => {
//     try {
//         // Cek apakah username/password dikirim
//         if (!req.body.username || !req.body.password) {
//             return res.status(400).json("Username dan Password wajib diisi!");
//         }

//         const salt = await bcrypt.genSalt(10);
//         const hashedPassword = await bcrypt.hash(req.body.password, salt);

//         const newUser = new User({
//             username: req.body.username,
//             password: hashedPassword
//         });
//         const user = await newUser.save();
//         res.status(200).json(user);
//     } catch (err) {
//         console.log(err); // Agar error tampil di terminal jika ada
//         res.status(500).json(err);
//     }
// });

// LOGIN
router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if (!user) return res.status(404).json("User tidak ditemukan!");

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) return res.status(400).json("Password salah!");

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
        res.json({ token, username: user.username });
} catch (err) {
    console.log("ERROR REGISTER:", err); // Tampilkan di terminal
    // Tampilkan pesan error spesifik ke Postman
    res.status(500).json({ 
        message: err.message || "Terjadi kesalahan pada server",
        detail: err 
    }); 
}
});

module.exports = router; // <--- PENTING! Jangan lupa ini