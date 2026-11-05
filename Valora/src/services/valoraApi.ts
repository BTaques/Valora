const API_URL = ("http://localhost:8080").replace(/\/$/, "");
const TOKEN_KEY = "valora.accessToken";
const USER_KEY = "valora.currentUser";
const EMAIL_KEY = "valora.loginEmail";

export type ValoraUser = {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  endereco?: {
    logradouro: string;
    bairro: string;
    cep: string;
    cidade: string;
    uf: string;
    numero?: string;
    complemento?: string;
  };
};

export type CategoryDto = {
  idCategoria: number;
  idUsuario: number;
  nmCategoria: string;
  dtCriacao: string;
};

export type MovementType = "RECEITA" | "DESPESA" | "CAIXINHA_GUARDAR" | "CAIXINHA_RESGATE" | "TRANSFERENCIA_ENTRE_CONTAS";
export type MovementDto = {
  id: number;
  descricao: string;
  valor: number;
  tipo: MovementType;
  dataMovimentacao: string;
  categoria: string;
  conta: string | null;
};
export type MovementCreate = {
  descricao: string;
  valor: number;
  tipo: "RECEITA" | "DESPESA";
  dataMovimentacao: string;
  idCategoria: number;
  idConta: number;
  idContaDestino: null;
  idCaixinha: null;
};
export type PageDto<T> = { content: T[]; totalElements: number; totalPages: number };

export type CashboxDto = {
  idCaixinha: number;
  idUsuario: number;
  nmCaixinha: string;
  vlMeta: number;
  vlAtual: number;
  dtCriacao: string;
};

export type AccountDto = {
  id: number;
  nome: string;
  saldo: number;
};

type RequestOptions = Omit<RequestInit, "body"> & {
  body?: unknown;
  authenticated?: boolean;
};

function readJsonSafely(text: string): unknown {
  if (!text) return null;
  try {
    return JSON.parse(text) as unknown;
  } catch {
    return text;
  }
}

function getMessage(payload: unknown, fallback: string): string {
  if (typeof payload === "string" && payload.trim()) return payload;
  if (payload && typeof payload === "object") {
    const value = payload as Record<string, unknown>;
    for (const key of ["message", "detail", "erro", "error"]) {
      if (typeof value[key] === "string" && value[key]) return value[key] as string;
    }
    if (Array.isArray(value.errors) && value.errors.length) {
      return value.errors
        .map((item) => {
          if (item && typeof item === "object") {
            const entry = item as Record<string, unknown>;
            return String(entry.defaultMessage || entry.message || "");
          }
          return String(item);
        })
        .filter(Boolean)
        .join(" ");
    }
  }
  return fallback;
}

async function request<T>(path: string, options: RequestOptions = {}): Promise<T> {
  const { authenticated = true, headers: customHeaders, body, ...rest } = options;
  const headers = new Headers(customHeaders);
  if (body !== undefined) headers.set("Content-Type", "application/json");

  const token = authenticated ? getAccessToken() : null;
  if (token) headers.set("Authorization", `Bearer ${token}`);

  let response: Response;
  try {
    response = await fetch(`${API_URL}${path}`, {
      ...rest,
      headers,
      body: body === undefined ? undefined : JSON.stringify(body),
    });
  } catch {
    throw new Error(`Não foi possível acessar a API em ${API_URL}. Confira se o back-end está ligado e se a URL está correta.`);
  }

  const raw = await response.text();
  const payload = readJsonSafely(raw);
  if (!response.ok) {
    if (response.status === 401 && authenticated && token) {
      clearSession();
      window.dispatchEvent(new Event("valora:session-expired"));
    }
    throw new Error(getMessage(payload, `A API respondeu com HTTP ${response.status}.`));
  }

  if (response.status === 204 || payload === null) return undefined as T;
  return payload as T;
}

function isJwtExpired(token: string): boolean {
  try {
    const parts = token.split(".");
    if (parts.length !== 3) return true;
    const base64 = parts[1].replace(/-/g, "+").replace(/_/g, "/");
    const payload = JSON.parse(atob(base64)) as { exp?: unknown };
    if (typeof payload.exp !== "number" || !Number.isFinite(payload.exp)) return true;
    return payload.exp * 1000 <= Date.now();
  } catch {
    return true;
  }
}

export function getAccessToken(): string | null {
  const token = sessionStorage.getItem(TOKEN_KEY);
  if (!token) return null;
  if (isJwtExpired(token)) {
    clearSession();
    return null;
  }
  return token;
}

export function getStoredUser(): ValoraUser | null {
  const raw = sessionStorage.getItem(USER_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as ValoraUser;
  } catch {
    sessionStorage.removeItem(USER_KEY);
    return null;
  }
}

export function getLoginEmail(): string | null {
  return sessionStorage.getItem(EMAIL_KEY);
}

export function clearSession(): void {
  sessionStorage.removeItem(TOKEN_KEY);
  sessionStorage.removeItem(USER_KEY);
  sessionStorage.removeItem(EMAIL_KEY);
}

async function fetchCurrentUser(): Promise<ValoraUser> {
  const email = getLoginEmail()?.trim().toLowerCase();
  if (!email) throw new Error("Sessão sem e-mail. Entre novamente na sua conta.");
  // A API não possui GET /api/usuario (me); usa a listagem paginada disponível.
  let page = 0;
  while (true) {
    const result = await request<PageDto<ValoraUser>>(`/api/usuario/listar-usuarios?page=${page}&size=100`);
    const user = result.content.find(item => item.email?.trim().toLowerCase() === email);
    if (user) {
      sessionStorage.setItem(USER_KEY, JSON.stringify(user));
      return user;
    }
    page++;
    if (page >= result.totalPages) break;
  }
  throw new Error("Não foi possível localizar seu usuário. Entre novamente na sua conta.");
}

