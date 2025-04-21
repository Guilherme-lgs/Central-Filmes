import {data} from "../data/data.js";

export function getallFilmes(req, res) {
    res.status(200).json(data); // Retorna todos os filmes com status 200 (OK)
}


// Função para filtrar filmes por ano
export function getFilmesPorAno(req, res) {
    const { ano } = req.params; // Obtém o ano dos parâmetros da URL
    const filmesPorAno = data.filter(filme => filme.ano === parseInt(ano)); // Filtra os filmes pelo ano
    if (filmesPorAno.length > 0) {
        res.status(200).json(filmesPorAno); // Retorna os filmes encontrados
    } else {
        res.status(404).json({ message: "Nenhum filme encontrado para o ano especificado" }); // Retorna erro se não encontrar
    }
}


// Função para filtrar por ID
export function getItemById(req, res) {
    const { id } = req.params; 
    const item = data.find(filme => filme.id === id); // Busca o item pelo ID
    if (item) {
        res.status(200).json(item); // Retorna o item encontrado
    } else {
        res.status(404).json({ message: "Item não encontrado para o ID especificado" }); // Retorna erro se não encontrar
    }
}
