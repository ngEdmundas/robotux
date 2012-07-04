/*jshint globalstrict:true, browser:true */
/*global console:false */
/*global angular:false */
/*global HomeController Part1Controller */

'use strict';


// Declare app level module which depends on filters, and services
angular.module('Robotux',
    ['bootstrap', 'ngResource', 'Robotux.filters', 'Robotux.directives'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {templateUrl: 'partials/home.html', controller: HomeController});
    $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: HomeController});

    $routeProvider.when('/part1', {templateUrl: 'partials/part1.html', controller: Part1Controller});

    $routeProvider.otherwise({redirectTo: '/home'});
  }]);
