var marked = require('marked');
var yaml = require('yaml-front-matter');
var loaderUtils = require('loader-utils');
var marked = require("marked");
var cheerio = require('cheerio');
var hl = require('highlight.js');
var fs = require('fs');
var path = require('path');

var highlightAuto = hl.highlightAuto;

// Transform from Markdown to object with HTML content
module.exports = function(source) {
  var obj = yaml.parse(source);
  obj.__content = marked(obj.__content);
  var $ = cheerio.load(obj.__content);
  $('pre code').replaceWith(function(i, block) {
    var $e = $(block);
    var text = $e.text();
    var klass = $e.attr('class') || '';
    var languageType = klass.split('lang-').filter(id);
    if (languageType.length) {
      return highlightAuto(text, languageType).value;
    } else {
      return highlightAuto(text).value;
    }
  });
  $('pre').addClass('hljs');
  return {...obj, mdContent: $.html()};
};
