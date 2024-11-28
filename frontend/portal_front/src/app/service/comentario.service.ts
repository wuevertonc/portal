import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comentario } from '../model/comentario.model';
import { Observable } from 'rxjs';
import { GenericServiceService } from './generic-service.service';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService extends GenericServiceService<Comentario> {

  constructor(handler: HttpBackend) { 
    let url = "http://localhost:8080/comentario";
    super(handler, url);
  }


}
