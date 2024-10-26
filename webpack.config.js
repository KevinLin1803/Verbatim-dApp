import path from 'path';

export default {
  entry: "./src/index.js",
  target: "node", // Ensure the target is set to Node.js
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
    __filename: true, // This line ensures __dirname and __filename work as expected
  },
  module: {
    rules: [
      {
        test: /\.node$/, // Match .node files
        use: 'file-loader',
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
  externals: {
    mongodb: 'commonjs mongodb', // Exclude mongodb from the bundle
    '@mongodb-js/zstd': 'commonjs @mongodb-js/zstd',
    '@napi-rs/snappy': 'commonjs @napi-rs/snappy',
  },
  resolve: {
    extensions: ['.js', '.json', '.node'], // Include .node in resolved extensions
  },
};