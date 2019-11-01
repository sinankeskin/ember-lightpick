'use strict';

const fs = require('fs');
const path = require('path');

module.exports = {
  description: '',

  beforeInstall() {
    let preprocessor = 'none';

    let dependencies = this.project.dependencies();

    if ('ember-cli-sass' in dependencies) {
      preprocessor = 'sass';
    }

    this.preprocessor = preprocessor;
  },

  afterInstall() {
    return this.addAddonsToProject({ packages: ['ember-lightpick'] }).then(() =>
      this.addPreprocessorStyleImport()
    );
  },

  addPreprocessorStyleImport() {
    let preprocessor = this.preprocessor;

    if (preprocessor === 'none') {
      return;
    }

    let importStatement = '\n@import "ember-lightpick";\n';

    let extension = preprocessor === 'sass' ? 'scss' : '';

    let stylePath = path.join('app', 'styles');

    let file = path.join(stylePath, `app.${extension}`);

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
};
