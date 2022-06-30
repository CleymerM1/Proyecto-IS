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
  {path:'**', redirectTo:'',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }