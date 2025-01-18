# Roteiro-do-projeto.md

1. Planejamento do fluxo do app:
   - Página inicial:
     - Explica o conceito do app e permite login/registro.
   - Dashboard:
     - Exibe metas e hábitos atuais.
     - Gráfico de progresso e histórico.
     - Botão para adicionar novas metas/hábitos.
   - Tela de criar metas/hábitos:
     - Formulário para nome, categoria, frequência (diária/semanal/mensal).
   - Tela de detalhes de uma meta/hábito:
     - Histórico de conclusão.
     - Botão de "Marcar como concluído".
   - Configurações do usuário:
     - Atualização de perfil e preferências.

2. Estrutura tecnológica:
   - Backend (Node.js com MongoDB):
     - Criação de APIs RESTful:
       - Gerenciar usuários (registro/login/autenticação).
       - CRUD de metas e hábitos.
     - Modelo de dados:
       - Usuários: nome, email, senha (hash).
       - Metas: nome, descrição, frequência, progresso, dono (relacionado ao usuário).
     - Middleware: Autenticação JWT.
   - Frontend (Angular + Bootstrap):
     - Serviço Angular para consumir as APIs.
     - Componentes para cada página/tela.
     - Responsividade com Bootstrap.
     - Validação de formulários.
   - Banco de dados (MongoDB):
     - Estruturar coleções para eficiência e escalabilidade.

3. Etapas de desenvolvimento usando Copilot:
   - Setup inicial:
     - Configurar projetos backend e frontend.
     - Configurar MongoDB e conexão no backend.