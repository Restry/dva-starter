const fs = require('fs');
const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = function (webpackConfig, env) {
  webpackConfig.babel.plugins.push('transform-runtime');

  // Support hmr
  if (env === 'development') {
    webpackConfig.babel.plugins.push(['dva-hmr', {
      entries: {
        index: './src/index.js',
        common: ['react', 'dva'],
      },
      watchOptions: {
        poll: true,
      },
    }]);
  }
  // webpackConfig.entry={
  //   'index':'./src/index.js',
  //   'common':['react','dva']
  // }
  // webpackConfig.output= {
  //     path: './dist',
  //     publicPath: '',
  //     filename: 'js/[name].js',
  //     chunkFilename: 'js/[chunkhash:8].[name].js'
  //   },

  webpackConfig.plugins.push(new HtmlwebpackPlugin({
    title: 'SOPS.APP',
    filename: 'index.html', //生成的html存放路径，相对于 path
    template: './src/_layouts.ejs', //html模板路径
    inject: true, //允许插件修改哪些内容，inject: true, 包括head与body   inject: head, 只到head
    hash: true, //为静态资源生成hash值
    chunks: ['index', 'common'],
    cdn: '/assets/CDNLibs', //no need more move to chunks
  }))
  webpackConfig.babel.cacheDirectory = false
  // Support CSS Modules
  // Parse all less files as css module.
  webpackConfig.module.loaders.forEach((loader, index) => {
    if (typeof loader.test === 'function' && loader.test.toString().indexOf('\\.less$') > -1) {
      loader.include = /node_modules/;
      loader.test = /\.less$/;
    }
    if (loader.test.toString() === '/\\.module\\.less$/') {
      loader.exclude = /node_modules/;
      loader.test = /\.less$/;
    }
    if (typeof loader.test === 'function' && loader.test.toString().indexOf('\\.css$') > -1) {
      loader.include = /node_modules/;
      loader.test = /\.css$/;
    }
    if (loader.test.toString() === '/\\.module\\.css$/') {
      loader.exclude = /node_modules/;
      loader.test = /\.css$/;
    }
  });
  console.log(JSON.stringify(webpackConfig));
  return webpackConfig;
};
