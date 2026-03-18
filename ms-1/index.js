const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const rutasUsuario = require('./routes/auth.route');

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/user', rutasUsuario);

app.get("/", (req, res) => res.json({ message: "Hola mundo" }));

const mongoURI = process.env.MONGO_URI || "mongodb://mongo1:27017,mongo2:27017,mongo3:27017/ms1_db?replicaSet=rs0";

mongoose.connect(mongoURI)
    .then(() => {
        console.log('Conectado exitosamente a MongoDB Replica Set (rs0)');
        app.listen(3000, () => console.log('Servidor ms-1 iniciado en el puerto 3000'));
    })
    .catch((err) => {
        console.error('Error: el servidor no pudo iniciarse: ' + err);
    });