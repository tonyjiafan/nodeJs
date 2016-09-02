/*+++++++++++++++++++++++++++++++++++++++++++++
+		    路由定义应用程序应该响应的页面             +
+++++++++++++++++++++++++++++++++++++++++++++*/
'use strict'
const  express = require('express'),
       home = require('./controller/home'),   //服务层(控制器)
       about = require('./controller/about');   //服务层(控制器)


exports.setRequestUrl = (app) =>{
  //首次加载的页面
  app.get('/',function(req,res){
    res.send('<h1 style="margin:50px 100px;font-size:100px;color:#fc5144;font-weight:700;">Express</h1><h4 style="margin:50px 100px;font-size:40px;">欢迎来到nodeJs的世界</h4>')
  });

  //home页路由   通过服务器渲染
  app.get('/home',(req, res)=>{
      home.renderHomePage(req,res)
  });
  //about页路由   通过服务器渲染
  app.get('/about',(req,res)=>{
      about.renderAboutPage(req,res)
  });
  /*++++++++++++++++++++++++++++++++++++++++++++++++++
  *               数据类路由                          *
  ++++++++++++++++++++++++++++++++++++++++++++++++++*/
  // home页面的数据请求   数据类
  app.post('/home/inforData',(req,res)=>{
      home.postInforData(req,res)
  })
  // about页面的数据请求  数据类
  app.post('/about/getData',(req,res)=>{
      about.postData(req,res)
  })
  //实验从-数据库-拿数据的路由
  app.post('/home/postDataBase',(req,res)=>{
      home.postDataBase(req,res)
  })
  //home页实验从-login
  app.post('/home/login',(req,res)=>{
      home.postLogin(req,res)
  })
  // about页面 获取列表
  app.get('/about/getListData',(req,res)=>{
      about.getListData(req,res)
  })



}
