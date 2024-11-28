import { Component, inject, OnInit } from '@angular/core';
import { ComentarioService } from '../../service/comentario.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { Comentario } from '../../model/comentario.model';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Usuario } from '../../model/usuario.model'; // Importando corretamente
import { Noticia } from '../../model/noticia.model'; // Importando corretamente
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-comentario-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgFor, RouterModule],
  templateUrl: './comentario-form.component.html',
  styleUrls: ['./comentario-form.component.css'],
})
export class ComentarioFormComponent implements OnInit {
  comentario$: Comentario[] = [];  // Comentarios são um array
  comentario: Comentario = new Comentario();
  private activateRoute = inject(ActivatedRoute);
  id: any;

  form = new FormGroup({
    id: new FormControl<number | null>(null),
    usuario: new FormControl<Usuario | null>(null),
    noticia: new FormControl<Noticia | null>(null),
    texto: new FormControl<string | null>(null),
  });

  constructor(private comentarioService: ComentarioService, private router: Router) {}

  ngOnInit(): void {
    this.getComentarios();
    this.id = this.activateRoute.snapshot.params['id'];
    if (this.id) {
      this.getComentarioById();
    }
  }

  public async getComentarios() {
    this.comentario$ = await lastValueFrom(this.comentarioService.get()) as Comentario[];
  }

  public async getComentarioById() {
    this.comentario = await lastValueFrom(this.comentarioService.getById(this.id)) as Comentario;
    this.form.controls.id.setValue(this.comentario.id);
    this.form.controls.usuario.setValue(this.comentario.usuario);
    this.form.controls.noticia.setValue(this.comentario.noticia);
    this.form.controls.texto.setValue(this.comentario.texto ?? null);
  }

  public salvar() {
    // Lógica para salvar ou atualizar o comentário
    this.comentario.id = this.form.controls.id.value;
    this.comentario.usuario = this.form.controls.usuario.value;
    this.comentario.noticia = this.form.controls.noticia.value;
    this.comentario.texto = this.form.controls.texto.value;

    this.comentarioService.salvar(this.comentario).subscribe(
      (comentario) => {
        this.router.navigate(['comentario']);
        console.log(comentario);
      },
      (erro) => {
        console.log(erro);
      }
    );
  }
}
