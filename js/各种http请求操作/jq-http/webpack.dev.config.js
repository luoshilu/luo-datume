const webpack = require('webpack');

// 读取同一目录下的 base config
const config = require('./webpack.base.config');

// 添加 webpack-dev-server 相关的配置项
config.devServer = {
  contentBase: './src',
  hot: true,
  publicPath: '/',
  proxy: {
  '/': {
      target: 'http://localhost:3000/',
      secure: true
    }
  }
};
// 有关 Webpack 的 API 本地代理，另请参考 https://webpack.github.io/docs/webpack-dev-server.html#proxy

config.module.rules.push(
 {
   test: /\.less$/,
   use: [
     'style-loader',
     'css-loader',
     'less-loader'
   ],
   exclude: /devServer/
 }
);

module.exports = config;