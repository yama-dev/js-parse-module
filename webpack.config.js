const pkg = require('./package.json');

const comment = `JS PARSE MODULE (JavaScript Library)
  ${pkg.name}
Version ${pkg.version}
Repository ${pkg.repository.url}
Copyright ${pkg.author}
Licensed ${pkg.license}`;

const env = process.env.NODE_ENV;

const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

const webpackPlugEnv = new webpack.EnvironmentPlugin({
  NODE_ENV: 'development',
  DEBUG: false
});

const webpackPlugBnr = new webpack.BannerPlugin({
  banner: comment,
});

const babelPlugin = [
  '@babel/plugin-transform-object-assign'
];

const config = {
  mode: env || 'development',
  entry: {
    'js-parse-module': './index.js'
  },
  output: {
    path: `${__dirname}/dist`,
    filename: '[name].js',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  modules: false
                }
              ]
            ],
            plugins: babelPlugin
          }
        }
      }
    ]
  },
  plugins: [
    webpackPlugEnv,
    webpackPlugBnr
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        terserOptions: {
          compress: {
            drop_console: true
          }
        },
      }),
    ],
  }
};

module.exports = config;
