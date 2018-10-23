const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, './src/assets/js'),
  entry: {
    app: './index.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'js/[name].bundle.js',
    publicPath: ''
  },
  resolve: {
    modules: [
      path.resolve(__dirname, './src'), 
      'node_modules'
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, './src'),
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'eslint-loader',
        },{
          loader: 'babel-loader',
          options: { presets: ['env'] },
        }],
      },
      {
        test: /\.(sass|scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader', 
            'sass-loader',
            'import-glob-loader',
          ],
        })
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        use: {
          loader: 'url-loader'
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: {
          loader: "file-loader?name=[name].[ext]&outputPath=fonts/&publicPath=../"
        }
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      title: 'Easynvest',
      template: path.resolve(__dirname, './src/index.html'),
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      inject: true,
      title: 'Register',
      template: path.resolve(__dirname, './src/list-register.html'),
      filename: 'list-register.html'
    }),
    new ExtractTextPlugin({
      filename: 'css/style.css'
    })
  ]
};
