import { Noticia } from "./noticia.model";
import { Usuario } from "./usuario.model";

export class Comentario {
    id: number | null = null;  // Inicializa com 'null'
    usuario: Usuario | null = null;  // Inicializa com 'null'
    noticia: Noticia | null = null;  // Inicializa com 'null'
    texto?: string | null = null;  // Usar 'string' e inicializar com 'null'
  }
