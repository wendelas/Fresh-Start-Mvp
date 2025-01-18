1. Planejamento do fluxo do app:
    Página inicial:
    Explica o conceito do app e permite login/registro.
    Dashboard:
        Exibe metas e hábitos atuais.
        Gráfico de progresso e histórico.
        Botão para adicionar novas metas/hábitos.
    Tela de criar metas/hábitos:
        Formulário para nome, categoria, frequência (diária/semanal/mensal).
        Tela de detalhes de uma meta/hábito:
        Histórico de conclusão.
        Botão de "Marcar como concluído".
    Configurações do usuário:
        Atualização de perfil e preferências.
2. Estrutura tecnológica:
    Backend (Node.js com MongoDB):
    Criação de APIs RESTful:
        Gerenciar usuários (registro/login/autenticação).
        CRUD de metas e hábitos.
        Modelo de dados:
    Usuários: nome, email, senha (hash).
    Metas: nome, descrição, frequência, progresso, dono (relacionado ao usuário).
    Middleware: Autenticação JWT.
    Frontend (Angular + Bootstrap):
        Serviço Angular para consumir as APIs.
        Componentes para cada página/tela.
        Responsividade com Bootstrap.
        Validação de formulários.
        Banco de dados (MongoDB):
        Estruturar coleções para eficiência e escalabilidade.
3. Etapas de desenvolvimento usando Copilot:
    Setup inicial:
        Configurar projetos backend e frontend.
        Configurar MongoDB e conexão no backend.
    Desenvolver backend:
        Criar modelos MongoDB e APIs com Copilot.
        Gerar middleware para autenticação JWT.
    Desenvolver frontend:
        Criar componentes Angular.
        Estilizar com Bootstrap e Angular Material (opcional).
        Consumir APIs usando HttpClient.
    Testar e depurar:
        Usar o Copilot para criar testes unitários e de integração.
4. Pontos focais no desenvolvimento:
    Acessibilidade: Use práticas recomendadas para garantir que o app seja acessível.
    Usabilidade: Interfaces intuitivas e amigáveis.
    Clareza: Fluxo simples para o usuário alcançar seus objetivos


