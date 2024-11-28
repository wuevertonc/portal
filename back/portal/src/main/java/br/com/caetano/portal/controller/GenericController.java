package br.com.caetano.portal.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public abstract class GenericController<T, ID> {

    @Autowired
    private CrudRepository<T, ID> repository;

    // GET all - listar
    @RequestMapping(value = "listar", method = RequestMethod.GET)
    public ResponseEntity<List<T>> listar() {
        return ResponseEntity.ok((List<T>) repository.findAll());
    }

    // GET by ID - getById
    @RequestMapping(value = "listar/{id}", method = RequestMethod.GET)
    public ResponseEntity<T> getById(@PathVariable(value = "id") ID id) {
        Optional<T> object = repository.findById(id);
        return object.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                     .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    // POST - novo
    @RequestMapping(value = "novo", method = RequestMethod.POST)
    public ResponseEntity<T> novo(@RequestBody T object) {
        T savedObject = repository.save(object);
        return new ResponseEntity<>(savedObject, HttpStatus.CREATED);
    }

    // PUT - atualizar
    @RequestMapping(value = "atualizar/{id}", method = RequestMethod.PUT)
    public ResponseEntity<T> atualizar(@PathVariable(value = "id") ID id, @RequestBody T newObject) {
        if (repository.existsById(id)) {
            T updatedObject = repository.save(newObject);
            return new ResponseEntity<>(updatedObject, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // DELETE - remover
    @RequestMapping(value = "remover/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Void> remover(@PathVariable(value = "id") ID id) {
        Optional<T> object = repository.findById(id);
        if (object.isPresent()) {
            repository.delete(object.get());
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
