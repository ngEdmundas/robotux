/*jshint globalstrict:true, browser:true, devel:true, jquery:true */
/*global angular:false */

'use strict';

/* Directives */

var directivesRobotux = angular.module('Robotux.directives', []);

directivesRobotux.directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);
