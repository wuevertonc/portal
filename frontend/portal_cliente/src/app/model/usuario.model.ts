import { Pessoa } from "./pessoa.model";

export class Usuario {
    id: number | null = null;
    login: string | null = null;
    password: string | null = null;
    pessoa: Pessoa = new Pessoa(); // Inicializa com uma instância padrão
  }