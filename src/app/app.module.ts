import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

//Rutas
import { APP_ROUTES } from './app.routes';


import { AppComponent } from './app.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';



import 'hammerjs';
import { MaterialModule } from './material/material.module';

//ngx boostrap para el carousel , modal ,ect
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ModalModule } from 'ngx-bootstrap/modal';

//Servicios
import { AbogadoService } from './services/abogado.service';


// Las otras direcciones
import { PagesModule } from './paginas/pages.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';


@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    APP_ROUTES,
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    PagesModule

  ],
  providers: [
    AbogadoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
