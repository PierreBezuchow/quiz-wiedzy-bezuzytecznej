var helpers = require('./helpers');
const HtmlWebpack = require('html-webpack-plugin');
const CleanWebpack = require('clean-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
  entry: {
    app:['whatwg-fetch', './src/js/app.jsx'],
    vendor: [
      'react',
      'react-dom'
    ]
  },
  output: {
      filename: 'js/[name].[chunkhash].js',
      path: helpers.absolutePath('build')
  },
  module:{
    loaders:
    [
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        query:{
          presets: ['es2015', 'stage-2', 'react']
        }
      },
      {
        test: /\.(png|ico|jpg|gif|mp4)$/,
        loader: 'file-loader',
        query: {
            name: '[name].[ext]',
            useRelativePath: true
        }
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader',
        query: {
            name: 'assets/fonts/[name].[ext]'
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
         use: [
           'css-loader?minimize=true',
           'resolve-url-loader', 'sass-loader'
         ]}),
        exclude: /(node_modules)/
      }
    ]
  },
  plugins:[
    new HtmlWebpack({
      template: './src/index.html',
      inject: 'body'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor', 'compiled']
    }),
    new CleanWebpack(['build', 'assets'], {
      verbose: true,
      root: helpers.absolutePath('')
    }),
    new ExtractTextPlugin('css/[name].[chunkhash].css'),
    new CopyWebpackPlugin([{
      from: './src/assets',
      to: './assets'

    }]),
    new webpack.optimize.UglifyJsPlugin({
        compress:{
          warnings: false
        }
    }),
    new webpack.DefinePlugin({
      "process.env": {
         NODE_ENV: JSON.stringify("production")
       }
    })
  ]

};
