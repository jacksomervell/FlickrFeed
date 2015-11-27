angular
  .module("FlickrApp")
  .controller("ImageController", ImageController);

  ImageController.$inject = ["$http"]

  function ImageController($http){
    var self = this
    self.searchTerm = 'fish'
    self.data


//makes the call to the proxy server which retrieves the data from Flickr:
    self.getData = function(){
        $http.jsonp("http://api.flickr.com/services/feeds/photos_public.gne?tags=" + self.searchTerm + "&tagmode=all&format=json&jsoncallback=JSON_CALLBACK")
          .success(function(data) {

              self.data = data.items;
              console.log(self.data)

            })

  }
}