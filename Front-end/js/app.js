angular
  .module('FlickrApp', ['ui.router', 'ngMaterial'])
  .config(MainRouter)

function MainRouter($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');


  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'home.html'
    })

}