import { Component, OnInit } from '@angular/core';
import { ComentarioService } from '../service/comentario.service';
import { Router, RouterModule } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-categoria',
  standalone: true,
  imports: [NgFor, RouterModule],
  templateUrl: './comentario.component.html',
  styleUrl: './comentario.component.css'
})
export class ComentarioComponent implements OnInit{

  comentario$: any;
  comentario: any;

  constructor(private comentarioService: ComentarioService, private router: Router){

  }
  ngOnInit(): void {
    this.getComentario();
  }

  public async getComentario(){
    this.comentario$ = await lastValueFrom(this.comentarioService.get());
    
  }


  public editar(id: number){
    
    this.router.navigate(['comentario/editar/', id]);
    console.log(id);
  }

  public async remover(id: number){
    let ret = await lastValueFrom(this.comentarioService.remover(id));
    this.comentario$ = await lastValueFrom(this.comentarioService.get());
  }

}
