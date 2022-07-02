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
      apellidoCompletoFormControl: new FormControl("", [Validators.required]),
      emailFormControl : new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      contraseniaFormControl: new FormControl('',[Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')]),
      telefonoFormControl: new FormControl('',[Validators.required, Validators.pattern("^((\\+504-?)|0)?[0-9]{8}$")]),
      direccionFormControl: new FormControl('',[Validators.required]),
      departamentoFormControl: new FormControl("", [Validators.required]),
      terminosFormControl: new FormControl(this.checked, [Validators.required,  Validators.requiredTrue]),
      
    })
    enviarFormulario(modal:any){
      
      if( !this.formularioCrear.invalid) {

        let usuario = {
          nombre: this.formularioCrear.get('nombreCompletoFormControl')?.value,
          apellido:this.formularioCrear.get('apellidoCompletoFormControl')?.value,
          correo:this.formularioCrear.get('emailFormControl')?.value,
          direccion:this.formularioCrear.get('direccionFormControl')?.value,
          departamento:this.formularioCrear.get('departamentoFormControl')?.value,
          contrasenia: this.formularioCrear.get('contraseniaFormControl')?.value,
          estado: null,
          telefono :this.formularioCrear.get('telefonoFormControl')?.value,
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
