const { resolve } = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const copyStatics = [
  {
    from: resolve(__dirname, './src/index.html'),
    to: 'index.html'
  }
];

const shared = () => {
  const plugins = [
    new CopyWebpackPlugin(copyStatics)
  ];
  return {
    entry: {
      'core': resolve(__dirname, 'src/index.js')
    },
    output: {
      path: resolve(__dirname, 'public'),
      chunkFilename: 'module.[chunkhash].fragment.js',
      filename: 'module.[name].js',
      publicPath: '/'
    },
    resolve: {
      extensions: ['.js', '.styl', '.scss', '.sass']
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          // We need to transpile Polymer itself and other ES6 code
          // exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [[
                '@babel/preset-env',
                {
                  targets: { browsers: ['last 2 Chrome versions', 'Safari 10'] },
                  debug: true
                }
              ]],
              plugins: [
                '@babel/plugin-syntax-dynamic-import',
                ['@babel/plugin-transform-runtime', {
                  'helpers': false,
                  'regenerator': true
                }],
                ['@babel/plugin-proposal-object-rest-spread', { useBuiltIns: true }]
              ]
            }
          }
        }
      ]
    },
    plugins
  };
};

module.exports = shared;
