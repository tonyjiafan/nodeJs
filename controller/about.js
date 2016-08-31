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

exports.postData = (req,res)=>{
  let arry = [],obj = {};
      obj.name = '成都';
      obj.addres = '高新区';
      obj.infor = '天府三街****广场';
      arry.push(obj)
        console.log(arry)

  let htmlData = arry,html = '',data = {};
      htmlData.forEach(function(element,index){
      html +=   `<tr>
                  <td>${element.name}</td>
                  <td>${element.addres}</td>
                  <td>${element.infor}</td>
                </tr>`
      })
      data.html = html;
      data.success = true;
      data.errMsg = '请将controller文件夹下的about.js文件的postData方法的  data.success = false改为true';
      res.send(data)
}
