import { Component, OnInit } from '@angular/core';
import { LibroService } from '../libro.service';

@Component({
  selector: 'app-listar-libros',
  templateUrl: './listar-libros.component.html',
  styleUrls: ['./listar-libros.component.css']
})
export class ListarLibrosComponent implements OnInit {

  constructor(private libroService = LibroService) { }

  ngOnInit(): void {
  }


  borrarLibro(idLibro){

    this.libroService.borrar(idLibro);
  }
}
