module.exports = [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', 'market-assets.strapi.io'],
          'media-src': ["'self'", 'data:', 'blob:'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      origin: [
        'https://anant-feeds-git-main-anandfeeds-projects.vercel.app',
        'https://anant-feeds.vercel.app',
        'http://localhost:3000',
        'https://kushal-f-git-main-gavisohal87-gmailcoms-projects.vercel.app'
      ],
      methods: ['GET','POST','PUT','PATCH','DELETE','OPTIONS'],
      headers: ['Content-Type','Authorization','Origin','Accept','X-Requested-With'],
      credentials: true
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
