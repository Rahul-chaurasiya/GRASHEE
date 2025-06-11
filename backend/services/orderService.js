// Grashee: Service for order-related business logic
const Order = require('../models/Order');

// Create a new order for a user
async function createOrder(userId, products, total) {
  return await Order.create({ user: userId, products, total });
}

// Get all orders for a specific user
async function getUserOrders(userId) {
  return await Order.find({ user: userId }).populate('products.product').sort({ createdAt: -1 });
}

// Admin: Get all orders in Grashee
async function getAllOrders() {
  return await Order.find().populate('user').populate('products.product').sort({ createdAt: -1 });
}

// Grashee: Cancel an order if allowed
async function cancelOrder(orderId, userId, isAdmin) {
  const order = await Order.findById(orderId);
  if (!order) throw new Error('Order not found');
  if (!isAdmin && order.user.toString() !== userId) throw new Error('Unauthorized');
  if (!['Pending', 'Processing'].includes(order.status)) throw new Error('Order cannot be cancelled');
  order.status = 'Cancelled';
  await order.save();
  return order;
}

module.exports = {
  createOrder,
  getUserOrders,
  getAllOrders,
  cancelOrder,
}; 