export type RegisterPayload = {
  nome: string;
  email: string;
  telefone: string;
  senha: string;
  cpf: string;
  dataNascimento: string;
  endereco: {
    logradouro: string;
    bairro: string;
    cep: string;
    cidade: string;
    uf: string;
    numero?: string;
    complemento?: string;
  };
};

export type CashboxTransferCreate = { descricao:string; valor:number; tipo:"CAIXINHA_GUARDAR"|"CAIXINHA_RESGATE"; dataMovimentacao:string; idCategoria:number; idConta:number; idContaDestino:null; idCaixinha:number };

export const api = {
  auth: {
    async login(email: string, senha: string): Promise<void> {
      clearSession();
      const result = await request<{ token: string }>("/api/auth", {
        method: "POST",
        authenticated: false,
        body: { email, senha },
      });
      if (!result?.token) throw new Error("A API não retornou o token de autenticação.");
      sessionStorage.setItem(TOKEN_KEY, result.token);
      sessionStorage.setItem(EMAIL_KEY, email);
    },

    async register(payload: RegisterPayload): Promise<void> {
      await request<ValoraUser>("/api/usuario", {
        method: "POST",
        authenticated: false,
        body: payload,
      });
      await api.auth.login(payload.email, payload.senha);
    },

    async me(): Promise<ValoraUser> {
      return fetchCurrentUser();
    },

    logout(): void {
      clearSession();
    },
  },

  categorias: {
    list(): Promise<CategoryDto[]> {
      return request<CategoryDto[]>("/api/categorias");
    },
    get(id: number): Promise<CategoryDto> {
      return request<CategoryDto>(`/api/categorias/${id}`);
    },
    create(nome: string): Promise<CategoryDto> {
      return request<CategoryDto>("/api/categorias", {
        method: "POST",
        body: { idCategoria: null, idUsuario: null, nmCategoria: nome },
      });
    },
    update(id: number, nome: string): Promise<CategoryDto> {
      return request<CategoryDto>(`/api/categorias/${id}`, {
        method: "PUT",
        body: { idCategoria: id, idUsuario: null, nmCategoria: nome },
      });
    },
    remove(id: number): Promise<void> {
      return request<void>(`/api/categorias/${id}`, { method: "DELETE" });
    },
  },

  caixinhas: {
    list(): Promise<CashboxDto[]> {
      return request<CashboxDto[]>("/api/caixinhas");
    },
    get(id: number): Promise<CashboxDto> {
      return request<CashboxDto>(`/api/caixinhas/${id}`);
    },
    async create(data: { nome: string; meta: number; valorAtual: number }): Promise<CashboxDto> {
      const user = getStoredUser() ?? await fetchCurrentUser();
      if (!Number.isInteger(user.id) || user.id <= 0) throw new Error("Não foi possível identificar o usuário. Entre novamente na sua conta.");
      return request<CashboxDto>("/api/caixinhas", {
        method: "POST",
        body: {
          idCaixinha: null,
          idUsuario: user.id,
          nmCaixinha: data.nome,
          vlMeta: data.meta,
          vlAtual: data.valorAtual,
        },
      });
    },
    update(
      id: number,
      data: { nome: string; meta: number; valorAtual: number },
    ): Promise<CashboxDto> {
      return request<CashboxDto>(`/api/caixinhas/${id}`, {
        method: "PUT",
        body: {
          idCaixinha: id,
          idUsuario: null,
          nmCaixinha: data.nome,
          vlMeta: data.meta,
          vlAtual: data.valorAtual,
        },
      });
    },
    remove(id: number): Promise<void> {
      return request<void>(`/api/caixinhas/${id}`, { method: "DELETE" });
    },
  },

  movimentacoes: {
    list(page = 0, size = 100): Promise<PageDto<MovementDto>> {
      return request<PageDto<MovementDto>>(`/api/movimentacao/listar-movimentacoes?page=${page}&size=${size}&sort=dataMovimentacao,desc`);
    },
    async listAll(): Promise<MovementDto[]> {
      const first = await api.movimentacoes.list();
      const all = [...first.content];
      for (let page = 1; page < first.totalPages; page++) {
        const next = await api.movimentacoes.list(page);
        all.push(...next.content);
      }
      return all;
    },
    updateDetails(id: number, data: { descricao: string; dataMovimentacao: string; valor: number; tipo: "RECEITA"|"DESPESA"; idConta: number; idCategoria: number }): Promise<MovementDto> {
      return request<MovementDto>(`/api/movimentacao/atualizar/${id}`, { method: "PUT", body: data });
    },
    remove(id: number): Promise<void> { return request<void>(`/api/movimentacao/${id}`, {method:"DELETE"}); },
    transferCashbox(data: CashboxTransferCreate): Promise<MovementDto> {
      return request<MovementDto>("/api/movimentacao", {method:"POST",body:data});
    },
    create(data: MovementCreate): Promise<MovementDto> {
      return request<MovementDto>("/api/movimentacao", { method: "POST", body: data });
    },
  },

  contas: {
    list(page = 0): Promise<{ content: AccountDto[]; totalElements: number; totalPages: number }> {
      return request(`/api/conta/listar-contas?page=${page}`);
    },
    create(data: { nome: string; saldo: number }): Promise<AccountDto> {
      return request<AccountDto>("/api/conta", { method: "POST", body: data });
    },
    updateName(id: number, nome: string): Promise<AccountDto> {
      return request<AccountDto>("/api/conta/atualizar", { method: "PUT", body: { id, nome } });
    },
    remove(id: number): Promise<void> {
      return request<void>(`/api/conta/${id}`, { method: "DELETE" });
    },
  },
};
