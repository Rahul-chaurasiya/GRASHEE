# Grashee - Shopping Application Features Documentation

## Overview
Grashee is a full-featured e-commerce application built with Node.js, Express, and MongoDB. This document outlines the features implemented in the application.

## Core Features

### 1. User Management
- **Authentication**
  - User registration with email and password
  - User login with JWT token generation
  - Role-based access control (Admin and User roles)
  - Secure password hashing using bcryptjs

### 2. Category Management
- **Admin Features**
  - Create new product categories
  - Update existing categories
  - Delete categories
  - View all categories
- **User Features**
  - View all available categories
  - Browse products by category

### 3. Product Management
- **Admin Features**
  - Create new products with:
    - Name, description, price
    - Category assignment
    - Stock management
    - Multiple image uploads
  - Update product details
  - Delete products
  - Manage product stock
- **User Features**
  - View all products
  - View products by category
  - View individual product details
  - Search products

### 4. Shopping Cart
- **Features**
  - Add products to cart
  - Update product quantities
  - Remove products from cart
  - View cart contents
  - Stock validation during cart operations
  - Persistent cart storage per user

### 5. Order Management
- **Features**
  - Place new orders
  - View order history
  - Order status tracking
  - Order cancellation
  - Order details with product information

## Technical Implementation

### Security Features
- JWT-based authentication
- Password encryption
- Role-based middleware
- Input validation using Joi
- Secure file uploads with Multer

### Database Structure
- **User Model**
  - User information
  - Authentication details
  - Role management

- **Category Model**
  - Category name
  - Description
  - Timestamps

- **Product Model**
  - Product details
  - Price and stock
  - Category reference
  - Image management
  - Timestamps

- **Cart Model**
  - User reference
  - Product items
  - Quantity management
  - Timestamps

- **Order Model**
  - User reference
  - Product details
  - Order status
  - Payment information
  - Timestamps

### API Endpoints

#### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

#### Categories
- `POST /api/categories` - Create category (Admin)
- `GET /api/categories` - Get all categories
- `PUT /api/categories/:id` - Update category (Admin)
- `DELETE /api/categories/:id` - Delete category (Admin)

#### Products
- `POST /api/products` - Create product (Admin)
- `GET /api/products` - Get all products
- `GET /api/products/category/:categoryId` - Get products by category
- `GET /api/products/:id` - Get product by ID
- `PUT /api/products/:id` - Update product (Admin)
- `DELETE /api/products/:id` - Delete product (Admin)

#### Cart
- `POST /api/cart/add` - Add item to cart
- `POST /api/cart/remove` - Remove item from cart
- `GET /api/cart` - Get user's cart

#### Orders
- `POST /api/orders` - Create new order
- `GET /api/orders` - Get user's orders
- `GET /api/orders/:id` - Get order details
- `PUT /api/orders/:id/cancel` - Cancel order

## File Structure
```
backend/
├── config/
│   └── db.js
├── controllers/
│   ├── authController.js
│   ├── categoryController.js
│   ├── productController.js
│   ├── cartController.js
│   └── orderController.js
├── middlewares/
│   ├── authMiddleware.js
│   └── roleMiddleware.js
├── models/
│   ├── User.js
│   ├── Category.js
│   ├── Product.js
│   ├── Cart.js
│   └── Order.js
├── routes/
│   ├── auth.js
│   ├── category.js
│   ├── product.js
│   ├── cart.js
│   └── order.js
├── utils/
│   └── validators.js
├── uploads/
├── app.js
└── server.js
```

## Future Enhancements
1. Payment Gateway Integration
2. Email Notifications
3. Product Reviews and Ratings
4. Wishlist Feature
5. Advanced Search and Filtering
6. Order Tracking System
7. Admin Dashboard
8. Analytics and Reporting

## Getting Started
1. Clone the repository
2. Install dependencies: `npm install`
3. Set up environment variables in `.env`
4. Start the server: `npm run dev`

## Environment Variables
```
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

## Dependencies
- Express.js - Web framework
- MongoDB - Database
- Mongoose - ODM
- JWT - Authentication
- Bcryptjs - Password hashing
- Multer - File uploads
- Joi - Input validation
- Cors - Cross-origin resource sharing
- Morgan - HTTP request logger 