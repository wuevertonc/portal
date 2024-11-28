import { Categoria } from "./categoria.model";

export class Noticia {
    id!: number | null;
    titulo!: string | null;
    corpo!: string | null;
    imagemUrl!: string | null; // Inclua a URL da imagem
    categoria!: Categoria | null;
}