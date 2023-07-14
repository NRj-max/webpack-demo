const HappyPack =  require('happypack')
const os = require('os')
const happypackThread = HappyPack.ThreadPool({size:os.cpus().length})
module.exports = {
    moudles:{
        rules:[{
            test:/\.js$/,
            use:[{loader:'happypack/loader?id=happyBabel'}],
            exclude:/node_modules/
        }],
        plugin:[
            new HappyPack({
                id:'happyBabel',
                loaders:[
                    {
                        loader:'babel-loader',
                        options:{
                            presets:[
                                ['@babel/preset-env']
                            ],
                            cacheDirectory:true
                        }
                    }
                ],
                ThreadPool:happypackThread
            })
        ]
    }
}