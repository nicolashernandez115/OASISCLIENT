import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component'


const routes: Routes = [
  { path: 'hoteles', component: InicioComponent, pathMatch: 'full' }
];

export const app_routing = RouterModule.forRoot(routes);