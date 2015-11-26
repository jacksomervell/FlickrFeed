angular
  .module('FlickrApp', ['ui.router'])
  .config(MainRouter)

function MainRouter($StateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
}