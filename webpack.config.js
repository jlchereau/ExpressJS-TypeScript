var path = require('path');
var webpack = require('webpack');
module.exports = {
	entry: './src/client/index.ts',
	devtool: 'source-map',
	output: {
		path: path.join(__dirname, '/www/public'),
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['.js', '.ts'],
		// modules: [path.resolve('.'), 'node_modules']
		alias: { 'jquery': path.join(__dirname, '/node_modules', '/jquery/dist/jquery.js') }
	},
	module: {
		rules: [
			// TypeScript
			{
				test: /\.ts$/,
				exclude: /(node_modules|bower_components)/,
				use: { loader: 'ts-loader' }
			},
			// Styles
			{
				test: /\.css$/,
				use: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader' }
				]
			},
			// Other files
			{
				test: /\.(gif|png|jpe?g)$/,
				use: [
					// { loader: 'url-loader', options: { limit: 8192 } }
					{ loader: 'url-loader?limit=8192' }
				]
			},
			{
				test: /\.woff(2)?/,
				use: [
					// { loader: 'url-loader', options: { limit: 10000, mimetype: 'application/font-woff' } }
					{ loader: 'url-loader?limit=10000&mimetype=application/font-woff' }
				]
			},
			{
				test: /\.(ttf|eot|svg)/,
				use: [
					{ loader: 'file-loader' }
				]
			}
		]
	}
	/*
	plugins: [
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery'
		})
	]
	*/
};