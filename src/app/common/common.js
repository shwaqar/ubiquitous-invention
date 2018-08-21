import angular from 'angular';
import { react2angular } from 'react2angular'

import reactApp from '../index.js';

export default angular
  .module('esmTest.common', [])
  .component('react', react2angular(reactApp, []))
  .name;
