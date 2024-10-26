import Dotenv from "dotenv-webpack";
import path from 'path';

export default {
  entry: "./src/index.js",
  target: "node",
  mode: "development", // Change to "production" when ready
  devtool: "source-map",
  optimization: {
    usedExports: false,
  },
  stats: {
    moduleTrace: false,
  },
  node: {
    __dirname: true,
    __filename: true, // Add this line if you want to use __filename
  },
  module: {
    rules: [
      {
        test: /\.node$/, // Match .node files
        use: 'file-loader', // Use file-loader for .node files
      },
      {
        test: /\.js$/, // Match JavaScript files for Babel transpilation
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [new Dotenv()],
};
