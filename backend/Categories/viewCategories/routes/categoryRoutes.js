const express = require('express');
const categoriesController = require('../controllers/categoryController');

const router = express.Router();

router.get('/categories', categoriesController.listCategories);
router.get('/categories/:id', categoriesController.getCategoryById);

module.exports = router;
