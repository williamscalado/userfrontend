module.export = {
    presets:[
        "@babel/preset-env",
        "@babel/preset-typescript",
        "@babel/preset-flow",
        ["@babel/preset-react", {
            runtime: 'automatic'
        }]
    ]
}