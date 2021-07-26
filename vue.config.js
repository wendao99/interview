module.exports = {
    devServer:{
    host:'localhost',
    port:8080,
    proxy:{
      '/api':{
        target:'https://api-wendao99.vercel.app/api/html',
        changeOrigin:true,
        pathRewrite:{
          '/api': ''
        }
      }
    }
  }
}