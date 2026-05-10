require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const connectDB = require('./config/db');

const app = express();

// Connect to Database
if (process.env.NODE_ENV !== 'test') {
  connectDB();
}

// Middleware
app.use(helmet());

// CORS Configuration
const allowedOrigins = [
  'http://localhost:3000',
  'https://w-commerce-21.vercel.app'
];

app.use(cors({
  origin: function (origin, callback) {
    // allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true
}));

app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/v1/auth', require('./routes/authRoutes'));
app.use('/api/v1/products', require('./routes/productRoutes'));
app.use('/api/v1/categories', require('./routes/categoryRoutes'));
app.use('/api/v1/store', require('./routes/storeRoutes'));
app.use('/api/v1/admin', require('./routes/adminRoutes'));

app.get('/api/v1/health', (req, res) => {
  res.json({ status: 'ok', message: 'API is running' });
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error',
  });
});

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
  });
}

module.exports = app;
