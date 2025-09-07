# Payment App

This is a basic payment application.

## Current Status

Currently, only the backend of the application is implemented. The frontend is not yet developed.

## Backend Setup

The backend is a Node.js application. To run it, follow these steps:

1.  **Navigate to the backend directory:**
    ```bash
    cd backend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Create a `.env` file** with the following variables:
    ```
    JWT_SECRET=<your_jwt_secret>
    MONGO_URL=<your_mongo_db_url>
    ```

4.  **Start the server:**
    ```bash
    node index.js
    ```

The server will start on the port specified in `config.js`.
