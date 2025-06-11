const Cart = require('../models/Cart');

async function getCartByUser(userId) {
  return await Cart.findOne({ user: userId }).populate('products.product');
}

async function addToCart(userId, productId, quantity) {
  let cart = await Cart.findOne({ user: userId });
  if (!cart) {
    cart = await Cart.create({ user: userId, products: [{ product: productId, quantity }] });
    return cart;
  }
  const productIndex = cart.products.findIndex(p => p.product.toString() === productId);
  if (productIndex > -1) {
    cart.products[productIndex].quantity += quantity;
  } else {
    cart.products.push({ product: productId, quantity });
  }
  await cart.save();
  return cart;
}

async function removeFromCart(userId, productId) {
  const cart = await Cart.findOne({ user: userId });
  if (!cart) throw new Error('Cart not found');
  cart.products = cart.products.filter(p => p.product.toString() !== productId);
  await cart.save();
  return cart;
}

module.exports = {
  getCartByUser,
  addToCart,
  removeFromCart,
}; 