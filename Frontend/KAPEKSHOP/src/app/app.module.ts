import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrarUsuarioComponent } from './Components/registrar-usuario/registrar-usuario.component';
import { InicioComponent } from './Components/inicio/inicio.component';
import { ListarProductosComponent } from './Components/listar-productos/listar-productos.component';

import { CategoriasComponent } from './Components/categorias/categorias.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingComponent } from './Components/landing/landing.component';
import { MatInputModule } from '@angular/material/input'
import { MatRadioModule} from '@angular/material/radio'
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HeaderComponent } from './Components/landing/header/header.component';
import { BodyComponent } from './Components/landing/body/body.component';
import { FooterComponent } from './Components/landing/footer/footer.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule} from '@angular/material/menu';
//imports para conectar angular con node.js/mysql
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//IMPORT PRODUCTOS
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

@NgModule({
  declarations: [
    AppComponent,
    RegistrarUsuarioComponent,
    CrearComponent,
    InicioComponent,
    ListarProductosComponent,
    CategoriasComponent,
    ElectronicaComponent,
    RopaNinioComponent,
    ArteComponent,
    ElectrodomesticosComponent,
    MueblesComponent,
    BienestarComponent,
    HogarComponent,
    JoyasComponent,
    HombreComponent,
    MujerComponent,
    MascotasComponent,
    JugueteriaComponent,
    LandingComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    MatButtonModule,
    ReactiveFormsModule,
    NgbModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    NoopAnimationsModule,
    MatMenuModule,
//imports para conectar angular con node.js/mysql
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }