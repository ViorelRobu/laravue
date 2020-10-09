const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        app: './resources/js/app.js',
        vendor: ['vue', 'axios']
    },
    output: {
        path: path.resolve(__dirname, 'public/js'),
        filename: '[name].js',
        publicPath: './public'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: '/node_modules',
                loader: 'babel-loader'
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
        }
    },
    mode: 'development',
    optimization: {
        minimize: false,
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: 'vendor',
                    chunks: 'initial',
                    minChunks: 2
                }
            }
        }
    },
    plugins: []
};

if (process.env.NODE_ENV === JSON.stringify('production')) {
    module.exports.optimization.minimize = true;
    module.exports.mode = 'production';
    module.exports.plugins.push(
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: 'production'
            }
        })
    );
}
