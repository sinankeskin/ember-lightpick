'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'dummy',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  ENV['moment'] = {
    // To cherry-pick specific locale support into your application.
    // Full list of locales: https://github.com/moment/moment/tree/master/locale
    includeLocales: ['tr']
  };

  ENV['ember-lightpick'] = {
    lang: 'tr',
    format: 'DD.MM.YYYY',
    separator: ' - ',
    dropdowns: {
      years: {
        min: 2018,
        max: 2020
      },
      months: true
    },
    locale: {
      buttons: {
        prev: '&leftarrow;',
        next: '&rightarrow;',
        close: '&times;',
        reset: 'Reset',
        apply: 'Apply'
      },
      tooltip: {
        one: 'gün',
        other: 'gün'
      },
      tooltipOnDisabled: null
    }
  };

  return ENV;
};
