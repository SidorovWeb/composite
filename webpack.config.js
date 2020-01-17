import '@babel/polyfill'
const path = require('path')
const webpack = require('webpack')

module.exports = {
  plugins: [
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      jquery: 'jquery',
      'window.jquery': 'jquery',
      $: 'jquery',
      'window.$': 'jquery'
    })
  ],
  entry: {
    main: ['@babel/polyfill', './src/js/index.js']
  },

  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
    publicPath: '/'
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor',
          enforce: true
        }
      }
    }
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules\/(?!(dom7|swiper)\/).*/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: [
              [
                '@babel/preset-env',
                { modules: false, debug: true, useBuiltIns: 'entry' }
              ]
            ]
          }
        }
      }
    ]
  },

  resolve: {
    alias: {
      '%modules%': path.resolve(__dirname, 'src/blocks/modules'),
      '%components%': path.resolve(__dirname, 'src/blocks/components')
    }
  }
}
