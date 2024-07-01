import express from 'express';
import {
  addToCart,
  removeFromCart,
  getCart,
} from '../controllers/cartController.js';

const router = express.Router();

/**
 * @swagger
 * /api/carts/add:
 *   post:
 *     summary: Add item to cart
 *     tags: [Cart]
 *     responses:
 *       200:
 *         description: Item added to cart
 */
router.post('/add', addToCart);

/**
 * @swagger
 * /api/carts/remove:
 *   post:
 *     summary: Remove item from cart
 *     tags: [Cart]
 *     responses:
 *       200:
 *         description: Item removed from cart
 */
router.post('/remove', removeFromCart);

/**
 * @swagger
 * /api/carts:
 *   get:
 *     summary: Get user cart
 *     tags: [Cart]
 *     responses:
 *       200:
 *         description: User cart data
 */
router.get('/', getCart);

export default router;
