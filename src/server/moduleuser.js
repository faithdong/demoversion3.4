/*
 * @Author: zhongxd 
 * @Date: 2019-03-11 23:12:41 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2019-03-19 21:36:38
 */

const mongoose = require('mongoose');

 const DB_URL = 'mongodb://localhost:27017/vue-veux';
// const DB_URL = 'mongodb://localhost:27017/imooc-chat';

mongoose.connect(DB_URL);

const models = {
  user: {
    'user': { type: String, require: true },
    'pwd': { type: String, require: true },
    'type': { type: String, require: true },
    'avatar': { type: String }, //头像
    'desc': { type: String }, //个人简介
    'title': { type: String },//职位
    'money': { type: String },  // 工资
    'company': { type: String } // 公司
  },
  chat: {

  }
}

for( let m in models){
  mongoose.model(m , new mongoose.Schema(models[m]));
}

module.exports = {
  getModel:function(name){
    return mongoose.model(name);
  }
}