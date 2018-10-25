const path = require('path')

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        include: path.join(__dirname, './src'),
        options: {
          "presets": [
            [
              "@babel/preset-env",
              {
                "useBuiltIns": "entry"
              }
            ]
          ]
        }
      }
    ]
  },
  plugins: [],
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs-module',
    libraryExport: "default"
  }
}