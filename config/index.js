/**
 * Created by zrr on 2018-04-12.
 */
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')//使用Node自带的文件路径插件
module.exports = {
  //生产环境配置
  build: {
    //http://vuejs-templates.github.io/webpack/backend.html
    // 使用 config/prod.env.js 中定义的编译环境
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),   // 编译注入的 index.html 文件,必须是本地的绝对路径
    assetsRoot: path.resolve(__dirname, '../dist'),   // 编译输出的静态资源根路径
    assetsSubDirectory: 'static',    // 编译输出的二级目录
    assetsPublicPath: '/',    // 编译发布上线路径的根目录，可配置为资源服务器域名或 CDN 域名
    productionSourceMap: true,    //生成用于生产构建的源映射
    devtool: '#source-map',
    productionGzip: false,    // 是否开启 gzip
    productionGzipExtensions: ['js', 'css'],    // 需要使用 gzip 压缩的文件扩展名
    bundleAnalyzerReport: process.env.npm_config_report    //一个实用工具,用于分析项目的依赖关系https://www.npmjs.com/package/webpack-bundle-analyzer
  },
  //开发环境
  dev: {
    env: require('./dev.env'),    // 使用 config/dev.env.js 中定义的编译环境
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8088,    // 运行测试页面的端口
    autoOpenBrowser: true,    //是否自动打开浏览器
    assetsSubDirectory: 'static',    // 编译输出的二级目录
    assetsPublicPath: '/',    // 编译发布上线路径的根目录，可配置为资源服务器域名或 CDN 域名
    proxyTable: {
      //https://github.com/chimurai/http-proxy-middleware,配置方式
    },    // 需要 proxyTable 代理的接口（可跨域）http://vuejs-templates.github.io/webpack/proxy.html
    devtool: 'eval-source-map',
    cssSourceMap: false   // 是否开启 cssSourceMap
  }
}