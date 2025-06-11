// Grashee: Controller for order endpoints
const orderService = require('../services/orderService');

// Create a new order for the logged-in user
exports.createOrder = async (req, res) => {
  try {
    const { products, total } = req.body;
    if (!products || !Array.isArray(products) || products.length === 0 || !total) {
      return res.status(400).json({ message: 'Products and total are required' });
    }
    const order = await orderService.createOrder(req.user.id, products, total);
    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ message: 'Grashee server error' });
  }
};

// Get all orders for the logged-in user
exports.getUserOrders = async (req, res) => {
  try {
    const orders = await orderService.getUserOrders(req.user.id);
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: 'Grashee server error' });
  }
};

// Admin: Get all orders in Grashee
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await orderService.getAllOrders();
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: 'Grashee server error' });
  }
};

// Grashee: Cancel an order (user or admin)
exports.cancelOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const isAdmin = req.user.role === 'Admin';
    const order = await orderService.cancelOrder(id, req.user.id, isAdmin);
    res.json({ message: 'Order cancelled', order });
  } catch (err) {
    if (err.message === 'Order not found') {
      return res.status(404).json({ message: err.message });
    }
    if (err.message === 'Unauthorized') {
      return res.status(403).json({ message: err.message });
    }
    if (err.message === 'Order cannot be cancelled') {
      return res.status(400).json({ message: err.message });
    }
    res.status(500).json({ message: 'Grashee server error' });
  }
}; 