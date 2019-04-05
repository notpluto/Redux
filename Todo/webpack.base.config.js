const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  stats: 'minimal',
  entry: [
    './src/index.js',
    require.resolve('react-error-overlay'),
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s?(c|a)ss$/,
        loader: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
};
