---
date: 2017-11-27
title: Setting up a blog with Webpack
location: Paris, France
---

http://webdevchecklist.com/
https://developers.google.com/speed/pagespeed/insights/

https://webpack.js.org/guides/output-management/

Here are the issues we need to address:

- Integrating with Github Pages: our build tools generally put stuff under /dist, and Github expects the index.html to be at the top-level
- Converting our Markdown files to HTML, with syntax highlighting done at build time.
- Including our content in our JS bundle, but also outputting it to raw HTML for search engines to see (although some like Google are really good at picking up rendered sites)
- Theming our site, and having it be responsive, and automatically adding browser prefixes
- Making the browser cache the vendor libs but not our content (using Webpack bundles)
