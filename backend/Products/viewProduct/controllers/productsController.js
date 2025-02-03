const Product = require('../models/productsModel');

const listProducts = async (req, res) => {
  try {
    const products = await Product.findAll({
      attributes: ['id', 'name', 'price', 'description', 'mark', 'advert', 'image_url'] 
    });
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getProductById = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findByPk(id, {
      attributes: ['id', 'name', 'price', 'description', 'mark', 'advert', 'advert2'] 
    });

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  listProducts,
  getProductById,
};
