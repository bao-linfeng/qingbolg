var webpack = require('webpack');

// css 单独打包，使用该插件后就不需要配置style-loader了
// 本来是内联在最终的网页里，现在通过外联方式，可以在/dist文件夹下找到单独的css文件

var config = {
    devtool:"eval-source-map",
    entry:['webpack/hot/dev-server',__dirname + '/app/main.js'], // 唯一的入口文件
    output: {
        path: (__dirname+'/build'), //打包后的文件存放的地方
        filename: 'bundle.js'
    },
    resolve: {
        alias: {

        }
    },
    module:{
        //loaders加载器
        loaders:[
            {
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                loader:'babel-loader'
            },
            {
                test:/\.css$/,
                loader:'style-loader!css-loader'
            },
            {
                test:/\.(png|jpg)$/,
                loader:'url-loader?limit=8192'
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()//热模块替换插件
    ],

    //webpack-dev-server配置
    devServer: {
        contentBase: './build',//默认webpack-dev-server会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录（本例设置到"build"目录）
        historyApiFallback: true,//在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
        inline: true,//设置为true，当源文件改变时会自动刷新页面
        port: 5555,//设置默认监听端口，如果省略，默认为"8080"
        host: '0.0.0.0',
        public: '192.168.1.131:5555'
    }

    
};

module.exports=config;