'use strict';

var express = require('express'),
  nonce = require('nonce')();
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  req.session.nonce = nonce();
  res.render('index', {
      title: req.i18n.__('BurnIt') ,
      nonce: req.session.nonce
  });
});

router.get('/privacy-policy', function(req, res, next) {
  res.render('privacy-policy', {
    title: req.i18n.__('Your Privacy Matters')
  });
});

module.exports = router;
