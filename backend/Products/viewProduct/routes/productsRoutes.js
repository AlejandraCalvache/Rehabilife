const express = require('express');
const productsController = require('../controllers/productsController');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: API para visualizar productos
 */

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Obtener todos los productos
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: Lista de productos obtenida con éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   name:
 *                     type: string
 *                     example: "Producto 1"
 *                   price:
 *                     type: number
 *                     format: float
 *                     example: 19.99
 *                   description:
 *                     type: string
 *                     example: "Descripción del producto"
 *                   mark:
 *                     type: string
 *                     example: "Marca X"
 *                   advert:
 *                     type: string
 *                     example: "Advertencia sobre el producto"
 *                   image_url:
 *                     type: string
 *                     example: "https://example.com/image.jpg"
 *       500:
 *         description: Error interno del servidor
 */
router.get('/products', listProducts);

/**
 * @swagger
 * /api/products/{id}:
 *   get:
 *     summary: Obtener un producto por ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del producto
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Producto obtenido con éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 name:
 *                   type: string
 *                   example: "Producto 1"
 *                 price:
 *                   type: number
 *                   format: float
 *                   example: 19.99
 *                 description:
 *                   type: string
 *                   example: "Descripción del producto"
 *                 mark:
 *                   type: string
 *                   example: "Marca X"
 *                 advert:
 *                   type: string
 *                   example: "Advertencia sobre el producto"
 *                 advert2:
 *                   type: string
 *                   example: "Otra advertencia"
 *       404:
 *         description: Producto no encontrado
 *       500:
 *         description: Error interno del servidor
 */

router.get('/products', productsController.listProducts);
router.get('/products/:id', productsController.getProductById);


module.exports = router;
