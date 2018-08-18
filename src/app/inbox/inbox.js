import angular from 'angular';
import config from './inbox.routes.js';

import { InboxController } from './inbox.controller.js'

export default angular
  .module('todo.inbox', [])
  .config(config)
  .controller('InboxController', InboxController)
  .name;
