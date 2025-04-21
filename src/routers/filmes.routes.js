import express from 'express'; // Corrigida a importação do express

import { getallFilmes } from '../controller/filme.controller.js';

const router = express.Router();

// Define a rota GET para '/filmes' e associa à função getallFilmes
// Exemplo de rota
router.get('/', getallFilmes);
    
export default router; 