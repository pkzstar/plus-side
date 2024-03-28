const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: 'script.js',  // Path to your main JavaScript file
  output: {
    path: path.resolve(__dirname, 'dist'),  // Output directory for bundled files
    filename: 'bundle.js',  // Output filename
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',  // Path to your HTML template
      filename: 'index.html',  // Output HTML filename
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,  // Apply the following rules to .js files
        exclude: /node_modules/,  // Exclude node_modules directory
        use: {
          loader: 'babel-loader',  // Use babel-loader for .js files
        },
      },
    ],
  },
};
