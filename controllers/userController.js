const { User, Address } = require('../models');

const registerUser = async (req, res) => {
  const { name, address } = req.body;

  if (!name || !address) {
    return res.status(400).json({ error: 'Name and address are required' });
  }

  try {
    // Create a new user
    const user = await User.create({ name });

    // Add the address associated with the user
    const newAddress = await Address.create({
      address,
      userId: user.id,
    });

    res.status(200).json({
      message: 'User and address saved successfully',
      user,
      newAddress,
    });
  } catch (error) {
    console.error('Error saving user and address:', error);
    res.status(500).json({ error: 'Error saving user and address' });
  }
};

module.exports = { registerUser };
