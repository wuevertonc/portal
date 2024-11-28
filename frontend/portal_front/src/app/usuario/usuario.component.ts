import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { Router, RouterModule } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [NgFor, RouterModule],
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
})
export class UsuarioComponent implements OnInit {
  usuarios$: any;

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  ngOnInit(): void {
    this.getUsuarios();
  }

  public async getUsuarios() {
    this.usuarios$ = await lastValueFrom(this.usuarioService.get());
  }

  public editar(id: number) {
    this.router.navigate(['usuario/editar/', id]);
    console.log(id);
  }

  public async remover(id: number) {
    await lastValueFrom(this.usuarioService.remover(id));
    this.usuarios$ = await lastValueFrom(this.usuarioService.get());
  }
}
