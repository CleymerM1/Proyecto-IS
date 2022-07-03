import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './Components/inicio/inicio.component';
import { LandingComponent } from './Components/landing/landing.component';
import { ListarProductosComponent } from './Components/listar-productos/listar-productos.component';
import { RegistrarUsuarioComponent } from './Components/registrar-usuario/registrar-usuario.component';
import { CategoriasComponent } from './Components/categorias/categorias.component';
import { AuthGuard } from 'src/app/auth/auth.guard';


//IMPORTACIONES DE PRODUCTOS
import { ElectronicaComponent } from './Components/categorias/electronica/electronica.component';
import { RopaNinioComponent } from './Components/categorias/ropaninio/ropaninio.component';
import { ArteComponent } from './Components/categorias/arte/arte.component';
import { ElectrodomesticosComponent } from './Components/categorias/electrodomesticos/electrodomesticos.component';
import { MueblesComponent } from './Components/categorias/muebles/muebles.component';
import { BienestarComponent } from './Components/categorias/bienestar/bienestar.component';
import { HogarComponent } from './Components/categorias/hogar/hogar.component';
import { JoyasComponent } from './Components/categorias/joyas/joyas.component';
import { HombreComponent } from './Components/categorias/hombre/hombre.component';
import { MujerComponent } from './Components/categorias/mujer/mujer.component';
import { MascotasComponent } from './Components/categorias/mascotas/mascotas.component';
import { JugueteriaComponent } from './Components/categorias/jugueteria/jugueteria.component';


//BOTONES
import { CrearComponent } from './Components/categorias/botones/crear.component';

//componentes
const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'registrar-usuario', component: RegistrarUsuarioComponent },
  { path: 'editar-usuario/:id', component: RegistrarUsuarioComponent },
  { path: 'listar-productos', component: ListarProductosComponent },
  { path: 'categorias', component: CategoriasComponent },

  {path: '', component:LandingComponent},
  {path: 'inicio', component:InicioComponent},
  {path:'registrar-usuario',component:RegistrarUsuarioComponent},
  {path:'editar-usuario/:id', component:RegistrarUsuarioComponent},
  {path:'listar-productos', component:ListarProductosComponent},
  {path:'categorias', component:CategoriasComponent, canActivate:[AuthGuard]},

  //BOTONES
  { path: 'crear', component: CrearComponent },


  //PRODUCTOS 
  { path: 'electronica', component: ElectronicaComponent },
  { path: 'ropaninio', component: RopaNinioComponent },
  { path: 'arte', component: ArteComponent },
  { path: 'electrodomesticos', component: ElectrodomesticosComponent },
  { path: 'muebles', component: MueblesComponent },
  { path: 'bienestar', component: BienestarComponent },
  { path: 'hogar', component: HogarComponent },
  { path: 'joyas', component: JoyasComponent },
  { path: 'hombre', component: HombreComponent },
  { path: 'mujer', component: MujerComponent },
  { path: 'mascotas', component: MascotasComponent },
  { path: 'jugueteria', component: JugueteriaComponent },


  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
