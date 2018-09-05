var path = require("path");
var webpack = require("webpack");

module.exports = {
    "entry": 
        [
            "./src/index.js",
            "webpack/hot/dev-server",
            "webpack-dev-server/client?http://localhost:8080"
        ],
    "output": {
        path: path.join(__dirname, "dist"),
        publicPath: "/dist/",
        filename: "bundle.js"
    },
    mode: 'development',
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ],
    "resolve": {
        "modules": [
            path.resolve(),
            "node_modules"
        ]
    }
};
