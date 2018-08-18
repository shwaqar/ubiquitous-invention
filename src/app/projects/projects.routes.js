export default function config($stateProvider) {
  'ngInject';
  $stateProvider
    .state('projects', {
      url: '/projects',
      template: require('./projects.html'),
      controller: 'ProjectsController',
      controllerAs: 'vm',
    });
}
