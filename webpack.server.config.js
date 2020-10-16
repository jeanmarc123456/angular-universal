var nodeExternals = require('webpack-node-externals');
var path = require('path');
var webpack = require('webpack');
const { Extension } = require('typescript');

module.exports = {
  entry: {
    server: './src/server.ts'
  },
  resolve: {
    extensions: [".ts", ".js"]

  },
  target: "node",
  externals: [
    nodeExternals({
      allowlist: [
        /^ngx-bootstrap/
      ]
    }),
    /(main\..*\.js)/
    ],
    node : {
      __dirname: false,
      __filename: false,
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: "[name].js"
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          loader: "ts-loader"
        }
      ]
    }

    };




