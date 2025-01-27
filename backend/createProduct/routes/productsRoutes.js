const express = require('express');
const { createProduct } = require('../controllers/productsController');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: API to products
 */

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
 *           description: ID del product
 *         name:
 *           type: string
 *           description: Nombre del product
 *         description:
 *           type: string
 *           description: Descripción del product
 *         price:
 *           type: number
 *           format: float
 *           description: Precio del product
 *         mark:
 *           type: string
 *           description: Marca del product
 *         advert:
 *           type: string
 *           description: Advertencia del product
 *         image_url:
 *           type: string
 *           description: Link de la imagen subida en AWS S3
 *       example:
 *         id: 1
 *         name: Pelotas anti-éstres
 *         description: Pelota de gel para el éstres
 *         price: 5.00
 *         mark: Marca A
 *         advert: Mantener lejos de objetos infamables
 *         image_url: Link de la imagen
 */

/**
 * @swagger
 * /product:
 *   post:
 *     summary: Crear un nuevo product
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       201:
 *         description: El product fue creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       500:
 *         description: Error del servidor
 */
router.post('/products', createProduct);

module.exports = router;
