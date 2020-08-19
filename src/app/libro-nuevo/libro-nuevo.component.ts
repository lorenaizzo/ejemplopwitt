import { Component, OnInit } from '@angular/core';
import { GeneroService } from '../genero.service';

@Component({
  selector: 'app-libro-nuevo',
  templateUrl: './libro-nuevo.component.html',
  styleUrls: ['./libro-nuevo.component.css']
})
export class LibroNuevoComponent implements OnInit {

  book = {
    name: "",
    author: "",
    gender: ""
  };

  genders: any;

  constructor(private generoService: GeneroService) { }

  ngOnInit(): void {

    this.genders = this.generoService.listaGeneros();

    console.log("generos ", this.genders);

  }


  guardar() {
    console.log("este libro voy a guardar: ", this.book);
  }
}
