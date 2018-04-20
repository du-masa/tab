const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    jquery: './demo/assets/jquery/jquery-main.js',
    jquery_loop: './demo/assets/jquery/jquery-main-loop.js',
    vue: './demo/assets/vue/vue-main.js',
    vue_loop: './demo/assets/vue/vue-main-loop.js',
    vue_jsonServer: './demo/assets/vue/vue-main-jsonserver.js',
  },
  output: {
    path: path.resolve(__dirname, 'public/js'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test:/.js$/,
        exclude: '/node_modules/',
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            { loader: 'css-loader',options: {sourceMap: true}},
            { loader: 'sass-loader',options: {sourceMap: true}},
          ]
        })
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin('../css/[name].css'),
  ]
}

