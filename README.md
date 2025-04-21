# Central-Filmes

# API de Filmes

Esta é uma API para gerenciar e consultar informações sobre filmes. A API permite listar todos os filmes, filtrar filmes por ano, buscar filmes por ID e muito mais.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **Express.js**: Framework para criação de APIs.
- **Nodemon**: Ferramenta para reiniciar o servidor automaticamente durante o desenvolvimento.

---

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/Guilherme-lgs/Central-Filmes.git

2. navegue até o diretório do projeto:
 ## cd api

3. Instale as dependências:
 ## npm install

 4. inicie o server
 ##npm run dev

## O servidor estará rodando em http://localhost:3000.

## Endpoints da API
Filmes
1. Listar todos os filmes
Rota: GET /filmes
Descrição: Retorna todos os filmes disponíveis.

2. Filtrar filmes por ano
Rota: GET /filmes/ano/:ano
Descrição: Retorna todos os filmes lançados no ano especificado.
Parâmetro:
ano (obrigatório): O ano dos filmes que deseja filtrar.

3. Buscar filme por ID
Rota: GET /filmes/id/:id
Descrição: Retorna o filme correspondente ao ID especificado.
Parâmetro:
id (obrigatório): O ID do filme que deseja buscar.

## Panos
1. Filtrar filmes por ano (rota duplicada para /panos)
Rota: GET /panos/ano/:ano
Descrição: Retorna todos os filmes lançados no ano especificado (mesma lógica de /filmes/ano/:ano).
Parâmetro:
ano (obrigatório): O ano dos filmes que deseja filtrar.

# Estrutura do Projeto
api/
├── src/
│   ├── controller/
│   │   ├── [filme.controller.js]
│   │   ├── [pano.controller.js]
│   ├── data/
│   │   ├── [data.js]
│   ├── model/
│   │   ├── [filmes.model.js]
│   ├── routers/
│   │   ├── [filmes.routes.js]
│   │   ├── [Pano.routes.js]
│   │   ├── [Pid.routes.js]
├── .gitignore
├── [package.json]
├── [server.js]
