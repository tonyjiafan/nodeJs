'use strict'
// const config = require('../config');  //接口文件
const database = require('./Dao/database');  //数据库模块

//渲染 我的介绍
exports.introductionPage = (req,res)=>{
  res.render('pages/introduction',{
      layout:'intr',
      title:'DetailsPage',
      data:'',
      seaModule:'/static/js/sea_module/introduction/introduction.js',
      cssModule:'/static/css/css_module/introduction/introduction.css'
  })
}
