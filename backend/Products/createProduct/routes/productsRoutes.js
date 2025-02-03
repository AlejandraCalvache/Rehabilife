const express = require('express');
const { createProduct } = require('../controllers/productsController');

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       required:
 *         - name
 *         - price
 *       properties:
 *         id:
 *           type: integer
 *           description: ID autoincremental del producto
 *         name:
 *           type: string
 *           description: Nombre del producto
 *         description:
 *           type: string
 *           description: Descripción del producto
 *         price:
 *           type: number
 *           format: float
 *           description: Precio del producto
 *         mark:
 *           type: string
 *           description: Marca del producto
 *         advert:
 *           type: string
 *           description: Advertencias del producto
 *         image_url:
 *           type: string
 *           description: URL de la imagen del producto
 *       example:
 *         id: 1
 *         name: "Producto de prueba"
 *         description: "Descripción del producto"
 *         price: 19.99
 *         mark: "Marca X"
 *         advert: "No apto para menores"
 *         image_url: "https://example.com/image.jpg"
 */

/**
 * @swagger
 * /products:
 *   post:
 *     summary: Crea un nuevo producto
 *     description: Agrega un nuevo producto a la base de datos.
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       201:
 *         description: Producto creado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       500:
 *         description: Error del servidor
 */
router.post('/products', createProduct);

module.exports = router;
