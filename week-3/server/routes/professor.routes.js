const express = require('express');
const router = express.Router();
const professorController = require('../controllers/professor.controller');

router.get('/', professorController.getAll);
router.post('/', professorController.create);
router.put('/:id', professorController.update);
router.delete('/:id', professorController.delete);

module.exports = router;