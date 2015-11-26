angular
  .module("FlickrApp")
  .controller("ImageController", ImageController);

  ImageController.$inject = ["$http"]

  function ImageController($http){
    var self = this
    self.searchTerm = 'fish'

    self.getData = function(){
      $http
        .get('http://api.flickr.com/services/feeds/photos_public.gne?tags=' + self.searchTerm + '&tagmode=all&format=json')
        .then(function(response){
      console.log(response)
      response.addHeader("Access-Control-Allow-Origin", "*");
      console.log(self.searchTerm)
      })
    }
  }