const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const CleanWebpackPlugin = require('clean-webpack-plugin');
// const SRC = './src/index.js';
const SRC = path.resolve(__dirname, 'src/');

module.exports = {
  entry: {
    index: SRC
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
   // new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      inject: 'body',
      title: 'React Session'
    })
  ],
  devServer: {
    port: 9000,
    contentBase: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: SRC,
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
       },
      // {
      //   test: /\.(css|scss)$/,
      //   use: [
      //     'style-loader',
      //     'css-loader',
      //     'sass-loader'
      //   ]
      // }
    ]
  },
  devtool: 'inline-source-map',
};