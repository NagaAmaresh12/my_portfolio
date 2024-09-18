const express = require('express');
const app = express();
require('dotenv').config();
const connectDB = require('./config/db.js');
// const redisLimit = require('./config/redisLimit.js');
const ipWhitelistMiddleware = require('./middlewares/ipWhitelist.js');
const session = require('express-session');
const flash = require('connect-flash');
const cors = require('cors');
const contactRoutes = require('./routes/contactRoute.js');
const indexRoutes = require('./routes/indexRoutes.js');
const limiter = require('./config/ratelimiter.js');

// Load environment variables

// Connect to MongoDB
connectDB();


// Middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Define allowed origins
const allowedOrigins = [
  'https://my-portfolio-frontend-oqoc.onrender.com/',
  'http://localhost:5173' // Include this if you want to allow local development
];

// CORS options
const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
};

// Apply CORS middleware
app.use(cors(corsOptions));


// Session and flash middleware
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
}));
app.use(flash());

// Routes

  // Apply to all requests
app.use(limiter);

app.use('/', indexRoutes);
app.use('/api', contactRoutes);
app.use('/admin',ipWhitelistMiddleware);

const PORT = process.env.PORT ||  4000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
