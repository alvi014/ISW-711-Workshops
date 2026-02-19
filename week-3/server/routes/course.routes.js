const express = require('express');
const router = express.Router();
const courseController = require('../controllers/course.controller');

router.get('/', courseController.getAll);
router.post('/', courseController.createCourse);
router.put('/:id', courseController.update); 
router.delete('/:id', courseController.delete);

module.exports = router;