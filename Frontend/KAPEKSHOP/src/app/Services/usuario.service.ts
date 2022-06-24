import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url = 'http://localhost:3000/usuario/registro/';

  constructor(private http:HttpClient) { }


  crearUsuario(objUsuario:any): Observable<any> {
    let urlStr = `http://localhost:3000/usuario/registro/`
      return this.http.post(urlStr, objUsuario)
  }

  getUsuarios(): Observable<any>{
    
    return this.http.get(this.url);
  }
}
