const webpack = require('webpack');
const path = require('path');

const config = {
  entry: [
    'react-hot-loader/patch',
    './src/index.tsx'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.ts(x)?$/,
        use: [
          'awesome-typescript-loader'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.s?css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]--[hash:base64:5]',
                context: path.join(__dirname, './app/'),
              },
              importLoaders: 2,
              sourceMap: true,
              localsConvention: 'camelCase',
            },
          },
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /\.(jpe?g|png|svg|gif|woff|woff2|eot|ttf)$/i,
        loader: 'file-loader',
        options: {
            name: '[name][hash].[ext]',
        }
      }
    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.tsx',
      '.ts'
    ],
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  },
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
//<<<<<<< HEAD
  //   proxy:{
  //     "/api":{
  //       target:"http://localhost:9000",
  //       pathRewrite: {
  //         "^/api": ""
  //       }
  //     }
  //   }
  // }
//=======
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:9000',
        pathRewrite: {"^/api": ""}
      }
    }
  },
//>>>>>>> d9b3535b99a57b2ee467d187c8bae5ba1b7f8a39
};

module.exports = config;