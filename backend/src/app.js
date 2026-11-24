import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import { initDbConnection } from './database/db.js';
import appointmentRoutes from './routes/appointmentRoutes.js';
import contactRoutes from './routes/contactRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Security Middleware
app.use(helmet());

// CORS configuration
const allowedOrigins = [
  'http://localhost:5173',
  'http://127.0.0.1:5173',
  'http://localhost:3000',
  'http://127.0.0.1:3000',
  process.env.FRONTEND_URL
].filter(Boolean);

app.use(cors({
  origin: (origin, callback) => {
    // allow requests with no origin (like mobile apps, curl, postman)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) !== -1 || process.env.NODE_ENV !== 'production') {
      return callback(null, true);
    }
    return callback(new Error('CORS policy: Access denied'));
  },
  credentials: true
}));

// Body parsing
app.use(express.json({ limit: '50kb' }));
app.use(express.urlencoded({ extended: true, limit: '50kb' }));

// Spam protection & Rate Limiting
const formRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 15, // limit each IP to 15 submissions per window
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Too many requests submitted from this IP. Please wait a few minutes or call our hospital desk directly at +91 9075023025.'
  }
});

const generalRateLimiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 120, // 120 requests per minute
  standardHeaders: true,
  legacyHeaders: false
});

app.use(generalRateLimiter);

// API Routes
app.use('/api/appointments', formRateLimiter, appointmentRoutes);
app.use('/api/contact', formRateLimiter, contactRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    institution: 'Mahajan Multispecialist Hospital, Satara',
    version: '1.0.0',
    timestamp: new Date().toISOString()
  });
});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Endpoint not found on Mahajan Hospital API'
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled Server Error:', err.message);
  res.status(500).json({
    success: false,
    message: 'An unexpected internal server error occurred. Please contact the hospital desk directly.'
  });
});

// Start server and initialize PostgreSQL when not in test mode
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, async () => {
    console.log(`=======================================================`);
    console.log(`🏥 Mahajan Multispecialist Hospital REST API`);
    console.log(`🚀 Server listening on port ${PORT}`);
    console.log(`🌐 Base URL: http://localhost:${PORT}`);
    console.log(`=======================================================`);
    await initDbConnection();
  });
}

export default app;
