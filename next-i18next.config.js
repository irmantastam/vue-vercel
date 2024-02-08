const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'en-US',
    locales: ['en-US', 'lt'],
    localeDetection: false,
  },
  localePath: path.resolve('./public/locales'),
};
