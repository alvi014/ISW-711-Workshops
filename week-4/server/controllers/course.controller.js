const Course = require('../models/course.model');

// Obtener todos los cursos 
exports.getAll = async (req, res) => {
    try {
        const courses = await Course.find().populate('professorId');
        res.json(courses);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Crear curso 
exports.createCourse = async (req, res) => {
    const course = new Course({
        nombre: req.body.nombre,
        codigo: req.body.codigo,
        descripcion: req.body.descripcion,
        professorId: req.body.professorId 
    });
    try {
        const newCourse = await course.save();
        res.status(201).json(newCourse);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Actualizar curso
exports.update = async (req, res) => {
    try {
        let updateData = { ...req.body };


        if (req.body.professorCedula) {
            const Professor = require('../models/professor.model');
            const prof = await Professor.findOne({ cedula: req.body.professorCedula });
            
            if (prof) {
                updateData.professorId = prof._id;
            } else {
                return res.status(400).json({ message: "No se encontró un profesor con esa cédula" });
            }
        }

        const updatedCourse = await Course.findByIdAndUpdate(
            req.params.id,
            updateData,
            { new: true }
        ).populate('professorId');

        res.json(updatedCourse);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Eliminar curso
exports.delete = async (req, res) => {
    try {
        await Course.findByIdAndDelete(req.params.id);
        res.json({ message: "Curso eliminado correctamente" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};