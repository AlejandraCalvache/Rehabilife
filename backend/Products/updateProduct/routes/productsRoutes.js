const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

/**
 * @swagger
 * /products/{id}:
 *   put:
 *     summary: Actualiza un producto por ID.
 *     description: Modifica los detalles de un producto existente en la base de datos.
 *     tags:
 *       - Productos
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del producto a actualizar.
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Nuevo nombre del producto"
 *               price:
 *                 type: number
 *                 example: 29.99
 *               description:
 *                 type: string
 *                 example: "Nueva descripción del producto"
 *               mark:
 *                 type: string
 *                 example: "Marca actualizada"
 *               advert:
 *                 type: string
 *                 example: "Nueva advertencia"
 *               image_url:
 *                 type: string
 *                 example: "https://example.com/image_updated.jpg"
 *     responses:
 *       200:
 *         description: Producto actualizado correctamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Product updated successfully"
 *                 product:
 *                   type: object
 *       404:
 *         description: Producto no encontrado.
 *       500:
 *         description: Error interno del servidor.
 */

router.put('/products/:id', productsController.updateProducts);

module.exports = router;
