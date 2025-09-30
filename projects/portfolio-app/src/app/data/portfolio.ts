export const portfolio = {
  name: 'Felipe Segovia',
  role: 'Desarrollador Frontend',
  bio: 'Apasionado por crear experiencias web limpias, accesibles y orientadas al usuario con Angular y tecnologías modernas.',
  skills: [
    { name: 'Angular', level: 'Avanzado' },
    { name: 'TypeScript', level: 'Avanzado' },
    { name: 'RxJS', level: 'Intermedio' },
    { name: 'Tailwind CSS', level: 'Intermedio' },
    { name: 'Testing (Jest / Jasmine)', level: 'Intermedio' },
    { name: 'Node.js', level: 'Básico' }
  ],
  projects: [
    {
      name: 'TaskFlow',
      description: 'Dashboard para equipos ágiles con tableros Kanban, métricas y colaboración en tiempo real.',
      tech: ['Angular', 'NgRx', 'Firebase'],
      link: 'https://example.com/taskflow'
    },
    {
      name: 'Foodies',
      description: 'Marketplace para restaurantes locales con pedidos online y seguimiento de entregas.',
      tech: ['Angular', 'NestJS', 'PostgreSQL'],
      link: 'https://example.com/foodies'
    },
    {
      name: 'Insight Analytics',
      description: 'Panel de analítica con visualizaciones interactivas y filtros dinámicos.',
      tech: ['Angular', 'D3.js', 'Node.js'],
      link: 'https://example.com/insight-analytics'
    }
  ],
  contact: {
    email: 'felipe.dev@example.com',
    phone: '+34 600 123 456',
    location: 'Madrid, España',
    availability: 'Disponible para proyectos remotos y híbridos',
    social: {
      github: 'https://github.com/tu-usuario',
      linkedin: 'https://www.linkedin.com/in/tu-usuario',
      twitter: 'https://twitter.com/tu-usuario'
    }
  }
};
