import path from "path";

// eslint-disable-next-line no-undef
module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    // eslint-disable-next-line no-undef
    path: path.resolve(__dirname, 'dist')
  }
};
