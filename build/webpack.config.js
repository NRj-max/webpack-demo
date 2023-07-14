// // webpack.config.js

// const path = require("path");
// // 对象
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// // 解构赋值
// // const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// module.exports = {
//   mode: "development", // 开发模式
//   entry: ["babel/polyfill", path.resolve(__dirname, "../src/main.js")], // 入口文件
//   output: {
//     filename: "[name].[hash:8].js", // 打包后的文件名称
//     path: path.resolve(__dirname, "../dist"), // 打包后的目录
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: path.resolve(__dirname, "../public/index.html"),
//     }),
//     new CleanWebpackPlugin(),
//   ],
//   rules: [
//     {
//       test: /\.css$/,
//       use: ["style-loader", "css-loader"],
//     },
//     {
//       test: /\.less$/,
//       use: ["style-loader", "css-loader", "less-loader"], // 从右向左解析原则
//     },
//     {
//       test: /\.less$/,
//       use: [
//         "style-loader",
//         "css-loader",
//         {
//           loader: "postcss-loader",
//           options: {
//             plugins: [require("autoprefixer")],
//           },
//         },
//         "less-loader",
//       ], // 从右向左解析原则
//     },
//     {
//       test: /.js$/,
//       use: {
//         loader: "babel-loader",
//         options: {
//           presets: ["@babel/preset-env"],
//         },
//       },
//       exclude: /node_modules/,
//     },
//   ],
// };
// // babel-loader只会将 ES6/7/8语法转换为ES5语法，但是对新api并不会转换 例如(promise、Generator、Set、Maps、Proxy
// webpack.config.js
const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
const vueLoaderPlugin = require('vue-loader/lib/plugin')
const Webpack = require('webpack')
module.exports = {
    mode:'development', // 开发模式
    entry: {
      main:path.resolve(__dirname,'../src/main.js'),
    }, 
    output: {
      filename: '[name].[hash:8].js',      // 打包后的文件名称
      path: path.resolve(__dirname,'../dist')  // 打包后的目录
    },
    module:{
      rules:[
        {
          test:/\.vue$/,
          use:['vue-loader']
        },
        {
          test:/\.js$/,
          use:{
            loader:'babel-loader',
            options:{
              presets:[
                ['@babel/preset-env']
              ]
            }
          }
        },
        {
          test:/\.css$/,
          use: ['vue-style-loader','css-loader',{
            loader:'postcss-loader',
            options:{
              plugins:[require('autoprefixer')]
            }
          }]
        },
        {
          test:/\.less$/,
          use: ['vue-style-loader','css-loader',{
            loader:'postcss-loader',
            options:{
              plugins:[require('autoprefixer')]
            }
          },'less-loader']
        }
      ]
    },
    resolve:{
      alias:{
        'vue$':'vue/dist/vue.runtime.esm.js',
        ' @':path.resolve(__dirname,'../src')
      },
      extensions:['*','.js','.json','.vue']
    },
    devServer:{
      port:3000,
      hot:true,
      contentBase:'../dist'
    },
    plugins:[
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template:path.resolve(__dirname,'../public/index.html'),
        filename:'index.html'
      }),
      new vueLoaderPlugin(),
      new Webpack.HotModuleReplacementPlugin()
    ]
}
