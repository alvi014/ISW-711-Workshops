require('dotenv').config();
const express = require('express');
const cors = require("cors");
const mongoose = require('mongoose');
const path = require('path');
const courseRoutes = require('./routes/course.routes'); 

const app = express();
const uri = process.env.MONGO_URI;

mongoose.connect(uri)
    .then(() => console.log('Connection to MongoDB Atlas successful'))
    .catch(err => console.error('Error connecting to MongoDB Atlas:', err));

app.use(cors());
app.use(express.json()); 
app.use(express.static(path.join(__dirname, '../public')));
app.use('/course', courseRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));