var request = require('ajax-request');

function getInfo(req, response){

  var searchTerm = req.params.searchTerm
  var url = "http://api.flickr.com/services/feeds/photos_public.gne?tags=" + self.searchTerm + "&tagmode=all&format=json&jsoncallback=JSON_CALLBACK"


  request({
    url: url,
    method: 'GET',
    dataType: JSON,
    options:{json: true} 
  }, function(err, res, body) {
    console.log(body)
    // var data = JSON.parse(body)
    response.json(body)
  });
}

 

module.exports = {
  getInfo: getInfo,
}

