package br.com.caetano.portal.repository;

import br.com.caetano.portal.model.Comentario;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

//import java.util.List;

@Repository
public interface ComentarioRepository extends CrudRepository<Comentario, Integer> {

    // Busca os comentários relacionados a uma notícia específica
   
}
