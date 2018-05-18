import { RouterModule, Routes } from '@angular/router'
//Importacion de componentes

import { NosotrosComponent } from './nosotros/nosotros.component';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';
import { TrabajaComponent } from './trabaja/trabaja.component';
import { MisionComponent } from './mision/mision.component';
import { AreasComponent } from './areas/areas.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AbogadoComponent } from './abogado/abogado.component';



const pagesRoutes: Routes = [

    { path: '',                     
      component: PagesComponent,
      children: [
        { path: 'trabaja',      component: TrabajaComponent },
        { path: 'home',         component: HomeComponent },
        { path: 'nosotros',     component: NosotrosComponent },
        { path: 'mision',       component: MisionComponent },
        { path: 'areas',        component: AreasComponent },
        { path: 'contacto',     component: ContactoComponent },
        { path: 'abogado/:id',   component: AbogadoComponent },
        { path: '',         redirectTo:'/home', pathMatch: 'full' },
      ]

    },
    
];


export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);