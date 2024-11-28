package br.com.caetano.portal.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import br.com.caetano.portal.model.Usuario;
import br.com.caetano.portal.model.AuthResponse;
import br.com.caetano.portal.repository.UsuarioRepository;

@RestController
@RequestMapping(value = "/usuario")
public class UsuarioController extends GenericController<Usuario, Integer> {

    @Autowired
    private UsuarioRepository usuarioRepository;

    // Endpoint de login
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Usuario usuario) {
        // Lógica de autenticação
        Usuario usuarioExistente = usuarioRepository.findByEmail(usuario.getEmail());
        if (usuarioExistente != null && usuarioExistente.getSenha().equals(usuario.getSenha())) {
            // Autenticação bem-sucedida, retorna um token fictício (simulando JWT)
            return ResponseEntity.ok().body(new AuthResponse("fake-jwt-token"));
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Email ou senha incorretos");
        }
    }
}
