# AUTTH_SERVICE

## Overview

AUTTH_SERVICE is a Node.js-based authentication service designed to handle user registration, login, role management, and authentication tasks. It utilizes Express for server-side operations, Sequelize as an ORM for database management, and JWT (JSON Web Tokens) for secure authentication.

## Features

- **User Registration**: New users can sign up by providing their credentials, which are securely stored in the database.
- **User Login**: Existing users can log in with their credentials and receive a JWT for authenticated requests.
- **Role Management**: The service includes role-based access control (RBAC), allowing for the assignment of roles (e.g., admin, user) to different users.
- **Token-Based Authentication**: Uses JWT for secure, stateless user authentication across API requests.
- **Input Validation**: Validates request data to ensure correctness and security.
- **Error Handling**: Comprehensive error handling with user-friendly messages and appropriate HTTP status codes.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Database Setup](#database-setup)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install and set up the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/rohit83r/AUTTH_SERVICE.git
   cd AUTTH_SERVICE
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

## Configuration

Create a `.env` file in the root directory of the project to store environment variables. Here is an example of what the `.env` file might include:

```env
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=password
DB_NAME=auth_service
JWT_SECRET=your_jwt_secret_key
```

Replace the placeholders with your actual database credentials and desired JWT secret.

## Database Setup

Ensure that your database is set up and running. The service uses Sequelize for ORM, and the following commands can be used to manage the database:

1. **Run migrations**:
   ```bash
   npx sequelize-cli db:migrate
   ```

2. **Seed the database** (optional):
   ```bash
   npx sequelize-cli db:seed:all
   ```

This will create the necessary tables (`User`, `Role`) and seed initial roles into the database.

## Running the Application

To start the server, use the following command:

```bash
npm start
```

The server will start on the port specified in the `.env` file (default is 3000). The API can then be accessed at `http://localhost:3000`.

## API Endpoints

Here is a list of the main API endpoints:

### **Authentication Endpoints**

- **POST `/api/v1/register`**
  - Registers a new user.
  - **Request Body**:
    ```json
    {
      "email": "user@example.com",
      "password": "securepassword",
      "role": "user"
    }
    ```

- **POST `/api/v1/login`**
  - Logs in an existing user and returns a JWT token.
  - **Request Body**:
    ```json
    {
      "email": "user@example.com",
      "password": "securepassword"
    }
    ```

- **GET `/api/v1/profile`**
  - Retrieves the authenticated user's profile.
  - **Headers**:
    ```json
    {
      "Authorization": "Bearer <JWT_TOKEN>"
    }
    ```

### **Role Management Endpoints**

- **GET `/api/v1/roles`**
  - Retrieves a list of all roles.
  - **Headers**:
    ```json
    {
      "Authorization": "Bearer <JWT_TOKEN>"
    }
    ```

## Project Structure

Here's a high-level overview of the project's structure:

```
AUTTH_SERVICE/
├── src/
│   ├── config/
│   │   └── serverConfig.js           # Server configuration
│   ├── controllers/
│   │   └── user-controller.js        # User-related controllers
│   ├── middlewares/
│   │   ├── auth-request-validators.js # Request validation middleware
│   │   └── index.js                  # Middleware aggregator
│   ├── migrations/
│   │   ├── 20240805064541-create-user.js  # User migration
│   │   └── 20240806072756-create-role.js  # Role migration
│   ├── models/
│   │   ├── index.js                  # Model aggregator and DB connection
│   │   ├── user.js                   # User model definition
│   │   └── role.js                   # Role model definition
│   ├── repository/
│   │   └── user-repository.js        # User data access layer
│   ├── routes/
│   │   ├── index.js                  # Main routing file
│   │   └── v1/                       # Version 1 API routes
│   │       └── index.js
│   ├── seeders/
│   │   └── 20240806074150-add-roles.js   # Seeder for roles
│   ├── services/
│   │   └── user-service.js           # User-related business logic
│   ├── utils/
│   │   ├── client-error.js           # Client error classes
│   │   ├── error-handler.js          # Central error handling
│   │   └── validation-error.js       # Validation error handling
│   └── index.js                      # Entry point of the application
├── .gitignore                        # Git ignore file
├── README.md                         # Project documentation
├── package.json                      # Node.js dependencies and scripts
└── package-lock.json                 # Dependency lock file
```

## Contributing

Contributions are welcome! If you have any suggestions or improvements, feel free to open an issue or submit a pull request.

### Steps to Contribute

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.
