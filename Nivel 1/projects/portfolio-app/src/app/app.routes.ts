import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about';
import { ContactComponent } from './pages/contact/contact';
import { HomeComponent } from './pages/home/home';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Inicio | Portfolio' },
  { path: 'sobre-mi', component: AboutComponent, title: 'Sobre mí | Portfolio' },
  { path: 'contacto', component: ContactComponent, title: 'Contacto | Portfolio' },
  { path: '**', redirectTo: '' }
];
