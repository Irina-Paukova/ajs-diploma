const path = require('path');

module.exports = {
    entry: './src/index.js',

    output: {
        path:path.resolve(__dirname,'dist'),
        filename: 'app.bundle.js',
    },

    module: {
        rules:[
            // txt
            {
            test: /\.txt$/,
            use: 'raw-loader'
            },

            // images
            {
                test: /\.(png|jpg|gif)$/i,
                use: 'url-loader',
            },

            //style.css
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    }
};