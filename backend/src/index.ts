import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.config';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Connect to DB
connectDB();

// Test route
app.get('/', (req, res) => {
  res.send('API is running');
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
