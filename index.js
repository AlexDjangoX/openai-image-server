import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import openaiRoutes from './routes/openaiRoutes.js';

const port = process.env.PORT || 5000;

import path from 'node:path';
import { fileURLToPath } from 'node:url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.disable('x-powered-by');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname + '/build')));

app.use('/openai', openaiRoutes);

app.listen(port, () => console.log(`Server started on port ${port}`));
