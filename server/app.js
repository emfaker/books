//引入路由器user.js
const  bookRouter= require("./router/book.js");
//y引入express
const express= require("express");
//引入body-paser中间件
const bodyParser=require("body-parser");
//引用cors的中间件
const cors =require("cors");

 //引入jwt模块
//  const jwt = require("./jwt.js")

//创建服务器
 const app = express();
 //设置端口号
app.listen(9090)
//托管图片资源
app.use(express.static("public"))

app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  // res.header('Access-Control-Allow-Credentials',true);
  // res.header("Access-Control-Max-Age", '30000');
  res.header("Access-Control-Allow-Headers","X-Requested-With,content-type");
  res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
  // res.header("Cache-Control", "max-age=200");
  res.header("Cache-Control", "private");
  res.header('Content-Type','application/json; charset=utf-8');
  if (req.method.toLowerCase() == 'options')
    res.send(200);
  else
    next();
});


//应用bodyParser中间件 并挂载
app.use(bodyParser.urlencoded({
	extended:false
}));


app.use("/books",bookRouter);

console.log("服务器开启.监听端口号为9090");



