/* eslint-env node */
'use strict';

const fs = require('fs');
const path = require('path');

module.exports = {
  description: 'Adds style imports for the ember-lightpick addon.',

  normalizeEntityName() {
    // this prevents an error when the entityName is
    // not specified (since that doesn't actually matter
    // to us
  },

  afterInstall() {
    const dependencies = this.project.dependencies();

    if ('ember-cli-sass' in dependencies) {
      const importStatement = '\n@import "ember-lightpick";\n';

      const extension = 'scss';

      const stylePath = path.join('app', 'styles');

      const file = path.join(stylePath, `app.${extension}`);

      if (!fs.existsSync(stylePath)) {
        fs.mkdirSync(stylePath);
      }

      if (fs.existsSync(file)) {
        this.ui.writeLine(`Added import statement to ${file}`);

        return this.insertIntoFile(file, importStatement);
      } else {
        this.ui.writeLine(`Created ${file}`);

        return fs.writeFile(file, importStatement);
      }
    }
  }
};
