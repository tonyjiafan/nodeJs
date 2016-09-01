/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+		通过服务层渲染页面发送数据【在此层请求接口数据】              +
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
'use strict'
// const config = require('../config');  //接口文件
const database = require('./Dao/database');   //数据库模块

//渲染home页面
exports.renderHomePage = (req,res) =>{
  let obj = {};
      obj.title = 'home主页';
      obj.info = '我是从服务层传送过来的';
  res.render('pages/home',{
      layout:'index',
      title:obj.title,
      infoData:obj,
      seaModule:'/static/js/sea_module/home/home.js',  //没有使用模块化必须要配置完整的路劲和文件名
      cssModule:'/static/css/css_module/home/home.css'   //没有使用模块化必须要配置完整的路劲和文件名
  })
}

exports.postInforData = (req,res) =>{
  let data = {};
      data.success = true;
      data.errMsg = '请将controller文件夹下的home.js文件的postInforData方法的  data.success = false改为true';
      data.name = 'tonyjiafan';
      data.job = 'web前端';
      data.age = '18';
      data.sex = 'man';

      console.log(data)
      res.send(data)
}

// 请求持久层 数据库
exports.postDataBase = (req,res) =>{
  let jsonData = req.body.param,
      paramObj = JSON.parse(jsonData);
      database.query("select * from t_user t where t. u_name = ?",[paramObj.username],function(data) {
        var msg = {};
            msg.success = true;
            msg.data = data;
        res.send(msg);
   })
}
