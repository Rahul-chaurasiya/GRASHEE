# Grashee - E-commerce Platform

Grashee is a full-stack e-commerce platform built with the MERN stack (MongoDB, Express.js, React.js, Node.js). It provides a complete solution for online shopping with features for both customers and administrators.

## Features

### Customer Features
- User registration and authentication
- Product browsing and searching
- Category-based product filtering
- Shopping cart management
- Order placement and tracking
- User profile management
- Product reviews and ratings

### Admin Features
- Dashboard with sales analytics
- Product management (CRUD operations)
- Category management
- Order management
- User management
- Inventory tracking
- Sales reports

## Tech Stack

### Frontend
- React.js
- Redux for state management
- Material-UI for components
- Axios for API calls
- React Router for navigation

### Backend
- Node.js with Express.js
- MongoDB with Mongoose
- JWT for authentication
- bcrypt for password hashing
- Multer for file uploads

## API Documentation

### Authentication Endpoints

#### Register User
```
POST /api/auth/register
Content-Type: application/json

{
  "name": "string",
  "email": "string",
  "password": "string"
}

Response:
{
  "token": "string",
  "user": {
    "id": "string",
    "name": "string",
    "email": "string",
    "role": "string"
  }
}
```

#### Login User
```
POST /api/auth/login
Content-Type: application/json

{
  "email": "string",
  "password": "string"
}

Response:
{
  "token": "string",
  "user": {
    "id": "string",
    "name": "string",
    "email": "string",
    "role": "string"
  }
}
```

### Product Endpoints

#### Get All Products
```
GET /api/products
Query Parameters:
- page: number (default: 1)
- limit: number (default: 10)
- category: string (optional)
- search: string (optional)
- sort: string (optional, e.g., "price", "-price")

Response:
{
  "products": [
    {
      "id": "string",
      "name": "string",
      "description": "string",
      "price": number,
      "category": "string",
      "image": "string",
      "stock": number
    }
  ],
  "total": number,
  "page": number,
  "pages": number
}
```

#### Get Single Product
```
GET /api/products/:id

Response:
{
  "id": "string",
  "name": "string",
  "description": "string",
  "price": number,
  "category": "string",
  "image": "string",
  "stock": number,
  "reviews": [
    {
      "user": "string",
      "rating": number,
      "comment": "string"
    }
  ]
}
```

### Category Endpoints

#### Get All Categories
```
GET /api/categories

Response:
[
  {
    "id": "string",
    "name": "string",
    "description": "string"
  }
]
```

### Order Endpoints

#### Create Order
```
POST /api/orders
Authorization: Bearer <token>
Content-Type: application/json

{
  "items": [
    {
      "product": "string",
      "quantity": number
    }
  ],
  "shippingAddress": {
    "address": "string",
    "city": "string",
    "postalCode": "string",
    "country": "string"
  }
}

Response:
{
  "id": "string",
  "items": [...],
  "total": number,
  "status": "string",
  "shippingAddress": {...}
}
```

#### Get User Orders
```
GET /api/orders
Authorization: Bearer <token>

Response:
[
  {
    "id": "string",
    "items": [...],
    "total": number,
    "status": "string",
    "createdAt": "string"
  }
]
```

## Postman Collection

The API endpoints are available in the Postman collection. Import the following collection to test the API:

```json
{
  "info": {
    "name": "Grashee API",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
  },
  "item": [
    {
      "name": "Authentication",
      "item": [
        {
          "name": "Register",
          "request": {
            "method": "POST",
            "url": "{{base_url}}/api/auth/register",
            "body": {
              "mode": "raw",
              "raw": "{\n  \"name\": \"Test User\",\n  \"email\": \"test@example.com\",\n  \"password\": \"password123\"\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            }
          }
        },
        {
          "name": "Login",
          "request": {
            "method": "POST",
            "url": "{{base_url}}/api/auth/login",
            "body": {
              "mode": "raw",
              "raw": "{\n  \"email\": \"test@example.com\",\n  \"password\": \"password123\"\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            }
          }
        }
      ]
    }
  ]
}
```

## Setup Instructions

1. Clone the repository:
```bash
git clone https://github.com/yourusername/grashee.git
cd grashee
```

2. Install dependencies:
```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

3. Configure environment variables:
   - Create a `.env` file in the backend directory
   - Add the following variables:
     ```
     JWT_SECRET=your_jwt_secret
     MONGO_URI=your_mongodb_uri
     PORT=5000
     ```

4. Start the development servers:
```bash
# Start backend server
cd backend
npm run dev

# Start frontend server
cd frontend
npm start
```

5. Access the application:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 