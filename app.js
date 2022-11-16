require('./db')
require('express-async-errors')
let config = require('./config')
let secretRouter = require('./router/secret');
let bodyParser = require('body-parser');
let express = require('express')
let morgan = require('morgan')
let app = express();

//后端启动前配置
app.use(morgan('combined'))
app.use(bodyParser.json());
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    next();
});
//配置入口
app.use("/secret",secretRouter);
//错误返回
app.use((err,res)=>{
    res.send({
        code:-1,
        msg:err.toString()
    })
})

//监听
app.listen(config.PORT)