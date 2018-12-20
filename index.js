const stylemark = require('stylemark');

module.exports = function (bundler) {
   bundler.on('buildEnd', () => {
      let opts = bundler.options;
      let rootDir = bundler.resolver.rootPackage.pkgdir;
      let configPath = rootDir + '/.stylemark.yml';

      stylemark({input: rootDir, output: opts.outDir + '/stylemark', configPath});
   })
};