const categoryService = require('../services/categoryService');

exports.createCategory = async (req, res) => {
  try {
    const { name, description } = req.body;
    if (!name) return res.status(400).json({ message: 'Name is required' });
    const category = await categoryService.createCategory({ name, description });
    res.status(201).json(category);
  } catch (err) {
    if (err.message === 'Category already exists') {
      return res.status(400).json({ message: err.message });
    }
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getAllCategories = async (req, res) => {
  try {
    const categories = await categoryService.getAllCategories();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;
    const category = await categoryService.updateCategory(id, { name, description });
    res.json(category);
  } catch (err) {
    if (err.message === 'Category not found') {
      return res.status(404).json({ message: err.message });
    }
    res.status(500).json({ message: 'Server error' });
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    await categoryService.deleteCategory(id);
    res.json({ message: 'Category deleted' });
  } catch (err) {
    if (err.message === 'Category not found') {
      return res.status(404).json({ message: err.message });
    }
    res.status(500).json({ message: 'Server error' });
  }
}; 