export function routerConfig($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'DmnController',
      controllerAs: 'dmn'
    });

  $urlRouterProvider.otherwise('/');
}
