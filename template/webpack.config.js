const path = require('path');
const NodemonPlugin = require('nodemon-webpack-plugin');

const browser = {
  devtool: 'inline-source-map',
  target: 'web',
  entry: './src/browser.main.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'browser.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      { test: /\.ts?$/, loader: 'ts-loader' },
      { test: /\.html$/, loader: 'raw-loader' },
    ],
  },
};

const server = {
  devtool: 'inline-source-map',
  target: 'node',
  entry: './src/server.main.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'server.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      { test: /\.ts?$/, loader: 'ts-loader' },
      { test: /\.html$/, loader: 'raw-loader' },
    ],
  },
  plugins: [
    new NodemonPlugin(),
  ],
};

module.exports = [browser, server];
