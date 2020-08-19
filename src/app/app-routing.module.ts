import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicialComponent } from './inicial/inicial.component';
import { LibroNuevoComponent } from './libro-nuevo/libro-nuevo.component';
import { PrestarLibroComponent } from './prestar-libro/prestar-libro.component';
import { ListarLibrosComponent } from './listar-libros/listar-libros.component'

const routes: Routes = [
  {path: "", component: InicialComponent},
  {path: "nuevo", component: LibroNuevoComponent},
  {path: "prestar", component: PrestarLibroComponent},
  {path: "listar", component: ListarLibrosComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
