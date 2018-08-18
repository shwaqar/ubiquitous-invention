'use strict';

const path = require('path');

const config = require('./config');
const loaders = require('./loaders');
const plugins = require('./plugins');

module.exports = {
  entry: {
    app: path.join(config.paths.src, '/app/app.js')
  },
  output: {
    path: config.paths.dist
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    },
    runtimeChunk: 'single'
  },
  plugins: [
    plugins.cleanDist,
    plugins.generateIndex,
    plugins.provideGlobalModules
  ],
  module: {
    rules: [
      loaders.html,
      loaders.scripts,
      loaders.styles
    ]
  }
};
