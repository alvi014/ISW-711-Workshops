const Professor = require('../models/professor.model');

// Obtener todos los profesores
exports.getAll = async (req, res) => {
    try {
        const professors = await Professor.find();
        res.json(professors);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Crear un nuevo profesor
exports.create = async (req, res) => {
    try {
        const newProfessor = new Professor(req.body);
        const savedProfessor = await newProfessor.save();
        res.status(201).json(savedProfessor);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Actualizar un profesor (por ID)
exports.update = async (req, res) => {
    try {
        const updatedProfessor = await Professor.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            { new: true, runValidators: true } 
        );
        res.json(updatedProfessor);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Eliminar un profesor
exports.delete = async (req, res) => {
    try {
        const professorId = req.params.id;

        const Course = require('../models/course.model');
        const assignedCourses = await Course.findOne({ professorId: professorId });

        if (assignedCourses) {

            return res.status(400).json({ 
                message: "No se puede eliminar: El profesor tiene cursos asignados. Reasigne los cursos primero." 
            });
        }

        const deletedProfessor = await Professor.findByIdAndDelete(professorId);
        
        if (!deletedProfessor) {
            return res.status(404).json({ message: "Profesor no encontrado" });
        }

        res.json({ message: "Profesor eliminado correctamente" });

    } catch (err) {
        res.status(500).json({ message: err.message });
    }

};