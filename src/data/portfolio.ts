export const profile = {
  name: 'Matias Verguet--Bailly',
  email: 'matiasverguet@gmail.com',
  phone: '07 83 94 12 05',
  phoneHref: '+33783941205',
  location: 'Belfort, Montbéliard et les alentours',
  // Texte fourni dans la maquette : à actualiser pour la prochaine recherche.
  internship: 'Stage du 29 mars au 4 juin 2026',
};

export const projects = [
  { title: 'Chorus Symphonia', category: 'Web design', image: '/images/chorus.webp', hoverImage: '/images/chorus-hover.png', href: '/projets/chorus-symphonia', number: '01', cardTitle: 'Identité visuelle & maquettage', tags: ['Branding', 'UI', '2025'] },
  { title: 'Affiche Montbéliard', category: 'Graphisme', image: '/images/montbeliard.webp', hoverImage: '/images/montbeliard-hover.png', number: '02', cardTitle: 'Design d’affiche', tags: ['Affiche', 'Édition', '2025'] },
  { title: 'La Cimade', category: 'Identité de marque', image: '/images/cimade.webp', hoverImage: '/images/cimade-hover.png', href: '/projets/la-cimade', number: '03', cardTitle: 'Identité visuelle', tags: ['Branding', 'Print', '2025'] },
];

export const skills = [
  {
    title: 'Design UI/UX',
    description: [
      'Wireframe & prototypage',
      'Conception d’interfaces utilisateur pour sites web et applications',
      'Tests d’utilisabilité et analyse des retours utilisateurs',
      'Conception d’interactions et micro-animations',
    ],
  },
  {
    title: 'Graphisme',
    description: [
      'Conception de logo et d’identité de marque',
      'Création de visuels pour réseaux sociaux et supports publicitaires',
      'Infographies et visualisation de données',
      'Illustrations et icônes personnalisées',
    ],
  },
  {
    title: 'Développement Web',
    description: [
      'Conception et intégration de sites web responsives avec HTML, CSS et JavaScript.',
      'Développement d’interfaces dynamiques et interactives avec MySQL pour la gestion des données.',
      'Implémentation de composants interactifs et d’animations fluides pour améliorer l’engagement utilisateur.',
    ],
  },
  {
    title: 'Identité de marque',
    description: [
      'Stratégie de marque et développement de l’identité',
      'Élaboration de chartes graphiques',
      'Choix typographique et harmonisation des couleurs',
      'Conception narrative et positionnement de marque',
    ],
  },
];
