# Real-Time Group Chat Application

This is a full-stack real-time group chat application built with the MERN stack (MongoDB, Express, React, Node.js) and Socket.IO. It allows users to register with a username, join different chat rooms, and communicate in real-time.

## Live Demo

You can try out a live version of the application here: [https://groupchatdemo.vercel.app/](https://groupchatdemo.vercel.app/)

## Features

- **User Authentication**: Simple username-based registration.
- **Chat Rooms**: Users can see a list of available rooms and join them.
- **Real-Time Messaging**: Instant message delivery using WebSockets (Socket.IO).
- **Message History**: Previously sent messages in a room are loaded upon joining.
- **Typing Indicators**: See when another user in the room is typing a message.
- **User Presence**: Track when users join or leave a room.

## Tech Stack

**Frontend:**
- React
- React Router
- Socket.IO Client
- Axios
- Tailwind CSS

**Backend:**
- Node.js
- Express.js
- Socket.IO
- MongoDB with Mongoose
- CORS
- `dotenv` for environment variables

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v14 or newer)
- `npm` or `yarn`
- MongoDB installed and running, or a MongoDB Atlas connection string.

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/GJablo/groupchat.git
    cd groupchat
    ```

2.  **Set up the Backend (Server):**
    ```sh
    cd server
    npm install
    ```
    Create a `.env` file in the `/server` directory and add the following environment variables:
    ```env
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    ```

3.  **Set up the Frontend (Client):**
    ```sh
    cd ../client
    npm install
    ```
    The client is configured to connect to the backend API. If you are running the server on a different port, you may need to update the `BackendBaseUrl` and `APIBaseUrl` in `/client/src/services/api.js`.

### Running the Application

1.  **Start the Backend Server:**
    From the `/server` directory, run:
    ```sh
    npm start
    ```
    The server will start on the port specified in your `.env` file (e.g., `http://localhost:5000`).

2.  **Start the Frontend Development Server:**
    From the `/client` directory, run:
    ```sh
    npm start
    ```
    The React application will open in your browser, usually at `http://localhost:5173`.

## API Endpoints

The following are the main API routes available:

- `POST /api/auth/register`: Register a new user or log in an existing one.
- `GET /api/rooms`: Get a list of all chat rooms.
- `POST /api/rooms`: Create a new chat room.
- `GET /api/messages/:roomId`: Get all messages for a specific room.

---
