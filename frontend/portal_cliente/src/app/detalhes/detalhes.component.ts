import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoticiaService } from '../service/noticia.service';
import { Router } from 'express';
import { lastValueFrom } from 'rxjs';
import { CommonModule } from '@angular/common'; 
import { Comentario } from '../model/comentario.model';
import { ComentarioService } from '../service/comentario.service';

@Component({
  selector: 'app-detalhes',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './detalhes.component.html',
  styleUrl: './detalhes.component.css'
})
export class DetalhesComponent implements OnInit{

  private activateRoute = inject(ActivatedRoute);
  id:any;
  noticia:any;
  comentarios: Array<{ usuario?: { pessoa?: { nome?: string } }, texto?: string }> = []; 
  constructor(private noticiaService: NoticiaService){

  }
  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id'];
    this.getById();
  }

  public async getById() {
    this.noticia = await lastValueFrom(this.noticiaService.getById(this.id));
  }
  
  
 

}