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
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ],
        exclude: /\.module\.css$/
      },
      {
        test: /\.ts(x)?$/,
        use: [
          'awesome-typescript-loader'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: "css-loader", options: { modules: true } },
          { loader: 'sass-loader'}
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true
            }
          }
        ],
        include: /\.module\.css$/
      },
      {
        test: /\.svg$/,
        use: 'file-loader'
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