var marked = require('marked');
var yaml = require('yaml-front-matter');
var loaderUtils = require('loader-utils');
var marked = require("marked");
var cheerio = require('cheerio');
var hl = require('highlight.js');
var converter = require('converter');

var highlightAuto = hl.highlightAuto;

module.exports = function(source) {

  this.cacheable && this.cacheable();
  var options = loaderUtils.parseQuery(this.query);
  return converter(source);
};
