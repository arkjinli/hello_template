const webpack = require('webpack')
const path = require('path')

const config = {
    entry: path.resolve(__dirname, 'src/index.js'),
    output:{
        path: path.resolve('../static'),
        filename: 'bundle.js',
        publicPath: path.resolve('../public')},
    resolve: {
        extensions: ['.js','.jsx','.css']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    }
}

module.exports = config
