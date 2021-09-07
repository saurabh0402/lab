const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, './src/index.js'),
  output: {
    path: path.join(__dirname, './public'),
    filename: 'build.js',
  },
  resolve: {
    extensions: ['.js', '.svelte'],
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
    ],
  },
};
