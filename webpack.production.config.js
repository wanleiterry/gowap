var path = require('path');
var webpack = require('webpack');
var node_modules_dir = path.resolve(__dirname, 'node_modules');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var config = {
  entry: {
    mian:path.resolve(__dirname, 'app/index.jsx'),
    vendors: ['react','react-router','react-dom']


  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js' // 注意我们使用了变量
  },
  module: {
    loaders: [
{
        test: /.scss$/,
        loader: ExtractTextPlugin.extract("style", 'css!sass')//css分离
      },
      {
        test:/\.css$/,loader:'style!css'
      },
    {
      test: /\.js$/,
      exclude: [node_modules_dir],
      loader: 'babel'
    },
    {
        test: /\.(png|jpg|jpeg|gif)$/,
        loader: 'url-loader?limit=819&name=imgs/[hash:8].[name].[ext]'
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
  plugins: [
  new ExtractTextPlugin("app.css", {
          allChunks: true,
          disable: false
      }),
  new ExtractTextPlugin('css/[name].css?[contenthash]'),
    new webpack.optimize.CommonsChunkPlugin('vendors', '[name].js'),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false,  // remove all comments
      },
    }),
    new webpack.DefinePlugin({
      'process.env': {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    })
  ]
};

module.exports = config;