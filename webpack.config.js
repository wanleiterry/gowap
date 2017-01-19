var webpack = require('webpack');
var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');

module.exports = {
  entry: ['webpack/hot/dev-server', path.resolve(__dirname, 'app/index.jsx')],
  output: {
    path: path.resolve(__dirname, 'build'),//文件输出的位置与require的dest相同；
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].chunk.js',//输出文件的名字
     publicPath:'/'
  },
  module: {
    loaders: [
      {
        test:/\.scss$/,
        loader: 'style!css!sass'
      },
      {
        test:/\.css$/,loader:'style!css'
      },
      {
        test:/\.js$/,
        loader:'babel',
        exclude:/node_modules/
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        loader: 'url?limit=100000&name=img/[name].[ext]'
},
      {//对格式的文件进行处理
        test: /\.jsx?$/,//正则匹配文件处理类型
         exclude: /node_modules/,//屏蔽不需要处理的文件

        loader: 'babel',//babel处理
        query: {
          presets:['es2015','react']//额外的设置选项,对es2105和babel进行处理
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    // 提高webpack搜索的速度
    alias: {
      moment: true
    }
  },
  
  externals: [],
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      children: true,
      minChunks: 2,
      async: true
    }),
    // new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.[hash:8].js'),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: "build",//本地服务器所加载的页面所在的目录
    colors: true,//终端中输出结果为彩色
    historyApiFallback: true,//但页面不跳转
    inline: true//实时刷新
  
  }
};