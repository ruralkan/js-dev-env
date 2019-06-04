import path from 'path';
import webpack from 'webpack';
import DuplicatePackageCheckerPlugin from 'duplicate-package-checker-webpack-plugin';

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

export default {
  //This setting specify how source maps should be generated
  //devtool: false,
  //devtool is not needed anymore for prod
  entry: [path.resolve(__dirname, 'src/index.js')],
  target: 'web',
  output: {
    //For production we will save the physical files to a folder called dist
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  mode: 'production',
  plugins: [
    //The DedupePlugin was removed in webpack@3 ++
    //new webpack.optimize.DedupePlugin(),
    //Eliminate duplicate packages when generating bundle
    new DuplicatePackageCheckerPlugin(),
    //Minify JS
    new UglifyJsPlugin(),

    new webpack.LoaderOptionsPlugin({
      debug: false,
      noInfo: true
    })
  ],
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader'] },
      { test: /\.css$/, loaders: ['style-loader', 'css-loader'] }
    ]
  }
};
