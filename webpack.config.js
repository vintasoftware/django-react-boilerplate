const path = require("path");

const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BundleTracker = require("webpack-bundle-tracker");

module.exports = (env, argv) => {
  const isDev = argv.mode === "development";
  const nodeModulesDir = path.resolve(__dirname, "node_modules");
  const localhostOutput = {
    path: path.resolve("./frontend/webpack_bundles/"),
    publicPath: "http://localhost:3000/frontend/webpack_bundles/",
    filename: "[name].js",
  };
  const productionOutput = {
    path: path.resolve("./frontend/webpack_bundles/"),
    publicPath: "auto",
    filename: "[name]-[chunkhash].js",
  };

  return {
    mode: isDev ? "development" : "production",
    devtool: "source-map",
    devServer: {
      hot: true,
      historyApiFallback: true,
      host: "0.0.0.0",
      port: 3000,
      // Allow CORS requests from the Django dev server domain:
      headers: { "Access-Control-Allow-Origin": "*" },
    },
    context: __dirname,
    entry: ["./frontend/js/index.tsx"],
    output: isDev ? localhostOutput : productionOutput,
    module: {
      rules: [
        {
          test: /\.(js|mjs|jsx|ts|tsx)$/,
          use: {
            loader: "swc-loader",
          },
        },
        {
          test: /\.css$/,
          use: [
            isDev && "style-loader",
            !isDev && MiniCssExtractPlugin.loader,
            "css-loader",
            {
              loader: "postcss-loader",
              options: {
                postcssOptions: {
                  plugins: [["postcss-preset-env"]],
                },
              },
            },
          ].filter(Boolean),
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            isDev && "style-loader",
            // Optimizes CSS in chunks
            !isDev && MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
          ].filter(Boolean),
        },
        {
          test: /\.(svg)(\?v=\d+\.\d+\.\d+)?$/,
          type: "asset",
        },
        {
          test: /\.(woff(2)?|eot|ttf|otf)(\?v=\d+\.\d+\.\d+)?$/,
          type: "asset",
        },
        {
          test: /\.(png|jpg|jpeg|gif|webp)?$/,
          type: "asset",
        },
      ],
    },
    plugins: [
      !isDev &&
      new MiniCssExtractPlugin({ filename: "[name]-[chunkhash].css" }),
      isDev && new ReactRefreshWebpackPlugin(),
      new BundleTracker({
        path: __dirname,
        filename: "webpack-stats.json",
      }),
    ].filter(Boolean),
    resolve: {
      modules: [nodeModulesDir, path.resolve(__dirname, "frontend/js/")],
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
    optimization: {
      minimize: !isDev,
      splitChunks: {
        // include all types of chunks
        chunks: "all",
      },
    },
  };
};
