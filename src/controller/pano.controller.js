import { data } from "../data/data.js";

// Função corrigida para filtrar filmes por ano
export function getFilmesPorAno(req, res) {
    const { ano } = req.params; // Obtém o ano dos parâmetros da URL
    const filmesPorAno = data.filter(filme => filme.ano === parseInt(ano)); // Filtra os filmes pelo ano
    if (filmesPorAno.length > 0) {
        res.status(200).json(filmesPorAno); // Retorna os filmes encontrados
    } else {
        res.status(404).json({ message: "Nenhum filme encontrado para o ano especificado" }); // Retorna erro se não encontrar
    }
}