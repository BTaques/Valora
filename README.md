# Valora

**Organize suas finanças, acompanhe seus gastos e transforme objetivos em conquistas.**

O **Valora** é uma aplicação web de gestão financeira pessoal desenvolvida como projeto acadêmico de Fintech na **FIAP**. O sistema reúne contas, movimentações, categorias e metas de economia em uma interface única, com integração entre frontend React e API Java.

> **Status:** projeto em desenvolvimento. Os fluxos principais estão implementados; melhorias de responsividade, testes finais e funcionalidades bancárias ainda estão em andamento.

## Funcionalidades

- **Autenticação:** cadastro, login, logout e proteção de rotas.
- **Dashboard:** visão consolidada de saldos, entradas, saídas, movimentações recentes e progresso das metas.
- **Contas:** cadastro, edição, exclusão e acompanhamento de saldos.
- **Movimentações:** registro, edição, exclusão, filtros, paginação e exportação CSV.
- **Categorias:** organização e visualização dos gastos por categoria.
- **Caixinhas:** criação de objetivos financeiros, acompanhamento do progresso e depósitos vinculados a uma conta.
- **Histórico de caixinhas:** consulta de depósitos e resgates registrados na API.

### Em desenvolvimento

- Layout responsivo para telas menores.
- Resgates de caixinhas, condicionados a ajustes de validação no backend.
- Histórico detalhado e gráfico de evolução das caixinhas com dados integralmente persistidos na API.
- Revisão de mensagens de erro, navegação e testes de ponta a ponta.
- Integração bancária com a **Belvo** (planejada; ainda não implementada).

## Tecnologias

| Camada | Tecnologias |
| --- | --- |
| Frontend | React 19, TypeScript, Vite 6, Tailwind CSS 4, React Router |
| Backend | Java 21, Spring Boot, Spring Data JPA, Spring Security |
| Banco de dados | Oracle Database, Flyway |
| Autenticação | JWT |
| Design | Figma |

O backend está em um repositório separado: **[api-valora](https://github.com/ArthurTorres1/api-valora)**.

## Como executar localmente

### Pré-requisitos

- Node.js e npm compatíveis com o Vite 6.
- Java 21 e Maven para executar a API.
- Acesso a uma instância Oracle configurada para o backend.

### 1. Frontend

Clone este repositório e entre na pasta da aplicação:

```bash
git clone https://github.com/BTaques/Valora.git
cd Valora
git checkout integracao-backend
cd Valora
npm install
npm run start
```

> O comando `npm run start` inicia o servidor Vite. O endereço local é informado no terminal (normalmente `http://localhost:5173`).

Para gerar a versão de produção:

```bash
npm run build
```

### 2. Backend

Clone o repositório da API:

```bash
git clone https://github.com/ArthurTorres1/api-valora.git
cd api-valora
```

Configure as variáveis exigidas pelo arquivo `src/main/resources/application.properties`:

| Propriedade | Finalidade |
| --- | --- |
| `DB.URL` | URL JDBC de conexão com o Oracle |
| `DB.USERNAME` | Usuário do banco |
| `DB.PASSWORD` | Senha do banco |
| `JWT_SECRET` | Segredo utilizado na assinatura de tokens |

> **Atenção:** as propriedades acima refletem o arquivo de configuração consultado. Verifique a configuração atual da API antes de executá-la. Não publique credenciais ou segredos no repositório.

Inicie a aplicação pela classe principal do Spring Boot na IDE ou, com o Maven configurado:

```bash
mvn spring-boot:run
```

O frontend atualmente consulta a API em `http://localhost:8080`, conforme `Valora/src/services/valoraApi.ts`. Para utilizar outra porta ou endereço, é necessário ajustar essa configuração.

As migrações do banco são gerenciadas pelo **Flyway** no backend.

## Estrutura do projeto

```text
Valora/
├── README.md
└── Valora/
    ├── public/               # Imagens e recursos visuais
    ├── src/
    │   ├── components/       # Componentes reutilizáveis
    │   ├── pages/            # Telas da aplicação
    │   ├── services/         # Comunicação com a API
    │   ├── utils/            # Funções auxiliares
    │   └── App.tsx           # Rotas da aplicação
    └── package.json
```

## Telas

O projeto inclui telas de login, dashboard, movimentações, caixinhas, detalhes de caixinha, categorias e contas.

**Capturas de tela:** serão adicionadas após a revisão visual e os ajustes de responsividade.

## Desenvolvimento e próximos passos

O Valora está sendo evoluído com testes de fluxos financeiros e integração frontend–backend. As próximas etapas incluem concluir a experiência em dispositivos móveis, revisar os fluxos de caixinhas, realizar testes com usuários e estudar a integração bancária via Belvo.

## Contexto acadêmico

Projeto de Fintech desenvolvido no contexto da formação em tecnologia da **FIAP**, com foco em aplicar conceitos de desenvolvimento web, APIs REST, banco de dados relacional, autenticação e experiência do usuário.

---

**Valora — seus objetivos merecem um plano.**
