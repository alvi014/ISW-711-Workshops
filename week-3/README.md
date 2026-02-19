# Week 3: Decoupled Architecture & Relational Integrity

## Objective

Transition from a monolithic structure to a **Decoupled Architecture**, separating the Backend (API) from the Frontend (Client).

Implement advanced CRUD operations, relational data management between Professors and Courses, and data integrity rules.

---

## Technologies Used

### Backend

* **Node.js & Express** for the REST API and routing.
* **Mongoose** for Object Data Modeling (ODM) and relational population.
* **MongoDB Atlas** as the cloud database provider.
* **CORS Middleware** to enable cross-origin communication.

### Frontend

* **HTML5**
* **CSS3**
* **JavaScript (Vanilla)**

---

## Features Implemented

* [x] **Decoupled Architecture:** Backend runs on port `4000` while the Frontend is served independently (e.g., Live Server on port `5500`).
* [x] **CORS Configuration:** Enabled to allow communication between different origins.
* [x] **Professor CRUD:** Full management of professors including Name, Last Name, ID (Cédula), and Age.
* [x] **Course Updates:** Courses can update their assigned professor using the professor’s Cédula, automatically resolved to MongoDB `ObjectId`.
* [x] **Data Population:** Use of `.populate()` to display professor names in course listings instead of raw IDs.
* [x] **Referential Integrity:** Prevention of professor deletion if assigned to one or more courses.

---

## Project Structure

```
week-3
├── public
│   ├── create-course.html
│   ├── create-professor.html
│   ├── index.html
│   └── style.css
├── server
│   ├── controllers
│   │   ├── course.controller.js
│   │   └── professor.controller.js
│   ├── models
│   │   ├── course.model.js
│   │   └── professor.model.js
│   ├── routes
│   │   ├── course.routes.js
│   │   └── professor.routes.js
│   ├── .gitignore
│   └── index.js
└── README.md
```

---

## How to run locally

### Backend (Server)

1. Navigate to the server folder:

   ```
   cd week-3/server
   ```
2. Install dependencies:

   ```
   npm install
   ```
3. Create a `.env` file with your `MONGO_URI` and `PORT`.
4. Run:

   ```
   node index.js
   ```

---

### Frontend (Client)

Serve the frontend using an independent server such as Live Server (VS Code extension).

Open:

```
/public/index.html
```

Ensure the frontend URL differs from the API URL (e.g., `http://127.0.0.1:5500`).

---

## API Endpoints Summary

### Courses

| Method | Endpoint       | Description                                  |
| ------ | -------------- | -------------------------------------------- |
| GET    | `/courses`     | List all courses with professor details      |
| PUT    | `/courses/:id` | Update course (resolves professor by Cédula) |

---

### Professors

| Method | Endpoint          | Description                                       |
| ------ | ----------------- | ------------------------------------------------- |
| DELETE | `/professors/:id` | Delete professor (blocked if assigned to courses) |
