var webpack = require('webpack')

module.exports = {
  resolve: {
    extensions: [
      '',
      '.js',
      '.coffee'
    ]
  },
  entry: './src/index.coffee',
  output: {
    path: __dirname + '/dist/',
    filename: 'payment.js',
    library: 'payment',
    libraryTarget: 'var',
  },
  module: {
    loaders: [
      { test: /\.json/, loader: "json-loader" },
      { test: /\.coffee$/, loader: "coffee-loader" },
    ]
  },
  plugins: [
    {
      'apply': function(compiler) {
        compiler.parser.plugin('expression global', function() {
          this.state.module.addVariable('global', "(function() { return this; }()) || Function('return this')()");
          return true;
        });
      }
    }
  ]
};
