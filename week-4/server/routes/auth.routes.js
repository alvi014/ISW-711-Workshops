const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

// Verifica que no diga "/auth/register", solo "/register"
router.post('/register', authController.register);
router.post('/token', authController.token); 

module.exports = router;