Central-Filmes
API RESTful para gerenciamento e consulta de informações sobre filmes. Permite listar todos os filmes, filtrar por ano, buscar por ID e muito mais.​

🚀 Tecnologias Utilizadas
Node.js – Ambiente de execução JavaScript.

Express.js – Framework para criação de APIs.

Nodemon – Ferramenta para reiniciar o servidor automaticamente durante o desenvolvimento.​

⚙️ Instalação
Clone o repositório:​

bash
Copiar
Editar
git clone https://github.com/Guilherme-lgs/Central-Filmes.git
Navegue até o diretório do projeto:​

bash
Copiar
Editar
cd Central-Filmes
Instale as dependências:​

bash
Copiar
Editar
npm install
Inicie o servidor em modo de desenvolvimento:​

bash
Copiar
Editar
npm run dev
O servidor estará rodando em: http://localhost:3000​

📚 Endpoints da API
🎬 Filmes
GET /filmes​

Retorna todos os filmes disponíveis.​

GET /filmes/:id​

Retorna os detalhes de um filme específico pelo ID.​

GET /filmes/ano/:ano​

Retorna os filmes lançados no ano especificado.​




📝 Licença
Este projeto está licenciado sob a Licença MIT. Consulte o arquivo LICENSE para obter mais detalhes.
