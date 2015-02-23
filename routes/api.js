'use strict';

var express = require('express');
var controller = require('../lib/controller');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.status(404).json({ error: 'Not found'});
});

router.get('/getCalories/:calories', function(req, res, next) {
  if (req.query.n != req.session.nonce) {
    res.status(400).json({ error: 'Unauthorized'});
  } else {
    var data = controller.getDefaultCalories(req.params.calories);
    res.json(data);
  }
});

module.exports = router;
