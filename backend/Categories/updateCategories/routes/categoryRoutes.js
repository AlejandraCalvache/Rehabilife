const express = require('express');
const router = express.Router();
const categoriesController = require('../controllers/categoriesController');

router.put('/categories/:id', categoriesController.updateCategory);

module.exports = router;
