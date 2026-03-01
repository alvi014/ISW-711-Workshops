# Week 4: Authentication & Security (JWT)

## Objective

Implement a robust security layer using JSON Web Tokens (JWT). This week's focus is on protecting API resources, managing user sessions via Session Storage, and ensuring that only authenticated users can access or modify the management system's data.

---

## Technologies Used

### Backend
- **Node.js & Express** for the REST API.
- **Mongoose** for Data Modeling.
- **jsonwebtoken (JWT)** for generating and verifying secure tokens.
- **bcryptjs** for hashing and protecting user passwords.
- **Middleware** for route protection and authorization.

### Frontend
- **HTML5, CSS3, & Vanilla JS.**
- **Fetch API** with custom headers for Authorization.
- **Session Storage** for client-side token management.

---

## Features Implemented

- [x] **User Authentication:** Registration (Name, LastName, Email, Password) and Login system.
- [x] **Password Hashing:** Use of `bcrypt` to encrypt passwords before saving them to MongoDB.
- [x] **JWT Token Generation:** Secure token creation upon successful login (`/auth/token`).
- [x] **Protected Routes:** All CRUD operations for Professors and Courses now require a valid Bearer Token.
- [x] **Session Management:** Tokens are stored in `sessionStorage` and cleared upon Logout.
- [x] **Frontend Interceptors:** Automated redirection to `login.html` if no valid token is present in the session.

---

## Project Structure

```
week-4
├── public
│   ├── login.html             # New: Register & Login forms
│   ├── index.html             # Protected Dashboard
│   ├── create-course.html     # Protected Form
│   ├── create-professor.html  # Protected Form
│   └── style.css
├── server
│   ├── controllers
│   │   ├── auth.controller.js # New: Login/Register logic
│   │   ├── course.controller.js
│   │   └── professor.controller.js
│   ├── middleware             # New: Auth verification layer
│   │   └── auth.js
│   ├── models
│   │   ├── user.model.js      # New: User Schema
│   │   ├── course.model.js
│   │   └── professor.model.js
│   ├── routes
│   │   ├── auth.routes.js     # New: Auth endpoints
│   │   ├── course.routes.js
│   │   └── professor.routes.js
│   └── index.js
└── README.md
```

---

## How to Run Locally

### 1. Backend (Server)

1. Navigate to: `cd week-4/server`
2. Install dependencies: `npm install jsonwebtoken bcryptjs`
3. Update `.env`: Add `JWT_SECRET=your_secret_key`
4. Run: `node index.js`

### 2. Frontend (Client)

1. Serve the `public` folder using **Live Server**.
2. The browser will automatically redirect you to `login.html`.
3. Register a new user first, then Login to access the system.

---

## API Endpoints Summary

### Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/auth/register` | Register a new user (Hashed pass) |
| POST | `/auth/token` | Login & receive JWT token |

### Management (Protected)

| Method | Endpoint | Requirement |
|--------|----------|-------------|
| GET | `/courses` | Header: `Authorization` |
| POST | `/courses` | Header: `Authorization` |
| PUT | `/professors/:id` | Header: `Authorization` |
| DELETE | `/professors/:id` | Header: `Authorization` |

---

## Security Notes

> **Integrity Rule:** If a user is not logged in, the dashboard will display zero data because the backend rejects any request without a valid token (`401 Unauthorized`).