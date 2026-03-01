# Web Environment Programming II (ISW-711)

Repository for delivering course workshops and labs.

## Course Information

* **Instructor:** [Bladimir Arroyo](https://github.com/barroyo)
* **Student Name:** Alvaro Victor Zamora
* **Semester:** 2026 / 1st semester

---

## Content

| Week   | Description                                                                                                                                  | Link                    |
| :----- | :------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------- |
| Week 1 | **Node.js Introduction:** Setup of a REST API using Express and basic routing.                                                               | [View folder](./week-1) |
| Week 2 | **Full CRUD & MongoDB Atlas:** Integration with cloud database and frontend management.                                                      | [View folder](./week-2) |
| Week 3 | **Decoupled Architecture & Relational Integrity:** Separation of Backend and Frontend, relational CRUD operations, and data integrity rules. | [View folder](./week-3) |
| Week 4 | **Authentication & Security (JWT):** Implementation of User Registration, Login, Password Hashing (Bcrypt), and Protected Routes using JWT.    | [View folder](./week-4) |

---

## Tech Stack

### Backend

* Node.js
* Express
* Mongoose
* **jsonwebtoken (JWT)** - Security tokens.
* **bcryptjs** - Password encryption.

### Database

* MongoDB Atlas

### Frontend

* HTML5
* CSS3
* JavaScript (Vanilla)
* **Session Storage** - Client-side token management.

---

## How to use this repository

Each folder represents a specific week of the course. To run any of the projects:

1. Navigate to the `server` folder of the specific week.
2. Run `npm install`.
3. Configure the `.env` file with your database credentials.
4. Start the server with `node index.js`.
5. Open the corresponding `public/index.html` file using a local server (like Live Server).
