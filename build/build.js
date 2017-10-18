var webpack = require('webpack')
var webpackConfig = require('./webpack.base.conf')
webpack(webpackConfig,function(err, stats) {
  process.stdout.write(stats.toString({
  colors: true,
  modules: false,
  children: false,
  chunks: false,
  chunkModules: false
}) + '\n\n')
});
