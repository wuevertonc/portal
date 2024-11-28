package br.com.caetano.portal.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import br.com.caetano.portal.model.Categoria;
import br.com.caetano.portal.model.Usuario;
import br.com.caetano.portal.model.TipoUsuario;
import br.com.caetano.portal.model.Noticia;
import br.com.caetano.portal.model.Comentario;
import br.com.caetano.portal.model.Permissao;
import br.com.caetano.portal.repository.CategoriaRepository;
import br.com.caetano.portal.repository.UsuarioRepository;
import br.com.caetano.portal.repository.NoticiaRepository;
import br.com.caetano.portal.repository.ComentarioRepository;
import br.com.caetano.portal.repository.PermissaoRepository;
//import br.com.caetano.portal.controller.UsuarioController;
//import br.com.caetano.portal.controller.ComentarioController;

@Component
public class DataBaseInsert implements CommandLineRunner {

    @Autowired
    CategoriaRepository categoriaRepository;

    @Autowired
    UsuarioRepository usuarioRepository;

    @Autowired
    NoticiaRepository noticiaRepository;

    @Autowired
    ComentarioRepository comentarioRepository;

    @Autowired
    PermissaoRepository permissaoRepository;

    @Override
    public void run(String... args) throws Exception {

        // Inserção de Categorias
        Categoria c1 = new Categoria("esportes", "notícias de esporte", null);
        categoriaRepository.save(c1);

        Categoria c2 = new Categoria("cinema", "notícias sobre cinema", null);
        categoriaRepository.save(c2);

        Categoria c3 = new Categoria("atualidades", "notícias de atualidades", null);
        categoriaRepository.save(c3);

        Categoria c4 = new Categoria("policial", "notícias de policial", null);
        categoriaRepository.save(c4);
 
        // Inserção de Usuários
        Usuario u1 = new Usuario("João Silva", "joao@email.com", "senha123", TipoUsuario.ADMINISTRADOR);
        usuarioRepository.save(u1);
        Usuario u2 = new Usuario("Maria Oliveira", "maria@email.com", "senha456", TipoUsuario.VISITANTE);
        usuarioRepository.save(u2);
        Usuario u3 = new Usuario("Pedro Souza", "pedro@email.com", "senha789", TipoUsuario.EDITOR);
        usuarioRepository.save(u3);
        Usuario u4 = new Usuario("Ana Paula", "ana@email.com", "senha101", TipoUsuario.EDITOR);
        usuarioRepository.save(u4);
        Usuario u5 = new Usuario("Carlos Mendes", "carlos@email.com", "senha102", TipoUsuario.ADMINISTRADOR);
        usuarioRepository.save(u5);
        Usuario u6 = new Usuario("Fernanda Lima", "fernanda@email.com", "senha103", TipoUsuario.VISITANTE);
        usuarioRepository.save(u6);
        Usuario u7 = new Usuario("Ricardo Teixeira", "ricardo@email.com", "senha104", TipoUsuario.EDITOR);
        usuarioRepository.save(u7);

        // Inserção de Notícias
        Noticia n1 = new Noticia("Jogo histórico", "O time venceu por 3 a 0.", "https://picsum.photos/600?random=34", c1, u3);
        noticiaRepository.save(n1);

        Noticia n2 = new Noticia("Lançamento de filme", "O novo filme da Marvel foi lançado.","https://picsum.photos/600?random=92",  c2,u3);
        noticiaRepository.save(n2);

        Noticia n3 = new Noticia("Guerra em Gaza", "Atualizações sobre o conflito.", "https://picsum.photos/600?random=90", c3,u3);
        noticiaRepository.save(n3);

        Noticia n4 = new Noticia("Assalto em banco", "Bandidos fazem reféns e roubam banco.","https://picsum.photos/600?random=15",  c4, u3);
        noticiaRepository.save(n4);
        Noticia n5 = new Noticia("Título de Esportes", "Resumo emocionante sobre um jogo épico.", 
    "https://picsum.photos/600?random=1", c1, u4);
        noticiaRepository.save(n5);

        Noticia n6 = new Noticia("Cinema Internacional", "Filmes indicados ao Oscar são anunciados.", 
            "https://picsum.photos/600?random=2", c2, u5);
        noticiaRepository.save(n6);

        Noticia n7 = new Noticia("Eleições 2024", "Resultados parciais das eleições presidenciais.", 
            "https://picsum.photos/600?random=3", c3, u6);
        noticiaRepository.save(n7);

        Noticia n8 = new Noticia("Operação Policial", "Grande operação desmantela quadrilha.", 
            "https://picsum.photos/600?random=4", c4, u7);
        noticiaRepository.save(n8);

        Noticia n9 = new Noticia("Mundial de Futebol", "Favoritos avançam às quartas de final.", 
            "https://picsum.photos/600?random=5", c1, u4);
        noticiaRepository.save(n9);

        Noticia n10 = new Noticia("Estreia de Série", "Nova série é sucesso de público e crítica.", 
            "https://picsum.photos/600?random=6", c2, u5);
        noticiaRepository.save(n10);

        Noticia n11 = new Noticia("Crise Climática", "Relatório aponta aumento na temperatura global.", 
            "https://picsum.photos/600?random=7", c3, u6);
        noticiaRepository.save(n11);

        Noticia n12 = new Noticia("Caso de Corrupção", "Político é investigado por desvio de verba.", 
            "https://picsum.photos/600?random=8", c4, u7);
        noticiaRepository.save(n12);

        Noticia n13 = new Noticia("Campeonato de Basquete", "Times se preparam para as finais.", 
            "https://picsum.photos/600?random=9", c1, u4);
        noticiaRepository.save(n13);

        Noticia n14 = new Noticia("Festival de Cinema", "Filmes independentes ganham destaque.", 
            "https://picsum.photos/600?random=10", c2, u5);
        noticiaRepository.save(n14);

        Noticia n15 = new Noticia("Avanços na Ciência", "Descoberta pode revolucionar a medicina.", 
            "https://picsum.photos/600?random=11", c3, u6);
        noticiaRepository.save(n15);

        Noticia n16 = new Noticia("Ação Policial em Andamento", "Operação prende líderes do tráfico.", 
            "https://picsum.photos/600?random=12", c4, u7);
        noticiaRepository.save(n16);

        Noticia n17 = new Noticia("Final do Campeonato", "Um dos jogos mais aguardados do ano.", 
            "https://picsum.photos/600?random=13", c1, u4);
        noticiaRepository.save(n17);

        Noticia n18 = new Noticia("Cinema Nacional em Alta", "Filme brasileiro é sucesso internacional.", 
            "https://picsum.photos/600?random=14", c2, u5);
        noticiaRepository.save(n18);

        Noticia n19 = new Noticia("Tecnologia e Sustentabilidade", "Empresas adotam práticas sustentáveis.", 
            "https://picsum.photos/600?random=15", c3, u6);
        noticiaRepository.save(n19);

        Noticia n20 = new Noticia("Mega Assalto Frustrado", "Polícia impede roubo milionário.", 
            "https://picsum.photos/600?random=16", c4, u7);
        noticiaRepository.save(n20);

        // Inserção de Comentários
        Comentario com1 = new Comentario("Que jogo incrível!", n1, u3);
        comentarioRepository.save(com1);
        Comentario com2 = new Comentario("Eu estava esperando por esse filme!", n3, u2);
        comentarioRepository.save(com2);
        Comentario com3 = new Comentario("Que situação horrível em Gaza!", n2, u3);
        comentarioRepository.save(com3);
        Comentario com4 = new Comentario("Espero que a polícia consiga resolver logo.", n1, u2);
        comentarioRepository.save(com4);
        
        // Inserção de Permissões
        Permissao p1 = new Permissao(TipoUsuario.EDITOR, "Pode editar e publicar notícias");
        permissaoRepository.save(p1);

        Permissao p2 = new Permissao(TipoUsuario.ADMINISTRADOR, "Pode editar, publicar e administrar");
        permissaoRepository.save(p2);

        Permissao p3 = new Permissao(TipoUsuario.VISITANTE, "Pode visualizar as notícias");
        permissaoRepository.save(p3);
    }
}
