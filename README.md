# MyMirro Fashion Platform - Backend API

This repository contains the backend implementation for the MyMirro fashion recommendation platform.

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (Local or MongoDB Atlas)
- npm (Node Package Manager)

### Installation

1. **clone the repository**  
   ```sh
   git clone https://github.com/your-username/MyMirro.git
   cd MyMirro
2.**Install dependencies**
npm install

3.**Start the development server**
npm run dev

**Deployment
1.For production deployment**
npm run build

2.**Start the production server**
npm start



```
Authentication Endpoints
POST /api/auth/register - Register a new user

POST /api/auth/login - Authenticate a user

Product Endpoints
GET /api/products - Get a filtered list of products

GET /api/products/:id - Get a single product by ID

GET /api/products/search - Search products

User Endpoints
GET /api/users/profile - Get user profile (requires authentication)

PUT /api/users/preferences - Update user preferences (requires authentication)

Recommendation Endpoints
GET /api/recommendations - Get personalized recommendations (requires authentication)

GET /api/recommendations/similar/:productId - Get similar products

```
