'use strict';

const path = require('path');
const { extend } = require('lodash');

const config = require('./config');

const MODE_DEV = 'development';
const MODE_PROD = 'production';
const MODE_TEST = 'test';

exports.html = {
  test: /\.html$/,
  use: 'raw-loader'
};

exports.scripts = {
  test: /\.js$/,
  use: 'babel-loader',
  exclude: /node_modules/
};

exports.styles = {
  test: /\.(scss|css)$/,
  use: [
    'style-loader',
    'css-loader'
  ]
};
