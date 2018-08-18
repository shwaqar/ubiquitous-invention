export default function config($stateProvider) {
  'ngInject';
  $stateProvider
    .state('inbox', {
      url: '/',
      template: require('./inbox.html'),
      controller: 'InboxController',
      controllerAs: 'vm',
    });
}
