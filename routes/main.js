import express from 'express';
const router = express.Router();

import { login, dashboard } from '../controllers/main.js';
import authMiddleware from '../middleware/auth.js';

router.route('/dashboard').get();
router.route('/login').post();

export default router;
