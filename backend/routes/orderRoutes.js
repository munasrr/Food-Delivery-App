import express from 'express';
import {
  placeOrder,
  listOrders,
  userOrders,
  updateStatus,
  verifyOrder,
} from '../controllers/orderController.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Orders
 *   description: Order management
 */

/**
 * @swagger
 * /api/orders/place:
 *   post:
 *     summary: Place a new order
 *     tags: [Orders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *               items:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     itemId:
 *                       type: string
 *                     name:
 *                       type: string
 *                     quantity:
 *                       type: number
 *                     price:
 *                       type: number
 *               amount:
 *                 type: number
 *               address:
 *                 type: object
 *                 properties:
 *                   street:
 *                     type: string
 *                   city:
 *                     type: string
 *                   state:
 *                     type: string
 *                   zipcode:
 *                     type: string
 *                   country:
 *                     type: string
 *     responses:
 *       200:
 *         description: Order placed successfully
 */
router.post('/place', placeOrder);

/**
 * @swagger
 * /api/orders/list:
 *   get:
 *     summary: List all orders
 *     tags: [Orders]
 *     responses:
 *       200:
 *         description: List of orders
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Order'
 */
router.get('/list', listOrders);

/**
 * @swagger
 * /api/orders/user:
 *   post:
 *     summary: Get orders for a user
 *     tags: [Orders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *     responses:
 *       200:
 *         description: List of orders for the user
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Order'
 */
router.post('/user', userOrders);

/**
 * @swagger
 * /api/orders/update-status:
 *   post:
 *     summary: Update order status
 *     tags: [Orders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               orderId:
 *                 type: string
 *               status:
 *                 type: string
 *     responses:
 *       200:
 *         description: Order status updated
 */
router.post('/update-status', updateStatus);

/**
 * @swagger
 * /api/orders/verify:
 *   post:
 *     summary: Verify order payment
 *     tags: [Orders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               orderId:
 *                 type: string
 *               success:
 *                 type: string
 *     responses:
 *       200:
 *         description: Order payment verified
 */
router.post('/verify', verifyOrder);

export default router;
