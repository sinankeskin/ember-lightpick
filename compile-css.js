/* eslint-env node */

const sass = require('sass');
const fs = require('fs');
const path = require('path');

const inputFile = path.join(
  __dirname,
  'node_modules/lightpick/scss/lightpick.scss'
);

const copyFile = path.join(__dirname, 'app/styles/ember-lightpick.scss');

if (!fs.existsSync(copyFile)) {
  fs.copyFile(inputFile, copyFile, err => {
    if (err) throw err;
  });
}

const outputFile = path.join(__dirname, 'vendor', 'ember-lightpick.css');

const buf = fs.readFileSync(inputFile, 'utf8');

var result = sass.renderSync({
  data: buf,
  includePaths: ['app/styles']
});

fs.writeFileSync(outputFile, result.css);
