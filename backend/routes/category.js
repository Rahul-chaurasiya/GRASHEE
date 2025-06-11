const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

router.post('/', authMiddleware, roleMiddleware('Admin'), categoryController.createCategory);
router.get('/', authMiddleware, categoryController.getAllCategories);
router.put('/:id', authMiddleware, roleMiddleware('Admin'), categoryController.updateCategory);
router.delete('/:id', authMiddleware, roleMiddleware('Admin'), categoryController.deleteCategory);

module.exports = router; 