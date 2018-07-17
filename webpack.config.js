const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: ["./src/js/main.js", "./src/sass/main.scss"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/dist"
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: path.resolve(__dirname, "node_modules"),
        loader: "babel-loader",
        options: {
          presets: ["es2015", "react"]
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              options: {
                modules: true,
                importLoaders: 1,
                localIdentName: "[sha1:hash:7]"
              },
            },
            "postcss-loader",
            {
              loader: "sass-loader",
              options: {
                outputStyle: "compressed"
              }
            }
          ]
        })
      }
    ]
  },

  plugins: [new ExtractTextPlugin("style.css")],

  devServer: {
    inline: true,
    port: 3000
  }

};
