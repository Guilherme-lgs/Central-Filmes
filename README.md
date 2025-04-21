<h1 align="center">🎬 Central-Filmes</h1>

<p align="center">
  API RESTful para gerenciamento e consulta de informações sobre filmes.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/>
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"/>
  <img src="https://img.shields.io/badge/Nodemon-76D04B?style=for-the-badge&logo=nodemon&logoColor=white"/>
</p>

---

## 🚀 Tecnologias

- ✅ **Node.js** – Ambiente de execução JavaScript
- ✅ **Express.js** – Framework web para criação de APIs
- ✅ **Nodemon** – Monitoramento e reinício automático do servidor

---

📚 Endpoints
🎞️ Filmes
GET /filmes
🔎 Retorna todos os filmes disponíveis.

GET /filmes/:id
🔎 Retorna um filme específico por ID.

GET /filmes/ano/:ano
🔎 Lista os filmes lançados em determinado ano.

📦 Exemplos de Uso da API

curl http://localhost:3000/filmes

🔹 Buscar filme por ID
curl http://localhost:3000/filmes/2

🔹 Buscar filmes por ano
curl http://localhost:3000/filmes/ano/1994


## ⚙️ Instalação e Execução

```bash
# 1. Clone o repositório
git clone https://github.com/Guilherme-lgs/Central-Filmes.git

# 2. Acesse o diretório
cd Central-Filmes

# 3. Instale as dependências
npm install

# 4. Inicie o servidor
npm run dev
O servidor será iniciado em: http://localhost:3000

##
