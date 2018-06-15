var marked = require('marked');
var yaml = require('yaml-front-matter');
var loaderUtils = require('loader-utils');
var marked = require("marked");
var cheerio = require('cheerio');
var hl = require('highlight.js');
var fs = require('fs');
var path = require('path');
var converter = require('converter');

module.exports = function(source) {

  this.cacheable && this.cacheable();
  var options = loaderUtils.parseQuery(this.query);

  const _root = this.context; // project root folder
  const postDir = path.join(_root, '../data/posts');
  const mdFiles = fs.readdirSync(postDir);
  // TODO: filter with regex
  var posts = [];
  mdFiles.forEach((filesName) => {
    const filePath = path.join(postDir, filesName);
    var contents = fs.readFileSync(filePath, 'utf8');
    var obj = converter(contents);
    var contents = `
      <div class="blog-post">
        <div class="blog-date"> ${obj.date} </div>
        <div class="blog-title"> ${obj.title} </div>
        ${obj.mdContent}
      </div>`;
    posts.push(contents);
  })

  var $ = cheerio.load(source);
  $('#app').html(posts.join(''));

  // const distDir = path.join(_root, '../', 'index.html');
  // fs.writeFileSync(distDir, $.html());
  // return undefined;
  return $.html();
};
