const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

router.put('/categories/:id', categoryController.updateCategory);

module.exports = router;
