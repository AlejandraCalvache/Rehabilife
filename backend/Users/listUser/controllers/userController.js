const User = require('../models/userModel');
 
const listUser = async (req, res) => {
  try {
    const id = await User.findAll();
    res.json(id);
  } catch (err) {
    console.error('Error fetching user:', err);
    res.status(500).json({ error: err.message });
  }
};
 
const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(id);
  } catch (err) {
    console.error('Error fetching user by id:', err);
    res.status(500).json({ error: err.message });
  }
};
 
module.exports = {
  listUser,
  getUserById,
};