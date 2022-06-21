import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './Components/inicio/inicio.component';
import { LandingComponent } from './Components/landing/landing.component';
import { ListarProductosComponent } from './Components/listar-productos/listar-productos.component';
import { RegistrarUsuarioComponent } from './Components/registrar-usuario/registrar-usuario.component';

//componentes
const routes: Routes = [
  {path: '', component:LandingComponent},
  {path: 'inicio', component:InicioComponent},
  {path:'registrar-usuario',component:RegistrarUsuarioComponent},
  {path:'editar-usuario/:id', component:RegistrarUsuarioComponent},
  {path:'listar-productos', component:ListarProductosComponent},
  {path:'**', redirectTo:'',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
