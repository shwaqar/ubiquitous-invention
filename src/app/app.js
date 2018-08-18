import angular from 'angular';
import uirouter from 'angular-ui-router';

import 'todomvc-app-css/index.css';
import '../styles/styles.css';

import inbox from './inbox/inbox';
import projects from './projects/projects';
import common from './common/common';

export default angular
  .module('todo', [
    uirouter,

    common,
    inbox,
    projects
  ])
  .name;
