const { User, Address } = require('../models');

// Controller function to register a user and store their address
const registerUser = async (req, res) => {
  const { name, address } = req.body;

  try {
    // Create a new user
    const user = await User.create({ name });

    // Add the address associated with the user
    await Address.create({
      address,
      userId: user.id,
    });

    res.status(200).json({ message: 'User and address saved successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error saving user and address' });
  }
};

module.exports = { registerUser };
