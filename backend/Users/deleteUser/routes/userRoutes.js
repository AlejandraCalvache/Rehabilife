const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Remove the user by id
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The user id
 *     responses:
 *       204:
 *         description: The user was deleted
 *       404:
 *         description: The user was not found
 *       500:
 *         description: Some server error
 */
router.delete('/users/:id', userController.deleteUser);

module.exports = router;
