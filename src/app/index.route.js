export function routerConfig($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('dmn', {
      url: '/',
      templateUrl: 'app/components/dmn/dmn.html',
      controller: 'DmnController',
      controllerAs: 'dmn'
    });

  $urlRouterProvider.otherwise('/');
}
