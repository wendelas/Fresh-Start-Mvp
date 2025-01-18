# Transições e Transformações

Este projeto, intitulado "Transições e Transformações", é um aplicativo que visa ajudar os usuários a visualizar seu progresso pessoal e emocional ao longo de uma jornada criativa. Através de uma interface intuitiva, os usuários poderão registrar suas experiências, refletir sobre suas emoções e acompanhar seu desenvolvimento ao longo do tempo.

## Estrutura do Projeto

O projeto é dividido em duas partes principais: **backend** e **frontend**.

### Backend

O backend é construído com Node.js e TypeScript, utilizando MongoDB como banco de dados. Ele é responsável por gerenciar a lógica de negócios, autenticação de usuários e manipulação de dados.

- **src/app.ts**: Ponto de entrada da aplicação backend.
- **src/controllers/index.ts**: Controladores que gerenciam a lógica da aplicação.
- **src/models/index.ts**: Modelos de dados que se conectam ao banco de dados.
- **src/routes/index.ts**: Definição das rotas da API.
- **src/types/index.ts**: Interfaces que definem a estrutura dos dados.

### Frontend

O frontend é desenvolvido com Angular, proporcionando uma experiência de usuário rica e responsiva. Ele permite que os usuários interajam com o aplicativo de forma intuitiva.

- **src/app/app.component.ts**: Componente principal da aplicação.
- **src/app/app.component.html**: Template HTML do componente principal.
- **src/app/app.component.css**: Estilos específicos para o componente principal.
- **src/index.html**: Ponto de entrada HTML da aplicação.

## Instalação

Para instalar e executar o projeto, siga os passos abaixo:

1. Clone o repositório:
   ```
   git clone <URL_DO_REPOSITORIO>
   ```

2. Navegue até a pasta do backend e instale as dependências:
   ```
   cd backend
   npm install
   ```

3. Navegue até a pasta do frontend e instale as dependências:
   ```
   cd ../frontend
   npm install
   ```

4. Inicie o servidor backend:
   ```
   cd backend
   npm start
   ```

5. Inicie o aplicativo frontend:
   ```
   cd ../frontend
   ng serve
   ```

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

## Licença

Este projeto está licenciado sob a MIT License. Veja o arquivo LICENSE para mais detalhes.