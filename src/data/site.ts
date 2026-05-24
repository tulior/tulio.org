export const site = {
  name: 'Túlio Ribeiro dos Anjos',
  shortName: 'Túlio',
  handle: 'tulio.org',
  url: 'https://tulio.org',
  description: 'A small personal site for Túlio Ribeiro dos Anjos: notes, links, and a timeline.',
  defaultImage: '/img/og-banner.png',
  defaultImageAlt: 'Túlio Ribeiro dos Anjos.',

  locale: 'en',
  languageTag: 'en',
  ogLocale: 'en_US',

  email: 'mail@tulio.org',
  github: 'https://github.com/tulior',
  linkedin: 'https://linkedin.com/in/tulioanjos',

  location: 'Campo Grande, Brazil',
  workMode: 'Remote-first',

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

  pages: {
    home: {
      path: '/',
      title: 'Túlio Ribeiro dos Anjos',
    },
    artifacts: {
      path: '/artifacts/',
      title: 'Artifacts',
    },
    writing: {
      path: '/writing/',
      title: 'Writing',
    },
  },
} as const;
