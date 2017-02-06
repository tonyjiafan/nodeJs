'use strict'
// const config = require('../config');  //接口文件
const database = require('./Dao/database');  //数据库模块

//渲染 商品详情页面
exports.renderDetailsPage = (req,res)=>{
  let param = {};
      param.p_id = Number(req.query.p_id)
      database.query("select * from t_product where p_id=?",[param.p_id],function (data) {
        let detailsData = data[0];
        res.render('pages/details',{
            layout:'index',
            title:'DetailsPage',
            data:detailsData,
            seaModule:'/static/js/sea_module/details/details.js',  //没有使用模块化必须要配置完整的路劲和文件名
            cssModule:'/static/css/css_module/details/details.css'   //没有使用模块化必须要配置完整的路劲和文件名
        })
    })
}
