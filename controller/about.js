'use strict'

const config = require('../config');  //接口文件

//渲染About 页面
exports.renderAboutPage = (req,res)=>{
  res.render('pages/about',{
      layout:'index',
      title:'About',
      seaModule:'/static/js/sea_module/about/about.js' ,  //没有使用模块化必须要配置完整的路劲和文件名
      cssModule:'/static/css/css_module/about/about.css'   //没有使用模块化必须要配置完整的路劲和文件名
  })
}
