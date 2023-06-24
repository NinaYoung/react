const proxy = require('http-proxy-middleware')

module.exports = function(app){
    app.use(
        proxy('/api1',{   //  遇见/api1前缀的请求，才会触发该代理
            target:'http://localhost:5000', //请求转发给谁
            changeOrigin:true,     //   控制服务器收到的请求头中host字段值   
             //true:host值为服务器的端口5000  一般设置为true
             //false:host值为客户端的端口3000  默认为false
            pathRewrite:{'^/api1':''}  //重写请求路径（必须写）
        }),
        proxy('/api2',{
            target:'http://localhost:5001',
            changeOrigin:true,
            pathRewrite:{'^/api2':''}
        })
    )
}