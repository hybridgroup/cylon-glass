/*
 * cylon-glass
 * http://cylonjs.com
 *
 * Copyright (c) 2013 Your Name Here
 * Your License Here
*/


(function() {
  'use strict';
  var namespace,
    __slice = [].slice;

  namespace = require('node-namespace');

  require('cylon');

  module.exports = {
    adaptor: function() {
      var args;
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      return function() {};
    },
    driver: function() {
      var args;
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      return function() {};
    },
    register: function(robot) {}
  };

}).call(this);
