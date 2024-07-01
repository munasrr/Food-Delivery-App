import express from 'express';
import {
  listFood,
  addFood,
  removeFood,
  updateFood,
  getCategories,
} from '../controllers/foodController.js';
import upload from '../middleware/uploadMiddleware.js';

const router = express.Router();

// Serve static files from the "uploads" directory
router.use('/uploads', express.static('uploads'));

/**
 * @swagger
 * /api/foods:
 *   get:
 *     summary: Get the list of all foods
 *     tags: [Foods]
 *     responses:
 *       200:
 *         description: The list of foods
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Food'
 */
router.get('/', listFood);

/**
 * @swagger
 * /api/foods/add:
 *   post:
 *     summary: Add a new food item
 *     tags: [Foods]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *               category:
 *                 type: string
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Food item added
 *       500:
 *         description: Error adding food item
 */
router.post('/add', upload.single('image'), addFood);

/**
 * @swagger
 * /api/foods/remove:
 *   delete:
 *     summary: Remove a food item
 *     tags: [Foods]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *     responses:
 *       200:
 *         description: Food item removed
 *       500:
 *         description: Error removing food item
 */
router.delete('/:id', removeFood);

/**
 * @swagger
 * /api/foods/update/{id}:
 *   put:
 *     summary: Update a food item
 *     tags: [Foods]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The food item ID
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *               category:
 *                 type: string
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Food item updated
 *       500:
 *         description: Error updating food item
 */
router.put('/update/:id', upload.single('image'), updateFood);

router.get('/categories', getCategories);

export default router;
