const Category = require('../models/categoryModel');

const deleteCategory = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedRows = await Category.destroy({
      where: { id }
    });

    if (deletedRows === 0) {
      return res.status(404).json({ error: 'Category not found' });
    }

    res.status(204).end();
  } catch (err) {
    console.error('Error deleting category:', err);
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  deleteCategory
};