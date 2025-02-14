const express = require('express');
const passport = require('passport');
const dbConnect = require('./utils/dbConnect');
const authRoutes = require('./routes/authRoutes');
const urlRoutes = require('./routes/urlRoutes');
const analyticsRoutes = require('./routes/analyticsRoutes');
require('dotenv').config(); // Load environment variables

const app = express();

// Middleware
app.use(express.json());
app.use(passport.initialize());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/url', urlRoutes);
app.use('/api/analytics', analyticsRoutes);

// Connect to Database
dbConnect();

module.exports = app;
