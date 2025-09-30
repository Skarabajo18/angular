import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { portfolio } from './data/portfolio';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly profile = portfolio;
  protected readonly navItems = [
    { label: 'Inicio', path: '/' },
    { label: 'Sobre mí', path: '/sobre-mi' },
    { label: 'Contacto', path: '/contacto' }
  ];
}
