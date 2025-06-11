const Product = require('../models/Product');

async function createProduct({ name, description, price, category, images, stock }) {
  return await Product.create({ name, description, price, category, images, stock });
}

async function getAllProducts({ page = 1, limit = 10, search = '' }) {
  const query = search ? { name: { $regex: search, $options: 'i' } } : {};
  const products = await Product.find(query)
    .skip((page - 1) * limit)
    .limit(limit)
    .populate('category');
  const total = await Product.countDocuments(query);
  return { products, total, page, limit };
}

async function getProductsByCategory(categoryId) {
  return await Product.find({ category: categoryId }).populate('category');
}

async function getProductById(id) {
  return await Product.findById(id).populate('category');
}

async function updateProduct(id, data) {
  const product = await Product.findByIdAndUpdate(id, data, { new: true });
  if (!product) throw new Error('Product not found');
  return product;
}

async function deleteProduct(id) {
  const product = await Product.findByIdAndDelete(id);
  if (!product) throw new Error('Product not found');
  return product;
}

module.exports = {
  createProduct,
  getAllProducts,
  getProductsByCategory,
  getProductById,
  updateProduct,
  deleteProduct,
}; 