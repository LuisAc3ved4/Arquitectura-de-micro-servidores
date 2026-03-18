const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const contactRoutes = require("./routes/contacts.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/contacts", contactRoutes);

const mongoURI = process.env.MONGO_URL || "mongodb://root:1234@localhost:27017/ms2_db?authSource=admin";

mongoose.connect(mongoURI)
.then(() => {
    app.listen(3001, () => console.log("Servidor ms-2 corriendo en el puerto 3001"));
}).catch(
    err => console.error("Error en ms-2:", err)
);