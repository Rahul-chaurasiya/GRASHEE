const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');
const multer = require('multer');
const path = require('path');

// Multer setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../uploads'));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage });

router.post('/', authMiddleware, roleMiddleware('Admin'), upload.array('images', 10), productController.createProduct);
router.get('/', authMiddleware, productController.getAllProducts);
router.get('/category/:categoryId', authMiddleware, productController.getProductsByCategory);
router.get('/:id', authMiddleware, productController.getProductById);
router.put('/:id', authMiddleware, roleMiddleware('Admin'), upload.array('images', 10), productController.updateProduct);
router.delete('/:id', authMiddleware, roleMiddleware('Admin'), productController.deleteProduct);

module.exports = router; 