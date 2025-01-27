const User = require('../models/userModel');


const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const [updatedRows] = await User.update(req.body, {
      where: { id }
    });
 
    if (updatedRows === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
 
    const updatedUser = await User.findByPk(id);
    res.status(200).json(updatedUser);
  } catch (err) {
    console.error('Error updating user:', err);
    res.status(500).json({ error: err.message });
  }
};
 
module.exports = {
  updateUser
};