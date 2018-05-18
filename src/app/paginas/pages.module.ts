import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule}  from '@angular/forms';
import { RouterModule } from '@angular/router';
import {CommonModule} from '@angular/common';


//angular Materrial
import { MaterialModule } from '../material/material.module';

//Rutas de la aplicacion
import { PAGES_ROUTES } from './pages.routes'

//componentes
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { PagesComponent } from './pages.component';
import { MisionComponent } from './mision/mision.component';
import { AbogadoComponent } from './abogado/abogado.component';
import { AreasComponent } from './areas/areas.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { TrabajaComponent } from './trabaja/trabaja.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ModalModule } from 'ngx-bootstrap/modal';



@NgModule({
    declarations: [
      HomeComponent,
      NosotrosComponent,   
      PagesComponent,
      MisionComponent,
      AbogadoComponent,
      AreasComponent,
      ContactoComponent,
      FooterComponent,
      HeaderComponent,
      TrabajaComponent  
    ],
    imports: [
      BrowserModule,
      CommonModule,
      MaterialModule,
      PAGES_ROUTES,
      CarouselModule.forRoot(),
      ModalModule.forRoot(),
      FormsModule,
      ReactiveFormsModule
    ],
    providers: [],
    exports:[
      HomeComponent,
      NosotrosComponent,
      PagesComponent,
      MisionComponent,
      AbogadoComponent,
      AreasComponent,
      ContactoComponent,
      FooterComponent,
      HeaderComponent,
      TrabajaComponent
    ]
  })
  
  export class PagesModule { }