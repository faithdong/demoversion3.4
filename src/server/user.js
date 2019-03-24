/*
 * @Author: zhongxd 
 * @Date: 2019-02-28 11:48:00 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2019-03-24 16:40:28
 */

const express = require('express');
// const utils = require('utility');
const Router = express.Router();
const modle = require('./moduleuser');
const User = modle.getModel('user');

const _filter = { 'pwd': 0, '__v': 0 };

/**
 * 获取所有用户列表
 */
Router.get('/list', function (req, res) {
  //User.remove({},function(e,d){});//删除所有用户
  //const { type } = req.query;
  User.find({}, function (err, doc) {
    return res.json({ code: 0, data: doc });
  })
});


/**
 * 登录
 */
Router.post('/login', function (req, res) {
  const { user, pwd } = req.body;
  User.findOne({ user, pwd }, _filter, function (err, doc) {
    if (!doc) {
      return res.json({ code: 1, msg: '用户名或者密码错误' });
    }
    res.cookie('userid', doc._id);
    return res.json({ code: 0, data: doc });
  })
});

/**
 * 注册
 */
Router.post('/register',function(req,res){
  // eslint-disable-next-line
  debugger;
  const { user , pwd } = req.body;
  // User.findeOne({user},function(err,doc){
  //   if(doc){
  //     return res.json({code:1, msg:'用户名重复'});
  //   }
    
  // })
  const userModel = new User({user , pwd});
    userModel.save(function(e,d){
      if(e){
        return res.json({code : 1 , msg : '后端出错了'});
      }
      return res.json({code :0 ,data:d});
    })
})


module.exports = Router;