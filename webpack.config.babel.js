const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: ['./src/index'],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	resolve: {
		modules: ['node_modules'],
		alias: {
			'react-dom': '@hot-loader/react-dom',
		},
		extensions: ['.ts', '.tsx', '.js', '.jsx'],
	},
	module: {
		rules: [
			{
				test: /\.(j|t)s(x)?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
					cacheDirectory: true,
					babelrc: false,
					presets: [
						[
						'@babel/preset-env',
						{ targets: { browsers: 'last 2 versions' } }, // or whatever your project requires
						],
						'@babel/preset-typescript',
						'@babel/preset-react',
					],
					plugins: [
						// plugin-proposal-decorators is only needed if you're using experimental decorators in TypeScript
						['@babel/plugin-proposal-decorators', { legacy: true }],
						['@babel/plugin-proposal-class-properties', { loose: true }],
						'react-hot-loader/babel',
					],
					},
				},
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
			},
		],
	},
	devServer: {
		contentBase: './dist',
		historyApiFallback: true,
		port: 3000,
	},
	devtool: 'eval-source-map',
	plugins: [
		new ForkTsCheckerWebpackPlugin(),
		new webpack.NamedModulesPlugin(),
	],
};



// proxy: {
// 	'/api': {
// 	target: 'http://localhost:9000',
// 	pathRewrite: {"^/api": ""}
// 	}
// }