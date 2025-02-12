const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

router.delete('/categories/:id', categoryController.deleteCategory);

module.exports = router;