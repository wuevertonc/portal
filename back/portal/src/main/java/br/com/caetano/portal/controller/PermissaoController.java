package br.com.caetano.portal.controller;

import br.com.caetano.portal.model.Permissao;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "permissao")
public class PermissaoController extends GenericController<Permissao, Integer> {
    // Nenhuma implementação adicional necessária, pois herda o CRUD genérico
}
