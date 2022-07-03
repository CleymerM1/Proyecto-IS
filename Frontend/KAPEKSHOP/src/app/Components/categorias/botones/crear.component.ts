import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,FormGroupDirective, NgForm, Validators } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { ModalErrorComponent} from 'src/app/Components/modal-error/modal-error.component'
import { ModalExitoComponent } from 'src/app/Components/modal-exito/modal-exito.component';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductosService } from 'src/app/Services/productos.service'
import { ConfigModal} from 'src/app/interfaces/config-modal'

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  checked = false;
  hide = true;

  constructor( private modalService: NgbModal, private router: Router, private productosService:ProductosService ) { 
  }

  crearProducto = () => {
    console.log('metodo crear producto')
    const values = {
      'nombre': 'Producto de Prueba',
      'precio': '999999999',
      'estado': 'Nuevo',
      'descuento': '0',
      'descripcion': 'Nuevas en caja'
    }

    this.productosService.crearProducto(values)
    .subscribe( result => {console.log('respuesta de metodo crear producto', result)})

  }

  abrirModal( modal:any ){

    this.modalService.open(
      modal,
      {
        size: 'xs',
        centered: true
      }
      );

    }
    formularioCrear = new FormGroup( {
      nombreFormControl: new FormControl("", [Validators.required]),
      costoFormControl: new FormControl("", [Validators.required]),
      estadoFormControl : new FormControl('', [Validators.required]),
      descuentoFormControl: new FormControl('',[Validators.required]),
      descripcionFormControl: new FormControl('',[Validators.required]),
      
    })
    enviarFormulario(modal:any){
      
      if( !this.formularioCrear.invalid) {

        let usuario = {
          nombre: this.formularioCrear.get('nombreFormControl')?.value,
          costo:this.formularioCrear.get('costoFormControl')?.value,
          estado:this.formularioCrear.get('estadoFormControl')?.value,
          descuento:this.formularioCrear.get('descuentoFormControl')?.value,
          descripcion:this.formularioCrear.get('descripcionFormControl')?.value,
        }

        this.productosService.crearProducto(Producto).subscribe( (res:any) => {
          console.log(res)
          let config:ConfigModal = {
            titulo1: '¡Excelente!',
            titulo2: res.msj
          }
          this.open('exito',config )
        }, (err:any) => {
          let config:ConfigModal = {
            titulo1: '¡Error!',
            titulo2: err.error.msj ||'No se pudo registrar el usuario'
          }
          console.log(err)
          this.open('error',config )
        })
      }

      
    }
    
    enviarAInicio(modal:any){
      modal.close('Close click')
      this.router.navigateByUrl("/login");
  
    }
    matcher = new MyErrorStateMatcher();
  ngOnInit(): void {
  }

  open(tipoModal:string, config:ConfigModal) {


    let modalRef:NgbModalRef;
    switch (tipoModal) {

      case 'exito':
        modalRef = this.modalService.open(ModalExitoComponent)
        modalRef.componentInstance.mensaje = config

        break;
      case 'error':
        modalRef = this.modalService.open(ModalErrorComponent)
        modalRef.componentInstance.mensaje = config
        break;
    
      default:
        break;
    }
  }
 

  
}
