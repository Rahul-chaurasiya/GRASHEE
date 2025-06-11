const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Hardcoded JWT secret
const JWT_SECRET = 'grashee_super_secret_key_2024';

async function findUserByEmail(email) {
  try {
    return await User.findOne({ email });
  } catch (error) {
    console.error('Error finding user by email:', error);
    throw new Error('Database error while finding user');
  }
}

async function registerUser({ name, email, password }) {
  try {
    const existingUser = await findUserByEmail(email);
    if (existingUser) {
      throw new Error('Email already in use');
    }

    // Check if this is the first user
    const userCount = await User.countDocuments();
    const isFirstUser = userCount === 0;

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ 
      name, 
      email, 
      password: hashedPassword,
      role: isFirstUser ? 'Admin' : 'Customer'
    });

    const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, { expiresIn: '7d' });
    return { token, user };
  } catch (error) {
    console.error('Error in registerUser:', error);
    throw error;
  }
}

async function loginUser({ email, password }) {
  try {
    const user = await findUserByEmail(email);
    if (!user) {
      throw new Error('Invalid credentials');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error('Invalid credentials');
    }

    const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, { expiresIn: '7d' });
    return { token, user };
  } catch (error) {
    console.error('Error in loginUser:', error);
    throw error;
  }
}

async function getUserById(id) {
  return await User.findById(id).select('-password');
}

async function updateUserProfile(id, { name, email, password }) {
  const user = await User.findById(id);
  if (!user) throw new Error('User not found');
  if (name) user.name = name;
  if (email) user.email = email;
  if (password) user.password = await bcrypt.hash(password, 10);
  await user.save();
  return user;
}

async function createAdminUser({ name, email, password }, createdByAdmin = false) {
  const userCount = await User.countDocuments();
  const isFirstUser = userCount === 0;

  if (!isFirstUser && !createdByAdmin) {
    throw new Error('Unauthorized to create admin user');
  }

  const existingUser = await findUserByEmail(email);
  if (existingUser) {
    throw new Error('Email already in use');
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    role: 'Admin'
  });

  const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, { expiresIn: '7d' });
  return { token, user };
}

async function getAllAdmins() {
  return await User.find({ role: 'Admin' }).select('-password');
}

async function deleteUser(id) {
  return await User.findByIdAndDelete(id);
}

module.exports = {
  findUserByEmail,
  registerUser,
  loginUser,
  getUserById,
  updateUserProfile,
  createAdminUser,
  getAllAdmins,
  deleteUser
}; 