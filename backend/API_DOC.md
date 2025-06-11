# Grashee Shopping Application Backend API Documentation

---

## Admin Features Overview

### 1. User Management (Admin Only)
- Create new admin users
- View all admin users
- Delete users
- Manage user roles

### 2. Category Management (Admin Only)
- Create categories
- Update categories
- Delete categories
- Manage category hierarchy

### 3. Product Management (Admin Only)
- Create products
- Update products
- Delete products
- Manage product images
- Update product stock
- Set product prices

### 4. Order Management (Admin Only)
- View all orders
- Manage order statuses
- Process orders
- View order analytics

---

## 1. Authentication & User Module

### Register (Customer)
- **POST** `/api/auth/register`
- **Description:** Register a new customer. The first user to register will automatically become an admin.
- **Body:**
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "yourpassword"
  }
  ```
- **Response:**
  ```json
  {
    "token": "<jwt>",
    "user": { 
      "id": "...", 
      "name": "...", 
      "email": "...", 
      "role": "Customer" // or "Admin" if first user
    }
  }
  ```

### Create Admin User (Admin Only)
- **POST** `/api/auth/admin`
- **Description:** Create a new admin user (requires existing admin authentication)
- **Headers:** `Authorization: Bearer <admin-jwt>`
- **Body:**
  ```json
  {
    "name": "Admin User",
    "email": "admin@example.com",
    "password": "adminpassword"
  }
  ```
- **Response:**
  ```json
  {
    "token": "<jwt>",
    "user": { 
      "id": "...", 
      "name": "...", 
      "email": "...", 
      "role": "Admin" 
    }
  }
  ```

### Get All Admin Users (Admin Only)
- **GET** `/api/auth/admins`
- **Description:** Get list of all admin users (requires admin authentication)
- **Headers:** `Authorization: Bearer <admin-jwt>`
- **Response:**
  ```json
  [
    {
      "id": "...",
      "name": "Admin User",
      "email": "admin@example.com",
      "createdAt": "2025-03-21T10:00:00.000Z"
    }
  ]
  ```

### Delete User (Admin Only)
- **DELETE** `/api/auth/users/:id`
- **Description:** Delete a user (requires admin authentication)
- **Headers:** `Authorization: Bearer <admin-jwt>`
- **Response:**
  ```json
  {
    "message": "User deleted successfully"
  }
  ```

### Login
- **POST** `/api/auth/login`
- **Body:**
  ```json
  {
    "email": "john@example.com",
    "password": "yourpassword"
  }
  ```
- **Response:**
  ```json
  {
    "token": "<jwt>",
    "user": { 
      "id": "...", 
      "name": "...", 
      "email": "...", 
      "role": "Customer/Admin" 
    }
  }
  ```

### Get My Profile
- **GET** `/api/auth/me`
- **Headers:** `Authorization: Bearer <jwt>`
- **Response:**
  ```json
  {
    "_id": "...",
    "name": "...",
    "email": "...",
    "role": "Customer/Admin",
    "createdAt": "..."
  }
  ```

### Update My Profile
- **PUT** `/api/auth/me`
- **Headers:** `Authorization: Bearer <jwt>`
- **Body:** (any or all fields)
  ```json
  {
    "name": "New Name",
    "email": "newemail@example.com",
    "password": "newpassword"
  }
  ```
- **Response:**
  ```json
  {
    "id": "...",
    "name": "...",
    "email": "...",
    "role": "Customer/Admin"
  }
  ```

---

## 2. Category Module (Admin Only)

### Create Category
- **POST** `/api/categories/`
- **Headers:** `Authorization: Bearer <admin-jwt>`
- **Body:**
  ```json
  {
    "name": "Electronics",
    "description": "All electronic items"
  }
  ```
- **Response:** Category object

### Get All Categories
- **GET** `/api/categories/`
- **Headers:** `Authorization: Bearer <jwt>`
- **Response:** Array of categories

### Update Category
- **PUT** `/api/categories/:id`
- **Headers:** `Authorization: Bearer <admin-jwt>`
- **Body:**
  ```json
  {
    "name": "Updated Electronics",
    "description": "Updated description"
  }
  ```
- **Response:** Updated category object

### Delete Category
- **DELETE** `/api/categories/:id`
- **Headers:** `Authorization: Bearer <admin-jwt>`
- **Response:** Success message

---

## 3. Product Module (Admin Only)

### Create Product
- **POST** `/api/products/`
- **Headers:** `Authorization: Bearer <admin-jwt>`
- **Body:** (multipart/form-data)
  ```
  name: "Smartphone"
  description: "Latest model smartphone"
  price: 999.99
  stock: 100
  category: "category_id"
  images: [file1, file2, ...]
  ```
- **Response:** Product object

### Get All Products
- **GET** `/api/products/`
- **Headers:** `Authorization: Bearer <jwt>`
- **Response:** Array of products

### Get Products by Category
- **GET** `/api/products/category/:categoryId`
- **Headers:** `Authorization: Bearer <jwt>`
- **Response:** Array of products in category

### Get Product by ID
- **GET** `/api/products/:id`
- **Headers:** `Authorization: Bearer <jwt>`
- **Response:** Product object

### Update Product
- **PUT** `/api/products/:id`
- **Headers:** `Authorization: Bearer <admin-jwt>`
- **Body:** (multipart/form-data)
  ```
  name: "Updated Smartphone"
  description: "Updated description"
  price: 899.99
  stock: 50
  category: "category_id"
  images: [file1, file2, ...]
  ```
- **Response:** Updated product object

### Delete Product
- **DELETE** `/api/products/:id`
- **Headers:** `Authorization: Bearer <admin-jwt>`
- **Response:** Success message

---

## 4. Order Module

### Create Order
- **POST** `/api/orders`
- **Headers:** `Authorization: Bearer <jwt>`
- **Body:**
  ```json
  {
    "products": [
      {
        "productId": "product_id",
        "quantity": 2
      }
    ],
    "total": 1999.98
  }
  ```
- **Response:** Order object

### Get User Orders
- **GET** `/api/orders`
- **Headers:** `Authorization: Bearer <jwt>`
- **Response:** Array of user's orders

### Get Order Details
- **GET** `/api/orders/:id`
- **Headers:** `Authorization: Bearer <jwt>`
- **Response:** Order object

### Cancel Order
- **PUT** `/api/orders/:id/cancel`
- **Headers:** `Authorization: Bearer <jwt>`
- **Response:** Updated order object

### Get All Orders (Admin Only)
- **GET** `/api/orders/all`
- **Headers:** `Authorization: Bearer <admin-jwt>`
- **Response:** Array of all orders

---

## 6. Security & Extra Features

- All sensitive routes require JWT in the `Authorization` header.
- Admin-only routes require a user with the `Admin` role.
- Passwords are hashed with bcrypt.
- Rate limiting and input validation are applied to sensitive endpoints.
- Product image uploads use Multer and are stored in `/uploads`.
- Pagination and search are available for product listings.

---

## 7. Future Enhancements (Planned)
- Wishlist, ratings/reviews, payment integration, email notifications, inventory alerts, order status tracking, invoice generation, and more.

---

**For any questions or to contribute, contact the Grashee backend team.** 