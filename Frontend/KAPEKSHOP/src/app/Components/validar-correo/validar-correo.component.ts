import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ConfigModal } from 'src/app/interfaces/config-modal';
import { UsuarioService } from 'src/app/Services/usuario.service';
import { ModalErrorComponent } from 'src/app/Components/modal-error/modal-error.component';
import { ModalExitoComponent } from 'src/app/Components/modal-exito/modal-exito.component';

@Component({
  selector: 'app-validar-correo',
  templateUrl: './validar-correo.component.html',
  styleUrls: ['./validar-correo.component.css']
})
export class ValidarCorreoComponent implements OnInit {
  //token: String | null | undefined   MALO
  constructor(private route: ActivatedRoute,  private usuarioService:UsuarioService, private router: Router, private modalService:NgbModal) { }//se importa el route en el constructor

  ngOnInit(): void {
    // let token= this.route.snapshot.paramMap.get('token')
    //validar el token en el backend
    let token = this.route.snapshot.paramMap.get('token')
    // Validar el token en el backend
    this.usuarioService.validarCorreo(token).subscribe( (res:any)=> {
      this.open('exito', {
        titulo1: '!Excelente!',
        titulo2: 'Su cuenta ha sido verificada correctamente'
      })
      this.router.navigateByUrl('/inicio')
    }, (err:any) => {
      this.open('error', {
        titulo1: '!Error!',
        titulo2: 'Token no válido'
      })
    })
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


