const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'boilerplate.js',
    path: path.resolve(__dirname, 'lib'),
    libraryTarget: 'var',
    library: 'Boilerplate'
  },
  module: {
    rules: [   
        {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
            }
        },
        {
          test: /\.scss$/,
          use: [{
            loader: 'style-loader'
          }, {
            loader: 'css-loader'
          }, {
            loader: 'sass-loader'
          }]
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader'
            }
          ]
        },
        {
          test: /\.(obj|fbx)$/,
          loader: 'url-loader'
        }
    ]
  }
}