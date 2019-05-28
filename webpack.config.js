const webpack = require('webpack');

require("babel-core/register");
require("babel-polyfill");

module.exports = {
	entry: ['babel-polyfill', './src/index.jsx'],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.less$/,
				use: [
					{
						loader: 'style-loader'
					}, 
					{
						loader:'css-loader'
					}, {
						loader:'less-loader'
					}, {
						loader:'postcss-loader'
					}
				]
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: 'style-loader'
					}, 
					{
						loader:'css-loader'
					}, {
						loader:'sass-loader'
					}, {
						loader:'postcss-loader'
					}
				]
			},
			{
				test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
				use: [
					{
						loader: 'babel-loader',
					},
					{
						loader: '@svgr/webpack',
						options: {
							babel: false,
							icon: true,
						},
					},
				],
			}
		]
	},
	resolve: {
		extensions: ['*', '.js', '.jsx']
	},
	output: {
		path: __dirname + '/dist',
		publicPath: '/',
		filename: 'bundle.js'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	devtool: false,
	devServer: {
		contentBase: './dist',
		disableHostCheck: true,
		inline: true,
		hot: true,
		historyApiFallback: true,
		headers: { 
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, X-Authorization-Token"
		}
	}
};