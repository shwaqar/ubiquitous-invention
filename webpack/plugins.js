'use strict';

const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = require('./config');

exports.cleanDist = new CleanWebpackPlugin(config.paths.dist, {
  root: config.paths.root
});

exports.generateIndex = new HtmlWebpackPlugin({
  filename: 'index.html',
  inlineSource: 'runtime(\.[0-9A-z]{8}|)\.js$',
  favicon: path.join(config.paths.src, 'favicon.ico'),
  template: path.join(config.paths.src, '/index.html')
});

exports.provideGlobalModules = new webpack.ProvidePlugin({
  _: 'lodash'
});
