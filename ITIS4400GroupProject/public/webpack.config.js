const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.export = {
	mode: 'development',
	devtool: 'eval-source-map',
	entry: './src/signin.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	watch: true,
	module: {
		rule: [
			{
				test: /\.css$/,
				use: [
					'style.-oader',
					'css-loader'

				]
			}
		]
	},
	plugin: [
		new HtmlWebpackPlugin({
			template: './src/signin.html'
		})
	]
}