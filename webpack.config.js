const path = require('path');
const webpack = require('webpack');
const tsconfig = require('./tsconfig.json');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const srcPath = 'src';

var alias = {};
for (var key in tsconfig.paths) {
  alias[key] =  path.resolve(__dirname, tsconfig.paths[key][0]);
}

var config = env => ({
  mode: env.production && 'production' || 'development',
  entry: [
    path.resolve(__dirname, srcPath + '/main.tsx'),
	  path.resolve(__dirname, srcPath + '/style.less')
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, env.out)
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'Dockerfile', to: '.' },
      { from: 'entrypoint', to: '.' },
      { from: 'node_modules/font-awesome/fonts', to: './fonts' },
			{ from: srcPath + '/index.html', to: '.' }
    ]),
    new webpack.DefinePlugin({
      __API__: '"' + (env.apihost || '/api') + '"'
    })
  ],
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader", exclude: /node_modules/ },
	    { test: /\.png$/, use: ['url-loader'] },
      { test: /\.less$/, use:[{
        loader: 'file-loader',
        options: { name: "style.css" },
      }, {
        loader: 'string-replace-loader',
        options: {
          search: "url\\('\\.\\.\\/",
          replace: "url('",
          flags: 'g'
        }
      }, 'less-loader'] }
    ]
  },
  resolve: {
    modules: [
      path.resolve(__dirname, srcPath), 
      path.resolve(__dirname, './node_modules')
    ],
    alias: alias,
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  devServer: {
    contentBase: path.join(__dirname, env.out),
    compress: true,
    port: 9000,
    historyApiFallback: true
  }
});

module.exports = config;