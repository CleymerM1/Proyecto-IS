import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,FormGroupDirective, NgForm, Validators } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {
  checked = false;
  hide = true;

  constructor( private modalService: NgbModal, private router: Router) { 
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
    formularioRegistro = new FormGroup( {
      nombreCompletoFormControl: new FormControl("", [Validators.required]),
      emailFormControl : new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      contraseniaFormControl: new FormControl('',[Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')]),
      telefonoFormControl: new FormControl('',[Validators.required, Validators.pattern("^((\\+504-?)|0)?[0-9]{8}$")]),
      direccionFormControl: new FormControl('',[Validators.required]),
      departamentoFormControl: new FormControl("", [Validators.required]),
      terminosFormControl: new FormControl(this.checked, [Validators.required,  Validators.requiredTrue]),
      
    })
    enviarFormulario(modal:any){
      console.log("Se envio el form")
      console.log(this.formularioRegistro.value)
      this.abrirModal(modal)
      
    }
    
    enviarAInicio(modal:any){
      modal.close('Close click')
      this.router.navigateByUrl("/login");
  
    }
    matcher = new MyErrorStateMatcher();
  ngOnInit(): void {
  }

 

  
}
