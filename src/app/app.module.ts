import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarLibrosComponent } from './listar-libros/listar-libros.component';
import { PrestarLibroComponent } from './prestar-libro/prestar-libro.component';
import { LibroNuevoComponent } from './libro-nuevo/libro-nuevo.component';
import { InicialComponent } from './inicial/inicial.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarLibrosComponent,
    PrestarLibroComponent,
    LibroNuevoComponent,
    InicialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
