'use strict'

const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const ROOT_PATH = path.resolve(__dirname)
const SOURCE_PATH = path.resolve(ROOT_PATH, 'src')
const BUILD_PATH = path.resolve(ROOT_PATH, 'build')

module.exports = {
  entry: [
    'whatwg-fetch', SOURCE_PATH
  ],
  output: {
    filename: 'bundle.js',
    path: BUILD_PATH,
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(SOURCE_PATH, 'index.html'),
      inject: 'body',
      filename: 'index.html'
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      include: [SOURCE_PATH],
      loader: 'babel'
    }, {
      test: /\.(sass|scss)$/,
      loaders: ['style', 'css', 'sass']
    }, {
      test: /\.(png|jpe?g|gif|svg|ttf|eot|otf|woff|woff2)$/,
      loader: 'file'
    },
    {
      test: /\.json$/,
      loader: 'json'
    }]
  }
}
