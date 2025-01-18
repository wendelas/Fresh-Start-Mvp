export interface Evento {
    id: string;
    nome: string;
    descricao: string;
    data: Date;
    tipo: string; // Ex: "positivo", "negativo"
}

export interface Emocao {
    id: string;
    nome: string;
    intensidade: number; // Escala de 1 a 10
    data: Date;
}

export interface Usuario {
    id: string;
    nome: string;
    email: string;
    senha: string; // Deve ser armazenada de forma segura
}

export interface Progresso {
    usuarioId: string;
    eventos: Evento[];
    acoes: Emocao[];
    dataRegistro: Date;
}