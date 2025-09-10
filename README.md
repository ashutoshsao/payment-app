# Payment App

This is a basic payment application.

## Current Status

Both the frontend and backend of the application are implemented.

## Project Structure

The project is organized into two main directories:

*   `backend/`: Contains the Node.js backend application.
    *   `routes/`: Contains the API routes.
    *   `db.js`: Handles the database connection and schema.
    *   `config.js`: Contains configuration variables.
*   `frontend/`: Contains the React frontend application.
    *   `src/`: Contains the main source code.
        *   `components/`: Contains reusable React components.
        *   `pages/`: Contains the main pages of the application.

## Features

### Backend

*   **User Authentication**: Secure user sign-up and sign-in using JWT authentication.
*   **Password Hashing**: User passwords are hashed using bcrypt before being stored in the database, ensuring that plain-text passwords are never exposed.
*   **Fund Transfer**: Transfer funds between users. This process is implemented with database transactions to ensure atomicity and data consistency. If any step in the transfer fails, the entire transaction is rolled back.

### Frontend

*   **Component-Based Architecture**: The frontend is built with React, following a component-based architecture. This promotes code reusability and maintainability.
*   **Client-Side Routing**: The application uses `react-router-dom` for client-side routing, enabling a smooth single-page application (SPA) experience.
*   **State Management**: The application uses React's built-in state management, with props and state to manage the flow of data between components.
*   **Styling**: The application is styled with Tailwind CSS, a utility-first CSS framework that allows for rapid UI development.
*   **HTTP Requests**: The application uses `axios` to make HTTP requests to the backend API.

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

## Frontend Setup

The frontend is a React application built with Vite. To run it, follow these steps:

1.  **Navigate to the frontend directory:**
    ```bash
    cd frontend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Create a `.env` file** by copying the example file:
    ```bash
    cp .env.example .env
    ```
    This project uses [Vite's built-in environment variable support](https://vitejs.dev/guide/env-and-mode.html). You don't need to install `dotenv`.

4.  **Start the development server:**
    ```bash
    npm run dev
    ```

The frontend will be available at `http://localhost:5173`.