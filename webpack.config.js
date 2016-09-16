var webpack = require('webpack');
var path = require('path');

process.env.NODE_ENV = process.env.NODE_ENV || "development";

module.exports = {

  entry : [
    'script!jquery/dist/jquery.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins:[
    new webpack.ProvidePlugin({
      '$':'jquery',
      'jQuery': 'jquery'
    }),
    new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),

  ],
  output  : {
      path: __dirname,
      filename : './public/bundle.js'
  },
  resolve : {
    root: __dirname,
    modulesDirectories: [
      'node_modules',


      './app/api',
      './app/stylehelpers',
      './app/components/applicationbar',
      './app/components',
      './app/popovers',
      './app/components/pages',
      './app/components/subpages',
      './app/components/subpages/butikken',
      './app/components/subpages/sagen',
      './app/components/subpages/sagen/boligfakta',
      './app/components/subpages/sagen/aktiviteter',
      './app/components/tools',

      './app/components/buttons',

      './app/components/breadcrumb',
      './app/components/contentmenu',
      './app/components/nav',
      './app/components/dialogs',



      './app/minside/',
      './app/minside/tildig',
      './app/minside/koeberkartotek',
      './app/minside/meddelelser',
      './app/minside/minprofil',
      './app/minside/sagen',
      './app/minside/statestik',

    ],
    alias: {
      applicationStyles : 'app/styles/app.scss',
      actions : 'app/actions/actions.jsx',
      reducers : 'app/reducers/reducers.jsx',
      configureStore : 'app/store/configureStore.jsx'
    },
    extensions: ['','.js','.jsx']
  },
  module : {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      },
      {
                test: /\.css$/,
                loader:'style!css!'
        }
    ]
  },

  devtool: process.env.NODE_ENV === 'production' ? undefined : 'cheap-module-eval-source-map'

};
