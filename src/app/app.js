import angular from 'angular';
import uirouter from 'angular-ui-router';

import inbox from './inbox/inbox';
import projects from './projects/projects';
import common from './common/common';

import 'spectre.css';

export default angular
  .module('todo', [
    uirouter,

    common,
    inbox,
    projects
  ])
  .name;
