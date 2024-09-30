const express = require('express');
const router = express.Router();
const { registerUser } = require('../controllers/userController');

// POST endpoint to handle user registration
router.post('/register', registerUser);

module.exports = router;
