import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {

  url = "https://aqueous-spire-30568.herokuapp.com/";
  generos = [
    {
      id: "GNovela",
      name: "Novela"
    },
    {
      id: "GTerror",
      name: "Terror"
    }
  ];

  constructor(private http: HttpClient) { }

  async listaGeneros(){

    try{
        let respuesta: any;

        respuesta = await this.http.get(this.url+"libro").toPromise();
        return respuesta;

    }
    catch(e){
      console.log(e);
      return [];
    }


    //return this.generos;
  }
}
