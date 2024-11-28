import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria } from '../model/categoria.model';
import { Observable } from 'rxjs';
import { GenericServiceService } from './generic-service.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService extends GenericServiceService<Categoria> {

  constructor(handler: HttpBackend) { 
    let url = "http://localhost:8080/categoria";
    super(handler, url);
  }

  /*private http: HttpClient;

  constructor(handler: HttpBackend) { 
    this.http = new HttpClient(handler);
  }

  public getCategorias(){
    return this.http.get('http://localhost:8080/categoria/listar').pipe(map(response=>response));    
  }

  public getCategoriaById(id: number){
    return this.http.get('http://localhost:8080/categoria/listar/'+id).pipe(map(response=>response));    
  }

  public salvar(categoria: Categoria): Observable<Categoria>{
    const headers = new HttpHeaders();
    headers.set("Content-Type", "Application/json");
    if(categoria.id !== null){
      return this.http.put<Categoria>(`http://localhost:8080/categoria/atualizar/${categoria.id}`, categoria, {headers});
    }
    return this.http.post<Categoria>('http://localhost:8080/categoria/novo', categoria, {headers});  
    
  }

  public remover(id:number){
    return this.http.delete<Categoria>('http://localhost:8080/categoria/remover/'+id).pipe(map(response=>response));
  }*/
}
