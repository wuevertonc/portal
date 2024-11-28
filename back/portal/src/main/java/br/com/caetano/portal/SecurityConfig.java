package br.com.caetano.portal;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable()) // Desativa CSRF
            .authorizeHttpRequests(auth -> auth
                .anyRequest().permitAll() // Permite todas as requisições sem autenticação
            );
        return http.build();
    }
}