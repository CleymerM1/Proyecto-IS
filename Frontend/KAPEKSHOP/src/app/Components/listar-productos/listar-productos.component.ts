import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductosService } from 'src/app/Services/productos.service';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent implements OnInit {

  constructor(private productosService: ProductosService) {

  }

  ngOnInit(): void {
    this.productosService.getProducto()
    .subscribe( result => {
      console.log('respuesta de la base de datos -------->', result)
    })
  }

}
