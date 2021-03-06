var path = require('path');
var ProvidePlugin = require('webpack/lib/ProvidePlugin');

module.exports = {
  entry: [
    './src/index',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: './dist/'
  },
  plugins: [
      new ProvidePlugin({
        jQuery: 'jquery',
        $: 'jquery',
        jquery: 'jquery'
      })
  ],
  module: {
    loaders: [{
      test: /\.css$/,
      loaders: ['style', 'css']
    },
    {
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass-loader']
    },	{ 
      test: /\.png$/, 
	  loader: "url-loader?limit=100000" 
    }, { 
      test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
      loader: "url-loader?limit=10000&mimetype=application/font-woff&name=./[hash].[ext]"
    }, {
      test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
      loader: "url-loader?limit=10000&mimetype=application/font-woff&name=./[hash].[ext]"
    }, {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      loader: "url-loader?limit=10000&mimetype=application/octet-stream&name=./[hash].[ext]"
    }, {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      loader: "file"
    }, {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      loader: "url-loader?limit=10000&mimetype=image/svg+xml&name=./[hash].[ext]"
    }]
  }
}
