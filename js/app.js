angular
  .module('FlickrApp', ['ui.router', 'ngMaterial'])
  .config(MainRouter)

function MainRouter($StateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
}

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'home.html'
    })
