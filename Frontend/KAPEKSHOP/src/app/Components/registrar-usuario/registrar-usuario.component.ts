import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';


@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {
  FormularioRegistro: FormGroup;
  mensajeError="";

  constructor( private fb: FormBuilder,
              private router:Router) { 
    this.FormularioRegistro=this.fb.group({
      NombreCompleto: ['',Validators.required],
      Correo: ['',Validators.required, Validators.email],
      Contraseña: ['',Validators.required, [Validators.minLength(8), Validators.maxLength(32)],Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')],
      Direccion: ['',Validators.required],
      Departamento: ['',Validators.required],
      Terminos: ['',Validators.requiredTrue]
    })
  }

  ngOnInit(): void {
  }

  RegistrarUsuario(){
    
  const USUARIO: Usuario={
    NombreCompleto: this.FormularioRegistro.get('NombreCompleto')?.value,
    correo: this.FormularioRegistro.get('Correo')?.value,
    contrasenia: this.FormularioRegistro.get('Contraseña')?.value,
    direccion: this.FormularioRegistro.get('Direccion')?.value,
    departamento: this.FormularioRegistro.get('Departamento')?.value
  }
  console.log(USUARIO);
 
  this.router.navigate(['/']);
  }

  
}
