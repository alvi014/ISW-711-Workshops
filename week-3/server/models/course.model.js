const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    nombre: { 
        type: String, 
        required: true 
    },
    codigo: { 
        type: String, 
        required: true, 
        unique: true 
    },
    descripcion: { 
        type: String, 
        required: true 
    },
    professorId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Professor', 
        required: true 
    }
});

module.exports = mongoose.model('Course', courseSchema);