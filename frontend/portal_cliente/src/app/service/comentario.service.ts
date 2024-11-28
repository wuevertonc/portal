import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comentario } from '../model/comentario.model';
import { Observable } from 'rxjs';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService extends GenericService<Comentario> {

  constructor(handler: HttpBackend) { 
    let url = "http://localhost:8080/comentario";
    super(handler, url);
  }

  public buscarComentariosPorNoticia(noticiaId: number): Observable<Comentario[]> {
    return this.http.get<Comentario[]>(`${this.url}/listar/${noticiaId}`);
  }
  
}
