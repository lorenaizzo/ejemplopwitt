import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  url = "https://aqueous-spire-30568.herokuapp.com/";

  constructor(private http: HttpClient) { }


  listarLibros(){

  }


  prestarLibro() {

  }



  async borrarLibro(id){
    try{

      let respuesta: any;
      // localhost:3000/libro/aaa111
      respuesta = await this.http.delete(this.url+"libro/"+id).toPromise();

      return true;

    }
    catch(e){
      console.log(e);
      return false;
    }
  }
}
