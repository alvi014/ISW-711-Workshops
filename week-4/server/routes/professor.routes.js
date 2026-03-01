const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const professorController = require('../controllers/professor.controller');

router.get('/',auth, professorController.getAll);
router.post('/', auth,professorController.create);
router.put('/:id', auth,professorController.update);
router.delete('/:id', auth,professorController.delete);

module.exports = router;