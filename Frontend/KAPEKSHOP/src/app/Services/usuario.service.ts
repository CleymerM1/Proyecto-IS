import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url='/usuario/registro'
  constructor(private http: HttpClient) { }

  getUsuario(){
    return this.http.get(this.url);
  }
}
