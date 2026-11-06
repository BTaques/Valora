# Valora

**Organize suas finanças, acompanhe seus gastos e transforme objetivos em conquistas.**

O **Valora** é uma aplicação web de gestão financeira pessoal desenvolvida como projeto acadêmico de Fintech na **FIAP**. O frontend em React e TypeScript se comunica com uma API REST em Java/Spring Boot, mantida em um repositório separado.

> **Status:** em desenvolvimento. Os principais fluxos estão integrados; a experiência responsiva e os testes de ponta a ponta continuam em revisão. A conexão com bancos via Open Finance ainda não está disponível.

## Funcionalidades

- **Acesso:** cadastro, login com JWT, logout e proteção de rotas.
- **Dashboard:** visão de saldos, entradas, saídas, movimentações e metas; atalhos para **Registrar gasto** e **Registrar entrada**.
- **Contas:** cadastro, consulta, edição e exclusão.
- **Movimentações:** registro de receitas e despesas, consulta, edição, exclusão, filtros e exportação CSV.
- **Categorias:** cadastro e organização das movimentações.
- **Caixinhas:** criação de metas, consulta de saldo e progresso, depósitos, resgates e opção de exclusão. Os fluxos dependem das regras e respostas da API.
- **Busca na barra superior:** pesquisa por movimentações, caixinhas e categorias, com navegação para as respectivas áreas.
- **Perfil:** menu **Meus dados** e **Sair da conta**; visualização dos dados cadastrais disponibilizados pela API.
- **Conectar conta bancária:** tela de prévia com aviso de funcionalidade futura; não realiza conexão bancária real.

### Integração de caixinhas

A listagem de caixinhas do usuário autenticado usa:

```http
GET /api/caixinhas/usuario/
Authorization: Bearer <token JWT>
```

O backend identifica o usuário pelo token, sem ID na URL, e é responsável por retornar as caixinhas ativas. O frontend também utiliza as operações de consulta individual, criação, atualização e exclusão previstas na API, incluindo `DELETE /api/caixinhas/{id}`.

> A listagem foi adaptada ao endpoint autenticado. A exclusão e os demais fluxos precisam ser validados com a versão atual da API; não há confirmação de teste de ponta a ponta nesta documentação.

## Tecnologias

| Camada | Tecnologias |
| --- | --- |
| Frontend | React 19, TypeScript, Vite 6, Tailwind CSS 4, React Router |
| Backend | Java, Spring Boot, Spring Data JPA, Spring Security |
| Banco de dados | Oracle Database |
| Autenticação | JWT |
| Design | Figma |

**Repositórios:** [Frontend — BTaques/Valora](https://github.com/BTaques/Valora) · [API — BTaques/API-Valora](https://github.com/BTaques/API-Valora)

## Executar localmente

**Pré-requisitos:** Node.js, npm e backend configurado e em execução.

```bash
git clone https://github.com/BTaques/Valora.git
cd Valora/Valora
npm install
npm run start
```

O Vite informa no terminal o endereço local, normalmente `http://localhost:5173`.

Para gerar uma versão de produção:

```bash
npm run build
```

### Backend

O código da API está em [BTaques/API-Valora](https://github.com/BTaques/API-Valora). Configure a conexão com o banco, o segredo JWT e as demais propriedades conforme as instruções e arquivos desse repositório. Inicie a API antes de testar o frontend.

Atualmente, a URL base da API está definida como `http://localhost:8080` em `Valora/src/services/valoraApi.ts`.

## Estrutura

```text
Valora/
├── README.md
└── Valora/
    ├── public/          # Imagens e ícones
    ├── src/
    │   ├── components/  # Componentes reutilizáveis
    │   ├── pages/       # Telas
    │   ├── services/    # Integração com a API
    │   ├── utils/       # Utilitários
    │   └── App.tsx      # Rotas
    └── package.json
```

## Próximos passos

- Concluir e validar a responsividade em diferentes tamanhos de tela.
- Testar integralmente os fluxos de caixinhas, inclusive a exclusão, com a API atualizada.
- Revisar mensagens de erro e realizar testes de ponta a ponta.
- Evoluir o histórico e os gráficos com dados persistidos na API.
- Implementar futuramente a integração bancária via Open Finance.

## Contexto acadêmico

Projeto de Fintech desenvolvido na **FIAP**, com foco em desenvolvimento web, APIs REST, banco de dados, autenticação e experiência do usuário.

---

**Valora — seus objetivos merecem um plano.**
