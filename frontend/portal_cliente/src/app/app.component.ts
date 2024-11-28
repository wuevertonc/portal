import { Component, OnInit } from '@angular/core';
import { Route, Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { CategoriaService } from './service/categoria.service';
import { NoticiaService } from './service/noticia.service';  // Importa o NoticiaService
import { lastValueFrom, map } from 'rxjs';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, RouterLink, RouterLinkActive, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  
  title = 'portal_cliente';

  categoria$: any;
  noticia$: any;  // Definindo a propriedade noticia$

  constructor(
    private categoriaService: CategoriaService, 
    private noticiaService: NoticiaService,  // Injeta o NoticiaService
    private router: Router
  ) {}

  ngOnInit(): void {    
    this.getCategorias();
    this.getNoticias();  // Chama o método para buscar as notícias
  }
  
  public async getCategorias() {
    this.categoria$ = await lastValueFrom(this.categoriaService.getDestaques());
  }

  public async getNoticias() {
    this.noticia$ = await lastValueFrom(this.noticiaService.findOneByUltimaNoticiaByTodas());
  }

  public abrirCategoria(id: any) {
    this.router.navigate(['noticia/', id]);
  }
}
