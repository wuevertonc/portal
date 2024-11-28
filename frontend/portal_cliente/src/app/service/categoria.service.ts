import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria } from '../model/categoria.model';
import { map, Observable } from 'rxjs';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService extends GenericService<Categoria> {

  constructor(handler: HttpBackend) { 
    let url = "http://localhost:8080/categoria";
    super(handler, url);
  }

  

  public getDestaques(){
    return this.http.get('http://localhost:8080/categoria/listarDestaque').pipe(map(response=>response));    
  }

  
}