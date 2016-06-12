module.exports = {
  entry: [
    './browser.js'
  ],
  output: {
    path: './public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {'test': /\.js?$/,
      'loader': 'babel'}
    ]
  }
};
