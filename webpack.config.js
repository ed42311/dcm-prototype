const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: './public/bundle.js'
  },
  resolve: {
    modules: [
      path.resolve('./public'),
      path.resolve('./dist'),
      path.resolve('./src')
    ]
  },
};
