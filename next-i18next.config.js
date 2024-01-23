const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'lt'],
    localeDetection: false,
  },
  localePath: path.resolve('./public/locales'),
};
