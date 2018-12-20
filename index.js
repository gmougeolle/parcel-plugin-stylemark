const stylemark = require('stylemark');

module.exports = function (bundler) {
   bundler.on('buildEnd', () => {
        let opts = bundler.options;
        let configPath = bundler.resolver.rootPackage.pkgdir + '/.stylemark.yml';

        stylemark({input: opts.outDir, output: opts.outDir + '/stylemark', configPath});
   })
};