import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { portfolio } from '../../data/portfolio';

type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
};

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class AboutComponent {
  protected readonly bio = portfolio.bio;
  protected readonly skills = portfolio.skills;
  protected readonly experiences: Experience[] = [
    {
      company: 'DevStudio',
      role: 'Frontend Lead',
      period: '2023 - Actualidad',
      description: 'Diseño y desarrollo de aplicaciones SPA enfocadas en dashboards interactivos para clientes enterprise.'
    },
    {
      company: 'CreativeApps',
      role: 'Frontend Developer',
      period: '2021 - 2023',
      description: 'Implementación de bibliotecas de componentes reutilizables y optimización de rendimiento en proyectos Angular.'
    },
    {
      company: 'Freelance',
      role: 'Consultor UI',
      period: '2019 - 2021',
      description: 'Creación de experiencias personalizadas para startups: landing pages, prototipos y MVPs.'
    }
  ];

  protected readonly tools = ['Figma', 'Git', 'Jira', 'Storybook', 'Cypress'];
}
