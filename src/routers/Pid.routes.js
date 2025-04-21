import express from 'express';
import { getItemById } from '../controller/filme.controller.js';

const router = express.Router();

// Rota para filtrar filmes por ID
router.get('/:id', getItemById);

export default router;
