const mongoose = require('mongoose');

const professorSchema = new mongoose.Schema({
    nombre: String,
    apellidos: String,
    cedula: { type: String, unique: true },
    edad: Number
});

module.exports = mongoose.model('Professor', professorSchema);