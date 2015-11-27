angular
  .module('FlickrApp', ['ui.router', 'ngMaterial', 'angularMoment'])
  .config(MainRouter)

function MainRouter($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');


  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'home.html'
    })

    .state('details', {
      url: '/details',
      templateUrl: 'details.html'
    })

}