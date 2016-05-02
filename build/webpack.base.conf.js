var path = require('path');
var config = require('../config');
var cssLoaders = require('./css-loaders');
var projectRoot = path.resolve(__dirname, '../');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    publicPath: config.build.assetsPublicPath,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.vue', '.css'],
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      'src': path.resolve(__dirname, '../src'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'components': path.resolve(__dirname, '../src/components'),
      'style': path.resolve(__dirname, '../src/style')
    }
  },
  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')]
  },
  module: {
    loaders: [{
      test: /\.vue$/,
      loader: 'vue'
    }, 
    {
      test: /\.js$/,
      loader: 'babel',
      include: projectRoot,
      exclude: /node_modules/
    }, 
    // {
    //   test: /\.js$/,
    //   loader: 'worker-loader'
    // }, 
    {
      test: /\.json$/,
      loader: 'json'
    }, 
    {
      test: /\.html$/,
      loader: 'vue-html'
    },
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract( 'style-loader', 'css-loader?sourceMap')
    },
    {
      test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: 'url',
      query: {
        limit: 10000,
        name: path.join(config.build.assetsSubDirectory, '[name].[hash:7].[ext]')
      }
    }]
  },
  vue: {
    loaders: cssLoaders()
  }
}
