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
<<<<<<< HEAD
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
=======
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
>>>>>>> 797863e5d1eecda281bf81bb4d250b30ff4b51f0

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
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    MatButtonModule,
    ReactiveFormsModule,
    NgbModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
<<<<<<< HEAD
    NoopAnimationsModule
=======
    BrowserAnimationsModule
>>>>>>> 797863e5d1eecda281bf81bb4d250b30ff4b51f0
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }