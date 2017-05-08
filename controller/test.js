'use strict'
// const config = require('../config');  //接口文件


//渲染About 页面
exports.renderTestPage = (req,res)=>{
  res.render('pages/test',{
      layout:'index',
      title:'test',
      seaModule:'/static/js/sea_module/test/test.js' ,  //没有使用模块化必须要配置完整的路劲和文件名
      cssModule:'/static/css/css_module/test/test.css'   //没有使用模块化必须要配置完整的路劲和文件名
  })
}
