const path = require('path')

module.exports = {
  mode: "development",
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(ts)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, '.'),
    compress: true,
    port: 8000,
    historyApiFallback: {
      index: 'index.html'
    },
    after: function(app) {
      app.use(function (req, res, next) {
        if (req.url.endsWith('.css')) {
          res.setHeader('Content-Type', 'text/css');
        }
        next();
      });  
    }
  }
}