module.exports = {
	entry:   __dirname + '/src/index.js',
	output: {
		path: __dirname +  '/public',
		filename: 'main.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: ['/node_modules/', '/public/'],
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react', 'stage-0']
					// plugins: ['react-html-attrs', 'transform-decorators-legacy']
				}
			}
		]
	}
};