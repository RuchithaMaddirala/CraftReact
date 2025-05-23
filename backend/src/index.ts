import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.config';
import authRoutes from './routes/auth.routes';
import protectedRoutes from './routes/protected.routes'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Connect DB
connectDB();

// Routes
app.use('/api/auth', authRoutes); 
app.use('/api/protected', protectedRoutes); 

app.get('/', (_req, res) => {
  res.send('API is running');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
