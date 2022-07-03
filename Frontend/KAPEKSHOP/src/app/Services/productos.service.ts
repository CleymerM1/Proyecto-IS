import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  url = 'http://localhost:3000/producto';
  res = '';
  constructor(private http: HttpClient) { }

  crearProducto(objProducto: any): Observable<any> {
    let urlStr = this.url + '/registro'
    return this.http.post(urlStr, objProducto)
  }

  getProducto(): Observable<any> {

    return this.http.get(this.url);
  }
}
