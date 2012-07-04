/*jshint globalstrict:true, browser:true */
/*global angular:false */

'use strict';

/* Filters */

angular.module('Robotux.filters', []).
  filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    };
  }]);
