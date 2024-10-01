const express = require('express');
const app = express();


//app.get() 是 Express 的路由方法，它用于为 GET 请求定义路由处理函数
//get post put delete patch
app.get('/', (req, res) => {
  res.send('Hello World');
}   );


//通过express叫node去监听3000端口
const PORT = process.env.PORT || 3000;
app.listen(3000, () => {
  console.log('Server is running on port 3000');
}   );