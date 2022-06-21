import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrarUsuarioComponent } from './Components/registrar-usuario/registrar-usuario.component';
import { InicioComponent } from './Components/inicio/inicio.component';
import { ListarProductosComponent } from './Components/listar-productos/listar-productos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingComponent } from './Components/landing/landing.component';
import { HeaderComponent } from './Components/landing/header/header.component';
import { BodyComponent } from './Components/landing/body/body.component';
import { FooterComponent } from './Components/landing/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrarUsuarioComponent,
    InicioComponent,
    ListarProductosComponent,
    LandingComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
