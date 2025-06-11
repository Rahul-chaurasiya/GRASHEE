// Grashee: Order routes for placing and viewing orders
const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

// Place a new order (Grashee customer)
router.post('/', authMiddleware, orderController.createOrder);
router.get('/user', authMiddleware, orderController.getUserOrders);
router.get('/', authMiddleware, roleMiddleware('Admin'), orderController.getAllOrders);
// Grashee: Cancel order (user or admin)
router.patch('/:id/cancel', authMiddleware, orderController.cancelOrder);

module.exports = router; 