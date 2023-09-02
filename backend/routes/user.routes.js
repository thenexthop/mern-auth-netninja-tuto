import { Router } from 'express';
import { getAllUsers } from '../controllers/user.controller.js';
import { 
    register,
    login 
} from '../controllers/auth.controller.js';

const router = Router();

// GET ALL users
router.get('/', getAllUsers)
    .post('/register', register)
    .post('/login', login);


export default router;