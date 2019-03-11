/*
 * @Author: zhongxd 
 * @Date: 2019-03-11 23:07:15 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2019-03-11 23:07:58
 */



const express = require('express');

const userRouter = require('./user');

const app = express();



app.use('/user',userRouter);
app.listen(9093,function(){
  // eslint-disable-next-line no-console
  console.log('Node app start at port 9093');
})