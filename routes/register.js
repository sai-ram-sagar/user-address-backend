router.post('/register', async (req, res) => {
  const { name, address } = req.body;

  try {
      // Create user
      const user = await User.create({ name });

      // Create address linked to user
      const newAddress = await Address.create({
          address,
          userId: user.id,
      });

      res.status(201).json({
          message: 'User and address saved successfully',
          user,
          newAddress,
      });
  } catch (error) {
      console.error('Error saving user and address:', error);
      res.status(400).json({
          message: 'Error saving user and address',
          error,
      });
  }
});
