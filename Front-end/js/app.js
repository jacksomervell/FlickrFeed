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
      url: '/:imageTitle/details',
      templateUrl: 'details.html',
      controller: function($scope, $stateParams) {
            $scope.title = $stateParams.imageTitle;
            $scope.picture = $stateParams.picture;
            $scope.author = $stateParams.author;
            $scope.published = $stateParams.published;
            $scope.tags = $stateParams.tags;
            $scope.link = $stateParams.link
            $scope.description = $stateParams.description
        },
        params: {
          picture: null,
          author: null,
          published: null,
          tags: null,
          link: null,
          description: null
        }
    })

}