import * as path from 'path'
import * as webpack from 'webpack'
import 'webpack-dev-server'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import * as dotenv from 'dotenv'

const config: () => webpack.Configuration = () => {
  const env = dotenv.config().parsed
  const envObject = Object.entries(env || {}).reduce((prev, curr) => {
    return { ...prev, [`${curr[0]}`]: JSON.stringify(curr[1]) }
  }, {} as { [key: string]: string })
  if (!env) {
    throw new Error('no environment was provide!')
  }
  return {
    mode: 'development',
    entry: './src/index.tsx',
    devtool: 'eval-source-map',
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'bundle.js',
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public', 'index.html'),
      }),
      new webpack.DefinePlugin({
        ...envObject,
      }),
    ],
    module: {
      rules: [
        {
          test: /\.(js|ts)x?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.jsx', '.js'],
      alias: {
        components: path.resolve(__dirname, 'src', 'components'),
        common: path.resolve(__dirname, 'src', 'common'),
        pages: path.resolve(__dirname, 'src', 'pages'),
      },
    },
    devServer: {
      https: true,
      static: {
        directory: path.resolve(__dirname, './dist'),
      },
      historyApiFallback: true,
    },
  }
}
export default config
