require('dotenv').config();
const express = require('express');
const cors = require("cors");
const mongoose = require('mongoose');

const authRoutes = require('./routes/auth.routes');
const professorRoutes = require('./routes/professor.routes');
const courseRoutes = require('./routes/course.routes');

const app = express();

// CORS  
app.use(cors()); 
app.use(express.json()); 
app.use('/auth', authRoutes);


// Rutas de la API
app.use('/professors', professorRoutes); 
app.use('/courses', courseRoutes);

app.get('/test', (req, res) => res.send('API funcionando correctamente'));

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connection to MongoDB Atlas successful'))
    .catch(err => console.error('Error connecting to MongoDB Atlas:', err));

const PORT = process.env.PORT || 4000; 
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));