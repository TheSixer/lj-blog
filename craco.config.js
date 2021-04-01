/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
// const CracoAntDesignPlugin = require('craco-antd');
// const webpack = require('webpack');
const CracoAlias = require('craco-alias');
// const CracoLessPlugin = require('craco-less');
const CracoStylusPlugin = require('craco-stylus-loader');
// const cracoPluginStyleResourcesLoader = require('craco-plugin-style-resources-loader');

const path = require('path');

const pathResolve = (pathUrl) => path.join(__dirname, pathUrl);

module.exports = {
  webpack: {
    // 别名配置
    alias: {
      '@': pathResolve('.'),
      src: pathResolve('src'),
      // hooks: pathResolve('src/hooks'),
      pages: pathResolve('src/pages'),
      store: pathResolve('src/store'),
      utils: pathResolve('src/utils'),
      assets: pathResolve('src/assets'),
      styles: pathResolve('src/styles'),
      router: pathResolve('src/router'),
      actions: pathResolve('src/actions'),
      reducers: pathResolve('src/reducers'),
      services: pathResolve('src/services'),
      // common: pathResolve('src/common'),
      components: pathResolve('src/components'),
    },
  },
  babel: {
    plugins: [['@babel/plugin-proposal-decorators', { legacy: true }]],
  },
  plugins: [
    /* antd组件按需加载&样式覆盖等 */
    // {
    //   plugin: CracoAntDesignPlugin,
    //   options: {
    //     customizeThemeLessPath: path.join(
    //       __dirname,
    //       'src/styles/antd.theme.less'
    //     ),
    //   },
    // },
    /* 支持less module */
    // {
    //   plugin: CracoLessPlugin,
    //   options: {
    //     cssLoaderOptions: {
    //       modules: { localIdentName: '[local]_[hash:base64:5]' },
    //     },
    //     modifyLessRule(lessRule) {
    //       lessRule.test = /\.(module)\.(less)$/;
    //       lessRule.exclude = path.join(__dirname, 'node_modules');
    //       return lessRule;
    //     },
    //   },
    // },
    /* 支持stylus module */
    {
      plugin: CracoStylusPlugin,
    },
    // {
    //   plugin: cracoPluginStyleResourcesLoader,
    //   options: {
    //     patterns: path.join(__dirname, 'src/stylus/common.styl'),
    //     styleType: 'stylus',
    //   },
    // },
    /* 别名设置 */
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        baseUrl: './src',
        tsConfigPath: './tsconfig.extends.json',
      },
    },
  ],
  devServer: (devServerConfig) => {
    return {
      ...devServerConfig,
      // 服务开启gzip
      compress: true,
      proxy: {
        '/api': {
          target: 'http://localhost:8080/',
          changeOrigin: true,
          xfwd: false,
        },
      },
    };
  },
};
