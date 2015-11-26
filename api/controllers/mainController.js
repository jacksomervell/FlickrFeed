var request = require('ajax-request');

function getInfo(req, response){

  var searchTerm = req.params.searchTerm
  var url = 'http://api.flickr.com/services/feeds/photos_public.gne?tags=' + self.searchTerm + '&tagmode=all&format=json'


  request({
    url: url,
    method: 'GET',
    options:{json: true} 
  }, function(err, res, body) {
    var data = JSON.parse(body)
    response.json(data)
  });
}

module.exports = {
  getInfo: getInfo
}