# API Hydra

api structure

```
src/
├── app/                    # Entry points e inicializações
│   ├── http/               # Express HTTP server
│   ├── ws/                 # Socket.io WebSocket server
│   └── main.ts             # Inicialização principal
│
├── modules/                # Módulos de domínio (ex: tasks, users)
│   └── tasks/
│       ├── controllers/    # HTTP e WebSocket handlers
│       ├── services/       # Regras de negócio (use cases)
│       ├── repositories/   # Interface com banco de dados
│       ├── schemas/        # Validações, DTOs, tipos
│       └── routes.ts       # Rotas específicas do módulo
│
├── shared/                 # Códigos reutilizáveis
│   ├── infra/              # Conexão com banco, redis, etc
│   ├── middlewares/        # Middlewares Express
│   ├── utils/              # Funções auxiliares
│   └── types/              # Tipos globais
│
├── config/                 # Variáveis de ambiente, configs gerais
│   └── env.ts
│
└── server.ts               # Arquivo de bootstrap

```
