const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const rulesForCSS = {
  test: /\.css$/i,
  use: ["style-loader", "css-loader"],
};

const rulesForJSS = {
  test: /\.js$/i,
  use: {
    loader: "babel-laoder",
    options: {
      presets: ["@babel/preset-env"],
    },
  },
};

const rules = [rulesForCSS, rulesForJSS];

module.exports = (env, argv) => {
  const { mode } = argv;
  const isProduction = mode === "production";
  return {
    output: {
      filename: isProduction ? "[name].[contenthash].js" : "bundle.js",
      path: path.resolve(__dirname, "build"),
      clean: true,
    },
    module: {
      rules: rules,
    },
    plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
  };
};
