import webpack from 'webpack';
import path from 'path';

export default {
  //This setting specify how source maps should be generated
  devtool: 'source-map',
  entry: [path.resolve(__dirname, 'src/index')],
  target: 'web',
  output: {
    //For production we will save the physical files to a folder called dist
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  mode: 'production',
  plugins: [
    //Eliminate duplicate packages when generating bundle
    new webpack.optimize.DedupePlugin(),
    //Minify JS
    new webpack.optimize.UglifyJsPlugin(),
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
