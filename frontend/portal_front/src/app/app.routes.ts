import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { NoticiaFormComponent } from './noticia/noticia-form/noticia-form.component';
import { CategoriaFormComponent } from './categoria/categoria-form/categoria-form.component';
import { ComentarioComponent } from './comentario/comentario.component';
import { ComentarioFormComponent } from './comentario/comentario-form/comentario-form.component';


export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: '', component: HomeComponent},
    {path: 'categoria', component: CategoriaComponent},
    {path: 'categoria/novo', component: CategoriaFormComponent},
    {path: 'categoria/editar/:id', component: CategoriaFormComponent},
    {path: 'noticia', component: NoticiaComponent},
    {path: 'noticia/novo', component: NoticiaFormComponent},
    {path: 'noticia/editar/:id', component: NoticiaFormComponent},
    {path: 'comentario', component: ComentarioComponent},
    {path: 'comentario/novo', component: ComentarioFormComponent},
    {path: 'comentario/editar/:id', component: ComentarioFormComponent}
];
