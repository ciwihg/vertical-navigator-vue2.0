var path = require('path')
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
module.exports={
  entry:{
    'vertical-navigator':'./src/index.js'
  },
  output:{
    filename: "[name].js",
    path:resolve ("dist"),
    library: 'V',
    libraryTarget: 'umd'
  },
  module:{
    rules:[
      {
        test:/\.vue$/,
        loader:'vue-loader'
      },
      {
        test:/\.js$/,
        loader:'babel-loader',
        include: [resolve('src')]
      }
    ]
  }
}
