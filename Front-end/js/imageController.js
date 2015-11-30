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

//this calls the Flickr API and returns the data in JSON:
    self.getData = function(){
        $http.jsonp("http://api.flickr.com/services/feeds/photos_public.gne?tags=" + self.search + "&tagmode=all&format=json&jsoncallback=JSON_CALLBACK")
          .success(function(data) {

              self.data = data.items;
            })

  }

//when the page loads, ensures some results display despite nothing being searched yet.
  if(self.search === undefined){
    self.search = "";
    self.getData();
  }

 //is triggered when search text is inputted, calling the getData() function which makes the API request to Flickr:

    self.change = function(){
      setTimeout(self.getData(), 300)
  };
  
}