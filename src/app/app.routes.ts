import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';




const appRoutes : Routes = [

    { path: '**',           component: NopagefoundComponent },

];


export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true });