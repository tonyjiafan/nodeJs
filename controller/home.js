/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+		通过服务层渲染页面发送数据【在此层请求接口数据】              +
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
'use strict'
const config = require('../config');  //接口文件

//渲染home页面
exports.renderHomePage = (req,res) =>{
  let obj = {};
      obj.title = 'home主页';
      obj.info = '我是从服务层传送过来的';
  res.render('pages/home',{
      layout:'index',
      title:obj.title,
      infoData:obj,
      seaModule:'/static/js/sea_module/home.js' ,  //没有使用模块化必须要配置完整的路劲和文件名
      cssModule:'/static/css/css_module/home/home.css'   //没有使用模块化必须要配置完整的路劲和文件名
  })
}

exports.postInforData = (req,res) =>{
  let data = {};
      data.name = 'tonyjiafan';
      data.job = 'web前端';
      data.age = '18';
      data.sex = 'man';

      res.send(data)
}
