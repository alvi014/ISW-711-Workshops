const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const courseController = require('../controllers/course.controller');

router.get('/', auth ,courseController.getAll);
router.post('/', auth, courseController.createCourse);
router.put('/:id', auth, courseController.update); 
router.delete('/:id', auth, courseController.delete);

module.exports = router;