# Javascript to SASS loader

A Webpack loader that converts a JavaScript file into SASS variables, maps and lists. Any valid JSON is valid.

### Example Webpack usage
```javascript
module.exports = {

	module: {
	
	    rules: [{
	        test: /.scss$/,
	        loader: ExtractTextPlugin.extract({
	            fallbackLoader: 'style-loader',
	            loader: [
	                {loader: 'css-loader'}, 
	                {loader: 'sass-loader'}, 
	                {loader: 'jstosass-loader'}
	            ]
	        })
	    }]
	},
		
	plugins: [
	
	    new webpack.LoaderOptionsPlugin({
	        options: {
	            jsToSass: {path: paths.sassVars}
	        }
	    })
	]
}
```