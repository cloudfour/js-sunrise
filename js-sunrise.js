/* global __dirname */
'use strict';

var workshopper = require('workshopper'),
    path        = require('path');

function fpath (f) {
  return path.join(__dirname, f);
}

workshopper({
    name        : 'js-sunrise',
    title       : 'JavaScript Sunrise',
    subtitle    : 'Learn some JavaScript, be happy',
    appDir      : __dirname,
    menuItems   : [],
    exerciseDir : fpath('./exercises/')
});
