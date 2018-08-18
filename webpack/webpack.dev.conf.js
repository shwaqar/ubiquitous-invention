'use strict';

const merge = require('webpack-merge');
const { server } = require('./config');
const webpack = require('webpack');

const loaders = require('./loaders');
const common = require('./webpack.common.conf.js');

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: 'scripts/[name].js'
  },
  devtool: 'eval',
  devServer: {
    contentBase: './dist',
    disableHostCheck: true,
    host: server.host,
    port: server.port,
    watchOptions: {
      ignored: /node_modules/
    },
    overlay: true,
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.SourceMapDevToolPlugin({
      exclude: /\.js$/
    })
  ]
});
