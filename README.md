# Chat Backend (Express.js + WebSockets + JWT)

This is the backend for a real-time chat application built using **Express.js, Socket.io, and JWT authentication**. It provides API endpoints for authentication and real-time communication using WebSockets.

---

## 🚀 Features

✅ **User Authentication** (Register/Login with JWT)\
✅ **Real-time Messaging** (WebSockets with Socket.io)\
✅ **Secure WebSocket Connections** (JWT-based Auth)\
✅ **Scalable Architecture** (Supports Redis for scaling)\
✅ **CORS-enabled** (Works with different frontends)

---

## 📌 Tech Stack

- **Node.js** + **Express.js** (Backend framework)
- **Socket.io** (WebSocket real-time communication)
- **JWT Authentication** (Secure token-based login)
- **bcrypt.js** (Password hashing)
- **CORS** (Cross-Origin Resource Sharing)
- **dotenv** (Environment variables management)

---

## 📂 Project Structure

```
chat-backend/
│── index.js        # Main entry point
│── .env            # Environment variables
│── package.json    # Dependencies
│── controllers/    # API logic
│── middleware/     # Authentication middleware
│── models/         # Data models (users, messages)
│── routes/         # API routes
│── sockets/        # WebSocket logic
│── database.js     # DB connection (optional)
│── README.md       # Documentation
```

---

## ⚡ Installation & Setup

### **1️⃣ Clone the Repository**

```sh
git clone https://github.com/your-org/chat-backend.git
cd chat-backend
```

### **2️⃣ Install Dependencies**

```sh
npm install
```

### **3️⃣ Setup Environment Variables**

Create a `.env` file and configure it:

```env
PORT=5000
JWT_SECRET=your_secret_key
```

### **4️⃣ Run the Server**

```sh
npm start    # Runs with Node.js
npm run dev  # Runs with Nodemon (for development)
```
