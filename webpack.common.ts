import path from 'path';
import { Configuration } from 'webpack';

const common: Configuration = {
  entry: {
    echo: path.join(__dirname, 'src/client/components/echo/index.tsx'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(tsx)?$/,
        use: [{ loader: 'awesome-typescript-loader' }],
      },
      {
        test: /\.js$/,
        use: ['source-map-loader'],
        enforce: 'pre',
      },
    ],
  },
};

export default common;
