const path = require('path');

// 定数MODEに'production'か'development'どちらかを代入します
// 'production'モードではファイルは圧縮して最適化され、'development'の場合は圧縮されず、デバッグに便利なソースマップが出力されます
const MODE = "production";

// ソースマップの利用有無(productionのときはソースマップを利用しない)
const enabledSourceMap = MODE === "development";

module.exports = {

    mode: "development",
    entry: './src/index.tsx',
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        filename: 'global.js',
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: { presets: ['@babel/preset-env', '@babel/react'] },
                    },
                    {
                        loader: 'ts-loader',
                        options: {
                            configFile: path.resolve(__dirname, 'tsconfig.json'),
                        },
                    },
                ],
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test:/\.(png|jpg|jpeg|gif|svg)/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'images/[name].[ext]'
                        }
                    }
                ]
            }
        ],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        port: 3000,
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
    },
    target: 'web',
};