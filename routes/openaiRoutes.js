import { Router } from 'express';
import { generateImage } from '../controllers/openaiController.js';

const router = Router();

router.post('/generateimage', generateImage);

export default router;
