import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario.model';
import { Observable } from 'rxjs';
import { GenericServiceService } from './generic-service.service';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService extends GenericServiceService<Usuario> {
  constructor(handler: HttpBackend) {
    const url = 'http://localhost:8080/usuario'; // URL da API para usuários
    super(handler, url);
  }
}
