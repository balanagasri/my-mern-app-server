// Import necessary modules
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

// Load environment variables
dotenv.config();

// Create an Express application
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // For parsing JSON data in requests

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));

// Simple example route
app.get('/', (req, res) => {
  res.send('Welcome to the MERN Stack Application!');
});

// Define a sample API endpoint (for demonstration)
app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

// Define the PORT
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
