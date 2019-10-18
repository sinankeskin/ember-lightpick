'use strict';

module.exports = {
  name: require('./package').name,

  included(app) {
    this._super.included.apply(this, arguments);

    app.import('node_modules/lightpick/lightpick.js');
    app.import('node_modules/lightpick/css/lightpick.css');
  }
};