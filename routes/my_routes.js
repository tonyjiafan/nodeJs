/*+++++++++++++++++++++++++++++++++++++++++++++
+		    路由定义应用程序应该响应的页面             +
+++++++++++++++++++++++++++++++++++++++++++++*/

'use strict'
const  express = require('express'),
       home = require('../controller/home'),   //服务层(控制器)
       router = express.Router();



router.get('/',function(req,res){
	res.send('<h1 style="margin:50px 100px;color:#fc5144;font-weight:700;">Express</h1><h4 style="margin:50px 100px">欢迎来到nodeJs的世界</h4>')
});


//home页路由   通过服务器渲染
router.get('/home',(req, res)=>{
    home.renderHomePage(req,res)
});


//about页路由   渲染类
router.get('/about' , function (req,res,callback) {
    res.render('pages/about',{
        title:'关于页面'     //传入页面的title
    });
});



//++++++++++++++++++++++++++++++++++++

// home页面的数据请求   数据类
router.get('/home/inforData',(req,res)=>{
    home.postInforData(req,res)
})








module.exports = router;
