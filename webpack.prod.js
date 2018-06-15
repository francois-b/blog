const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = merge(common, {
  plugins: [
    new FaviconsWebpackPlugin({
      logo: './static/ic_stars_black_24dp.png',
    }),
    new UglifyJsPlugin()
  ]
});
