const pkg = require('../package.json');
const magicImporter = require('node-sass-magic-importer');

module.exports = [
    magicImporter(pkg.magicImporter)
];
