const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');

const devConfig = {
  mode: 'development',
  devServer: {
    port: 9000,
    stats: {
      colors: true,
      hash: false,
      version: false,
      timings: false,
      assets: false,
      chunks: false,
      modules: false,
      reasons: false,
      children: false,
      source: false,
      errors: false,
      errorDetails: false,
      warnings: false,
      publicPath: false
    }
  },
  devtool: 'source-map'
};

module.exports = merge(baseConfig, devConfig);
