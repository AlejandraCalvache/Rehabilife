const express = require('express');
const router = express.Router();
const suggestionController = require('../controllers/suggestionController');

/**
 * @swagger
 * components:
 *   schemas:
 *     Suggestion:
 *       type: object
 *       required:
 *         - suggestion
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the suggestion
 *         suggestion:
 *           type: string
 *           description: The suggestion provided by the user
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The date and time when the suggestion was created
 *       example:
 *         id: 60c72b2f5f1b2c0015a6d28c
 *         suggestion: "Add a dark mode feature."
 *         createdAt: "2023-07-11T10:20:30Z"
 */

/**
 * @swagger
 * tags:
 *   name: Suggestions
 *   description: API to manage user suggestions
 */

/**
 * @swagger
 * /suggestions:
 *   post:
 *     summary: Create a new suggestion
 *     tags: [Suggestions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Suggestion'
 *     responses:
 *       201:
 *         description: The suggestion was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Suggestion'
 *       400:
 *         description: Missing required fields
 *       500:
 *         description: Some server error
 */
router.post('/suggestions', suggestionController.createSuggestion);

/**
 * @swagger
 * /suggestions:
 *   get:
 *     summary: Get all suggestions
 *     tags: [Suggestions]
 *     responses:
 *       200:
 *         description: A list of suggestions
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Suggestion'
 *       500:
 *         description: Some server error
 */
router.get('/suggestions', suggestionController.getSuggestions);

module.exports = router;
