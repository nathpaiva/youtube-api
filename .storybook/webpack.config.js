const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          'css-loader?{"modules": true, "importLoaders": 2}',
          "sass-loader"
        ],
        include: path.resolve(__dirname, '../')
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|txt)(\?.*)?$/,
        loaders: 'file-loader',
        include: path.resolve(__dirname, '../')
      }
    ]
  }
}
