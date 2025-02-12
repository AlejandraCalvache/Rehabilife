const express = require('express');
const categoryController = require('../controllers/categoryController');

const router = express.Router();

router.get('/categories', categoryController.listCategories);
router.get('/categories/:id', categoryController.getCategoryById);

module.exports = router;
