# Week 2: CRUD Implementation & Frontend Integration

## Objective
Expand the REST API by implementing **PUT** and **DELETE** methods and creating a functional web client to manage courses using a modular architecture.

## Technologies Used
* **Node.js & Express** for the server-side logic and routing.
* **Mongoose** for Object Data Modeling (ODM).
* **MongoDB Atlas** as the cloud database provider.
* **HTML5 & CSS3** for a modern UI.
* **Fetch API** for client-server communication.

## Features Implemented
- [x] **API - PUT Method:** Update course credits using query parameters.
- [x] **API - DELETE Method:** Remove courses from the database by ID.
- [x] **Frontend - Create Page:** Form to register new courses.
- [x] **Frontend - List Page:** Dynamic dashboard with course table.

## How to run locally
1. `cd week-2/server`
2. `npm install`
3. Create a `.env` file with your `MONGO_URI`.
4. Run: `node index.js`.