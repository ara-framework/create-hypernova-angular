const path = require('path');
const ngw = require('@ngtools/webpack');

const browser = (env, argv) => ({
  devtool: 'inline-source-map',
  target: 'web',
  entry: argv.mode === 'production' ? './src/browser.aot.main.ts' : './src/browser.main.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'browser.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
        loader: '@ngtools/webpack'
      },
      { test: /\.html$/, loader: 'raw-loader' }
    ]
  },
  plugins: [
    new ngw.AngularCompilerPlugin({
      tsConfigPath: path.join(__dirname, argv.mode === 'production' ? 'tsconfig.aot.json': 'tsconfig.json'),
      entryModule: path.join(__dirname, 'src', 'app.module#AppModule'),
      skipCodeGeneration: argv.mode !== 'production',
    }),
  ]
});

module.exports = browser
