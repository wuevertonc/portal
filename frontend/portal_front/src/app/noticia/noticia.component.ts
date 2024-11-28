import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NoticiaService } from '../service/noticia.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-noticia',
  standalone: true,
  imports: [NgFor, RouterModule],
  templateUrl: './noticia.component.html',
  styleUrl: './noticia.component.css'
})
export class NoticiaComponent implements OnInit {
  noticia$: any;
  categoria: any;

  constructor(private noticiaService: NoticiaService, private router: Router){

  }
  ngOnInit(): void {
    this.getCategoria();
  }

  public async getCategoria(){
    this.noticia$ = await lastValueFrom(this.noticiaService.get());
    
  }


  public editar(id: number){
    //this.categoria = await lastValueFrom(this.categoriaService.getCategoriaById(id));
    this.router.navigate(['noticia/editar/', id]);
    console.log(id);
  }

  public async remover(id: number){
    let ret = await lastValueFrom(this.noticiaService.remover(id));
    this.noticia$ = await lastValueFrom(this.noticiaService.get());
  }
}
