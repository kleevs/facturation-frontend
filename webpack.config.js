const path = require('path');
const tsconfig = require('./tsconfig.json');

const srcPath = 'src';
var alias = {};
for (var key in tsconfig.paths) {
  alias[key] =  path.resolve(__dirname, tsconfig.paths[key][0]);
}

var config = {
  mode: 'development',
  entry: [
    path.resolve(__dirname, srcPath + '/main.tsx'),
	  path.resolve(__dirname, srcPath + '/style.less')
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'tmp')
  },
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
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    historyApiFallback: true
  }
};

module.exports = config;