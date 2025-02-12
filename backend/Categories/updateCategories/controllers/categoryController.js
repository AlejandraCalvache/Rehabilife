const Category = require('../models/categoryModel');

const updateCategory = async (req, res) => {
  try {
    const id = req.params.id;
    const [updatedRows] = await Category.update(req.body, {
      where: { id }
    });

    if (updatedRows === 0) {
      return res.status(404).json({ error: 'Category not found' });
    }

    const updatedCategory = await Category.findByPk(id);
    res.status(200).json(updatedCategory);
  } catch (err) {
    console.error('Error updating category:', err);
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  updateCategory
};
