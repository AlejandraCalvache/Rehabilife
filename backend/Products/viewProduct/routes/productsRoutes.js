const express = require('express');
const productsController = require('../controllers/productsController');
const router = express.Router();


/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Devuelve una lista de productos
 *     tags: [Snacks]
 *     responses:
 *       200:
 *         description: Lista de productsos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: ID del productos
 *                   name:
 *                     type: string
 *                     description: Nombre del producto
 *                   description:
 *                     type: string
 *                     description: Descripción del producto
 *                   price:
 *                     type: number
 *                     format: float
 *                     description: Precio del producto
 *                   mark:
 *                     type: string
 *                     description: Marca del producto
 *                   advert:
 *                     type: string
 *                     description: Advertencia del producto
 *       500:
 *         description: Error al leer los datos de los productos
 */
router.get('/products', productsController.listProducts);
router.get('/products/:id', productsController.getProductById);


module.exports = router;
