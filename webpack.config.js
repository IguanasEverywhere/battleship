const path = require('path');

module.exports = {
  entry: './src/index.js',
  devtool: 'inline-source-map',
  mode: 'development',
  watch: true,
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        use: 'file-loader'
      }
    ],
  },
};