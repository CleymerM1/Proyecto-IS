import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './Components/inicio/inicio.component';
import { LandingComponent } from './Components/landing/landing.component';
import { ListarProductosComponent } from './Components/listar-productos/listar-productos.component';
import { RegistrarUsuarioComponent } from './Components/registrar-usuario/registrar-usuario.component';
import { CategoriasComponent } from './Components/categorias/categorias.component';

//IMPORTACIONES DE PRODUCTOS
import { ElectronicaComponent } from './Components/categorias/electronica/electronica.component';
import { RopaNinioComponent } from './Components/categorias/ropaninio/ropaninio.component';
import { ArteComponent } from './Components/categorias/arte/arte.component';
import { ElectrodomesticosComponent } from './Components/categorias/electrodomesticos/electrodomesticos.component';
import { MueblesComponent } from './Components/categorias/muebles/muebles.component';
import { BienestarComponent } from './Components/categorias/bienestar/bienestar.component';


//componentes
const routes: Routes = [
  {path: '', component:LandingComponent},
  {path: 'inicio', component:InicioComponent},
  {path:'registrar-usuario',component:RegistrarUsuarioComponent},
  {path:'editar-usuario/:id', component:RegistrarUsuarioComponent},
  {path:'listar-productos', component:ListarProductosComponent},
  {path:'categorias', component:CategoriasComponent},

//PRODUCTOS 
  {path:'electronica', component:ElectronicaComponent},
  {path:'ropaninio', component:RopaNinioComponent},
  {path:'arte', component:ArteComponent},
  {path:'electrodomesticos', component:ElectrodomesticosComponent},
  {path:'muebles', component:MueblesComponent},
  {path:'bienestar', component:BienestarComponent},
  

  {path:'**', redirectTo:'',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }