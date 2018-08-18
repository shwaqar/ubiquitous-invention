'use strict';

const path = require('path');

exports.paths = {
  root: path.resolve(__dirname, '../'),
  src: path.resolve(__dirname, '../src'),
  dist: path.resolve(__dirname, '../dist')
};

exports.server = {
  host: '0.0.0.0',
  port: 9000
};
