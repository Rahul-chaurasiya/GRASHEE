const Category = require('../models/Category');

async function createCategory({ name, description }) {
  const existing = await Category.findOne({ name });
  if (existing) {
    throw new Error('Category already exists');
  }
  return await Category.create({ name, description });
}

async function getAllCategories() {
  return await Category.find();
}

async function getCategoryById(id) {
  return await Category.findById(id);
}

async function updateCategory(id, { name, description }) {
  const category = await Category.findById(id);
  if (!category) throw new Error('Category not found');
  if (name) category.name = name;
  if (description !== undefined) category.description = description;
  await category.save();
  return category;
}

async function deleteCategory(id) {
  const category = await Category.findByIdAndDelete(id);
  if (!category) throw new Error('Category not found');
  return category;
}

module.exports = {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
}; 