export const site = {
  name: 'Túlio Ribeiro dos Anjos',
  url: 'https://tulio.org',
  description: 'Backend notes, production fixes, integration seams, and small public tools by Túlio Ribeiro dos Anjos.',
  defaultImage: '/img/og-banner.png',
  defaultImageAlt: 'Túlio Ribeiro dos Anjos.',

  ogLocale: 'en_US',

  email: 'mail@tulio.org',
  github: 'https://github.com/tulior',
  linkedin: 'https://linkedin.com/in/tulioanjos',

  identity: {
    fullName: 'Túlio Ribeiro dos Anjos',
    givenName: 'Túlio',
    familyName: 'Ribeiro dos Anjos',
    alternateNames: ['Túlio Anjos', 'Tulio Ribeiro dos Anjos', 'Tulio Anjos'],
    role: 'Backend systems engineer',
    summary: 'I write backend software, mostly .NET, integrations, cloud services, and production fixes.',
    location: {
      city: 'Campo Grande',
      region: 'Mato Grosso do Sul',
      country: 'Brazil',
    },
    sameAs: [
      'https://github.com/tulior',
      'https://linkedin.com/in/tulioanjos',
      'https://tulio.org',
    ],
    knowsAbout: [
      '.NET',
      'C#',
      'backend systems',
      'cloud integrations',
      'API design',
      'distributed systems',
      'systems integration',
      'software architecture',
    ],
  },
} as const;
