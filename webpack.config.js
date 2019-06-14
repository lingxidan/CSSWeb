var path = require('path')
var webpack = require('webpack')
var express = require('express')// 通过 node 访问模拟数据
const app = express();
// 使用 express 框架启动一个服务器
// 2. 使用 express 来配置路由，指定接口请求
var apiRoutes = express.Router()  //定义一个路由

// 暴露 API 接口
app.use('/api',apiRoutes)

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: 'dist/',
				filename: 'build.js'
    },
    devServer: {
        // disableHostCheck: true,
        // // 允许绑定本地域名
        // allowedHosts: [
        //     'http://localhost:8081'
        // ],
        // // 调试端口
        // // port: 8081,
        // hot: true,
        // contentBase: false, // since we use CopyWebpackPlugin.
        // compress: true,
        // open:true,
        // host:"localhost",
        // port:8081,
        // https:false,
        // hotOnly:false,
        assetsSubDirectory: 'static',
        publicPath: '/',
        proxy: {
          '/api': {
              target: 'http://192.168.31.198:8081', // 接口的域名
              secure: false,  // 如果是https接口，需要配置这个参数
              changeOrigin: true, // 如果接口跨域，需要进行这个参数配置,
            //   ws: true
            //   pathRewrite: {
            //     '^/api': '/api'
            //   }
          }
        },
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ],
            }, {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {}
                    // other vue-loader options go here
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader'
            },
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': path.join(__dirname, "src"),
            // '@components': path.join(__dirname, "..", "src", "components"),
            '@static': path.join(__dirname, "static")
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true,
        overlay: true
    },
    performance: {
        hints: false
    },
    devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
        // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),
        // new htmlWebpackPlugin({
        //     template:'./index.html',
        // }),
        // new copyWebpackPlugin([
        //     {
        //         from:"./img",
        //         to: path.resolve(__dirname,"appdist/img")
        //     }
        // ])
    ])
}