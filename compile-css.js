/* eslint-env node */
const sass = require('node-sass');
const fs = require('fs');
const path = require('path');

const inputFile = path.join(
  __dirname,
  'node_modules/lightpick/scss/lightpick.scss'
);

const outputFile = path.join(__dirname, 'vendor', 'ember-lightpick.css');

const buf = fs.readFileSync(inputFile, 'utf8');

var result = sass.renderSync({
  data: buf,
  includePaths: ['node_modules/lightpick/scss']
});

fs.writeFileSync(outputFile, result.css);
