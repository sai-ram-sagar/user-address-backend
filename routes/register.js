const express = require('express');
const router = express.Router();
const { User, Address } = require('../models'); // Adjust the path if necessary

// POST route to register user and address
router.post('/', async (req, res) => {
  const { name, address } = req.body;

  try {
    // Create new user
    const user = await User.create({ name });
    
    // Create new address associated with the user
    const newAddress = await Address.create({ address, userId: user.id });

    res.status(201).json({
      message: 'User and address saved successfully',
      user,
      newAddress
    });
  } catch (error) {
    res.status(500).json({ message: 'Error saving user and address', error });
  }
});

module.exports = router;
