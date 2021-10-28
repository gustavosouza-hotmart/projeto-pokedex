const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.tsx",
    mode: "development",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "/",
    },
    resolve: {
        extensions: [".js", ".ts", ".tsx", ".jsx", ".json"],
        alias: {
            routes: path.resolve(__dirname, "../../src/routes/"),
            common: path.resolve(__dirname, "../../src/common/"),
            components: path.resolve(__dirname, "../../src/components"),
            "@cosmos": "@hotmart/cosmos/dist",
        },
        unsafeCache: true,
    },
    module: {
        rules: [
            {
                test: /\.svg$/,
                oneOf: [
                    {
                        test: /\.svg$/,
                        issuer: /\.(s?)css$/,
                        use: "url-loader",
                    },
                    {
                        test: /\.svg$/,
                        loader: "svg-inline-loader",
                    },
                ],
            },
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                loader: "ts-loader",
                options: {
                    compilerOptions: {
                        noEmit: false,
                    },
                },
            },
            {
                test: /\.(s?)css$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                ],
            },
        ],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, "public"),
        },
        compress: true,
        port: 3000,
        open: true,
        historyApiFallback: true,
    },
    devtool: "eval-source-map",
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html"),
            favicon: path.resolve(__dirname, "src", "favicon.ico"),
        }),
    ],
};
