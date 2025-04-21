import express from 'express';
import { getFilmesPorAno } from '../controller/pano.controller.js';

const router = express.Router();

// Rota para filtrar filmes por ano
router.get('/ano/:ano', getFilmesPorAno);

export default router;