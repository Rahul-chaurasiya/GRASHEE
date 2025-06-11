const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

router.post('/register', authController.register);
router.post('/login', authController.login);
// Grashee: Get current user profile
router.get('/me', authMiddleware, authController.getMe);
// Grashee: Update current user profile
router.put('/me', authMiddleware, authController.updateMe);

// Protected route for creating admin users
router.post('/admin', authMiddleware, roleMiddleware('Admin'), authController.createAdmin);

// Protected route to get all admin users
router.get('/admins', authMiddleware, roleMiddleware('Admin'), authController.getAllAdmins);

// Delete user route (requires authentication)
router.delete('/users/:id', authMiddleware, roleMiddleware('Admin'), authController.deleteUser);

module.exports = router; 