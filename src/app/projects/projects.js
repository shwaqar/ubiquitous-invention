import angular from 'angular';
import config from './projects.routes.js';

import { ProjectsController } from './projects.controller.js'

export default angular
  .module('todo.projects', [])
  .config(config)
  .controller('ProjectsController', ProjectsController)
  .name;
