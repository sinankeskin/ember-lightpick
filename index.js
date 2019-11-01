'use strict';

module.exports = {
  name: require('./package').name,

  included(app) {
    this._super.included.apply(this, arguments);

    app.import('node_modules/lightpick/lightpick.js');

    let hasSass = !!app.registry.availablePlugins['ember-cli-sass'];

    if (!hasSass) {
      app.import('vendor/ember-lightpick.css');
    }
  }
};
