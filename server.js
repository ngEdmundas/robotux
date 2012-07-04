/*jshint node:true */

'use strict';

// The main server side module 'server'

var express = require('express'),
  routes = require('./routes'),
  path = require('path'),
  fs = require('fs'),
  // set either port or PORT in your shell environment
  port = process.env.port || process.env.PORT || 3000;
console.log("process.env", process.env, "port", port);

var app = global.app = module.exports = express.createServer();
//var io = require('socket.io').listen(app);

console.log('Node.js versions: process.versions=', process.versions);

process.title = 'Robotux running on node.js at port ' + port;

app.configure(function() {
  app.set('view engine', 'jade');
  app.set('views', path.join(__dirname, 'app'));

  // disable layout
  app.set("view options", {layout: false});

  // make a custom html template
  app.register('.html', {
    compile: function(str, options){
      return function(locals){
        return str;
      };
    }
  });

  app.use(express.logger({format: 'dev'}));
  app.use(express.bodyParser());
  app.use(express.cookieParser());
  app.use(express.session({secret: "Robotux"}));
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'app')));
});

app.configure('development', function() {
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function() {
//  app.use(express.errorHandler());
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

// Express routes
routes.dispatch(app);

process.on('uncaughtException', function (err) {
  console.error('uncaughtException:', err.message);
  console.error(err.stack);
//  process.exit(1)
});


app.listen(port, function() {
  console.log("Express server listening on port %d in %s mode",
    app.address().port,
    app.settings.env);
});
