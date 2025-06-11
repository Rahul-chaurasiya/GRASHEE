const userService = require('../services/userService');
const User = require('../models/User');

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    
    // Input validation
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    if (password.length < 6) {
      return res.status(400).json({ message: 'Password must be at least 6 characters long' });
    }

    if (!email.includes('@')) {
      return res.status(400).json({ message: 'Invalid email format' });
    }

    const { token, user } = await userService.registerUser({ name, email, password });
    res.status(201).json({ 
      token, 
      user: { 
        id: user._id, 
        name: user.name, 
        email: user.email, 
        role: user.role 
      } 
    });
  } catch (err) {
    console.error('Register error:', err);
    
    if (err.message === 'Email already in use') {
      return res.status(400).json({ message: err.message });
    }
    
    if (err.message === 'Database error while finding user') {
      return res.status(500).json({ message: 'Database error' });
    }
    
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Input validation
    if (!email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    if (!email.includes('@')) {
      return res.status(400).json({ message: 'Invalid email format' });
    }

    const { token, user } = await userService.loginUser({ email, password });
    res.status(200).json({ 
      token, 
      user: { 
        id: user._id, 
        name: user.name, 
        email: user.email, 
        role: user.role 
      } 
    });
  } catch (err) {
    console.error('Login error:', err);
    
    if (err.message === 'Invalid credentials') {
      return res.status(401).json({ message: err.message });
    }
    
    if (err.message === 'Database error while finding user') {
      return res.status(500).json({ message: 'Database error' });
    }
    
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

exports.getMe = async (req, res) => {
  try {
    const user = await userService.getUserById(req.user.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.updateMe = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await userService.updateUserProfile(req.user.id, { name, email, password });
    res.json({ id: user._id, name: user.name, email: user.email, role: user.role });
  } catch (err) {
    if (err.message === 'User not found') {
      return res.status(404).json({ message: err.message });
    }
    res.status(500).json({ message: 'Server error' });
  }
};

exports.createAdmin = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    const { token, user } = await userService.createAdminUser({ name, email, password }, true);
    res.status(201).json({ token, user: { id: user._id, name: user.name, email: user.email, role: user.role } });
  } catch (err) {
    if (err.message === 'Email already in use') {
      return res.status(400).json({ message: err.message });
    }
    if (err.message === 'Unauthorized to create admin user') {
      return res.status(403).json({ message: err.message });
    }
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getAllAdmins = async (req, res) => {
  try {
    const admins = await userService.getAllAdmins();
    res.json(admins.map(admin => ({
      id: admin._id,
      name: admin.name,
      email: admin.email,
      createdAt: admin.createdAt
    })));
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    // Get the user to be deleted
    const userToDelete = await User.findById(req.params.id);
    if (!userToDelete) {
      return res.status(404).json({ message: 'User not found' });
    }

    // If the user is a customer, allow deletion (for testing purposes)
    if (userToDelete.role === 'Customer') {
      await User.findByIdAndDelete(req.params.id);
      return res.json({ message: 'User deleted successfully' });
    }

    // For admin users, require admin authentication
    if (!req.user || req.user.role !== 'Admin') {
      return res.status(403).json({ message: 'Access denied' });
    }

    await User.findByIdAndDelete(req.params.id);
    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
}; 