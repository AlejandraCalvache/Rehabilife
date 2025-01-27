const Product = require('../models/productsModel');

const updateProducts = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedProductData = req.body;

    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    await product.update(updatedProductData);

    res.json({ message: 'Product updated successfully', product });
  } catch (err) {
    console.error('Error updating Product:', err);
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  updateProducts
};
