const path = require('path');
const SomePlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, './src/index.js'),
  output: {
    path: path.join(__dirname, './public'),
    filename: 'build.js',
  },
  resolve: {
    // Important to run svelte-material-ui
    alias: { svelte: path.dirname(require.resolve('svelte/package.json')) },
    extensions: ['.js', '.svelte', '.mjs'],
    // Super important line to make UI libraries work
    mainFields: ['svelte', 'browser', 'module', 'main'],
  },
  devServer: {
    port: 8080,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.svelte/,
        use: {
          loader: 'svelte-loader',
          options: {
            compilerOptions: {
              dev: true,
            },
            hotReload: true,
          },
        },
      },
      {
        test: /node_modules\/svelte\/.*\.mjs$/,
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.css$/,
        use: [SomePlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [new SomePlugin()],
};
