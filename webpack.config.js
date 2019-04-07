const path = require('path');

module.exports = {
    entry: './assets/ts/index.ts',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve('./assets/js/')
    },
    watch: true,
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    }
};