const router = require('express').Router();
const bycrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

router.post('/register', async (req, res) => {
    try {
        const { email, password } = req.body;
        const passwordHash = await bycrypt.hash(password, 10);
        const user = await User.create({ 
            email, 
            password: passwordHash 
        });
        res.status(201).json(user);
        //res.status(201).json({ message: 'Usuario registrado exitosamente' });
    }catch (err) {
        res.status(400).json({ message: 'Error al registrar el usuario: ' + err.message });
    }
});

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ 
            message: 'Usuario no encontrado' });
        const valid = await bycrypt.compare(password, user.password);
        if (!valid) return res.status(401).json({
            message: 'Credenciales inválidas' });
        const token = jwt.sign(
            { id: user._id, email: user.email },
            "121121",
             { expiresIn: '1d' }
        );
        res.status(200).json({token});

    }catch (err) {
        res.status(500).json({ 
            message: err.message || "No pudo prosesarse la solicitud"
        });
    }
});

module.exports = router;