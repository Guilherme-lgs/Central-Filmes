import express from 'express';
import routeallFilmes from './src/routers/filmes.routes.js'; // Importação padrão
import panoRoutes from './src/routers/Pano.routes.js';
import pidRoutes from './src/routers/Pid.routes.js';

const app = express(); // Inicialização do app deve vir antes de usá-lo
const PORT = 3000;

app.use(express.json()); // Middleware para interpretar JSON no corpo das requisições

// Usa o roteador de filmes para a rota '/filmes'
app.use('/filmes', routeallFilmes);
app.use('/panos', panoRoutes); // Usa panos para a rota '/panos'
app.use('/filmes/id', pidRoutes); // Configura a rota para buscar filmes por ID

app.get('/', (req, res) => {
    res.json('Servidor rodando com sucesso!');
});

app.listen(PORT, () => {
    console.log(`Rodando o Servidor na porta ${PORT}`);
});