
# MyMirro
fashion-platform-backend
=======
```
# MyMirro Fashion Platform - Backend API

This repository contains the backend implementation for the MyMirro fashion recommendation platform.

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- npm 

### Installation

1. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
   ```
   cp .env.my .env
   ```
   Then edit the `.env` file with your MongoDB connection string, JWT secret, etc.

4. Start the development server:
   ```
   npm run dev
   ```
   The server will start on the port specified in your `.env` file (default: 3000).

## API Documentation

### Authentication Endpoints

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Authenticate a user

### Product Endpoints

- `GET /api/products` - Get filtered list of products
- `GET /api/products/:id` - Get a single product by ID
- `GET /api/products/search` - Search products

### User Endpoints

- `GET /api/users/profile` - Get user profile (requires authentication)
- `PUT /api/users/preferences` - Update user preferences (requires authentication)

### Recommendation Endpoints

- `GET /api/recommendations` - Get personalized recommendations (requires authentication)
- `GET /api/recommendations/similar/:productId` - Get similar products

## Development

### Running Tests

```
npm test
```

### Linting

```
npm run lint
```

## Deployment

For production deployment:

```
npm run build
npm start
```
>>>>>>> abe8655 (commit)
