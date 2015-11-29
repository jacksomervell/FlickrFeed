angular
  .module("FlickrApp")
  .controller("ImageController", ImageController);

  ImageController.$inject = ["$http"]

  function ImageController($http){
    var self = this
    var pendingTask
    self.search
    self.data
    self.change

    self.getData = function(){
        $http.jsonp("http://api.flickr.com/services/feeds/photos_public.gne?tags=" + self.search + "&tagmode=all&format=json&jsoncallback=JSON_CALLBACK")
          .success(function(data) {

              self.data = data.items;
              console.log(self.data)
              console.log(self.search)
            })

  }

  if(self.search === undefined){
    self.search = "";
    self.getData();
  }

    self.change = function(){
      setTimeout(self.getData(), 300)
  };
  
}