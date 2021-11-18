const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports= {
  mode: 'development',
  entry: [ '../../src/server/client_index.ts' ],
  target: 'node',
  externals: [nodeExternals()],
  output: {
    // path: path.resolve(__dirname, 'dist'),
    path: path.resolve('../../dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      { test: /\.(tsx?)$/, use: 'babel-loader' }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      __isBrower__: 'true'
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  }
}