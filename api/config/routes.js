var express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser');

var mainController = require('../controllers/mainController')

router.route('/images/:searchTerm')
  .get(mainController.getInfo)

module.exports = router;