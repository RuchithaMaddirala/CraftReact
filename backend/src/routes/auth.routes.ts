import { Router } from 'express';
import { register, login } from '../controllers/auth.controller';

const router = Router();

router.post('/register', register); // ✅ this must be a function
router.post('/login', login);

export default router;
