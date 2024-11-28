package br.com.caetano.portal.repository;

import org.springframework.data.repository.CrudRepository;
import br.com.caetano.portal.model.Noticia;

public interface NoticiaRepository extends CrudRepository<Noticia, Integer> {

}
