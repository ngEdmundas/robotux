/*jshint node:true*/
/*global dlobal:false */

'use strict';
// Server side module routes.index

// Express Router functions

//var part1 = require('./part1');

// The main express route dispatcher for NetBMG
exports.dispatch = function(app) {
  app.get('/', exports.index);

//  app.post('/part1', part1.main);
};

// Main entry point - load the initial Single Page App HTML
exports.index = function(req, res, next) {
  console.log('index req.headers=', req.headers);

  var ua = req.headers['user-agent'];
  var ualc = ua.toLowerCase();

  var androidUA = (ualc.indexOf("android") != -1);
  var iPhoneUA = (ualc.indexOf("iphone") != -1);
  var iPadUA = (ualc.indexOf("ipad") != -1);
  var mobileUA = (ualc.indexOf("mobile") != -1);

  var entryPage = 'index.html';
  console.log('routes.index entryPage=', entryPage);
  res.render(entryPage, { title: 'Robotux' });
};
