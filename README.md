<p align="center">
  <img src="https://img.icons8.com/fluency/96/lock.png" width="80" />
</p>

<h1 align="center">🔐 Advanced Authentication Platform</h1>
<p align="center">A secure and scalable MERN-based authentication system with modern frontend and JWT-based backend.</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#project-structure">Project Structure</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#usage">Usage</a> •
  <a href="#contributing">Contributing</a>
</p>

---

## 📌 Overview

**Advanced Authentication Platform** is a full-stack user authentication system built with the MERN stack. It includes secure signup, login, logout, protected routes, JWT handling, and email verification features. Designed with scalability and clean architecture in mind, it’s ideal for projects needing advanced user management and session handling.

---

## ✨ Features

- 🔐 JWT-based user authentication
- 🔁 Secure refresh & access token flow
- 📧 Email verification via Nodemailer
- 🍪 Cookie-based session storage (HttpOnly)
- 🔒 Password encryption using bcrypt
- 🌍 CORS and environment-safe backend
- 🚀 Modern Vite-based frontend with React Router
- 🧼 Toast notifications with React Toastify
- 📱 Fully responsive Tailwind UI

---

## 🧱 Tech Stack

| Layer       | Technology                          |
|------------|--------------------------------------|
| Frontend   | `React 19`, `React Router 7`, `Vite` |
| Styling    | `Tailwind CSS`, `React Toastify`     |
| Backend    | `Express 5`, `Mongoose 8`, `JWT`, `bcryptjs` |
| Security   | `cookie-parser`, `dotenv`, `cors`    |
| Email      | `Nodemailer`                         |
| Database   | `MongoDB`                            |
| Deployment | Vercel (client), Render/Heroku (server) |

---

## 🗂 Project Structure
```
advanced-auth/
├── client/
│ ├── src/
│ │ ├── components/ # UI Components
│ │ ├── pages/ # Auth pages (Login, Signup, etc.)
│ │ ├── App.jsx # Routes and layout
│ │ └── main.jsx # App entry point
│ └── public/
│ └── index.html
├── server/
│ ├── controllers/ # Auth logic
│ ├── middleware/ # JWT, error handling, etc.
│ ├── models/ # MongoDB models
│ ├── routes/ # API routes
│ ├── server.js # Express setup
│ └── .env # Environment variables
```

---

## 🚀 Getting Started

Follow these steps to run the platform locally.

### 1️⃣ Clone the repo

```bash
git clone https://github.com/sushabhan878/advanced-auth.git
cd advanced-auth
```
## 2️⃣ Install dependencies
```
# For frontend
cd client
npm install

# For backend
cd ../server
npm install
```
## 3️⃣ Set up environment variables
Create a `.env` file in the `server/` directory:
````
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password
CLIENT_URL=http://localhost:5173
````
## 4️⃣ Run the app
```
# Start backend
cd server
npm run dev

# Start frontend
cd ../client
npm run dev
```

---
## 🧪 Usage
1. Navigate to http://localhost:5173
2. Register a new user
3. Verify your email (check your inbox)
4. Login and access protected pages
5. Use dev tools to inspect cookies and tokens

---
## 📦 Dependencies Summary
### @🔹 Client
```
"react": "^19.1.0",
"react-router-dom": "^7.6.1",
"axios": "^1.9.0",
"react-toastify": "^11.0.5",
"tailwindcss": "^3.4.17"
```
### @🔹 Server
```
"express": "^5.1.0",
"mongoose": "^8.15.1",
"jsonwebtoken": "^9.0.2",
"bcryptjs": "^3.0.2",
"cookie-parser": "^1.4.7",
"nodemailer": "^7.0.3",
"cors": "^2.8.5"
```

---
## 🤝 Contributing
We welcome contributions!

1. 🍴 Fork the repo
2. 🚀 Create a new branch `(git checkout -b feature/AmazingFeature)`
3. ✅ Commit your changes `(git commit -m 'Add AmazingFeature')`
4. 📤 Push to the branch `(git push origin feature/AmazingFeature)`
5. 🔁 Open a Pull Request

---
<p align="center"> <strong>🚀 Built with MERN stack • Secured with JWT • Styled with Tailwind</strong> </p>

