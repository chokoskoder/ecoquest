const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');

dotenv.config();
connectDB();

const app = express();

// Middleware to parse JSON
app.use(express.json());

// API routes
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 8699;
app.listen(PORT, console.log(`Server running on port ${PORT}`));
