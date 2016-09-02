define(function(require,exports,module){
  //引入模块
  var $ = require('../../outerPlugin/jquery.min'),
      util = require('../../util'),
      reqAjax = util.reqAjax;

  $('#btn').on('click',function(){
    var successFn = function(data){
     $('#text_box').append('我是' + data.name + '我的职业是' + data.job + '我今年' + data.age + '岁')
   }
   reqAjax('POST','/home/inforData','',true,function(data){
       if(data.success){
         swal({
             title:'Success',
             text:"请求数据成功!",
             type:"success",
             // confirmButtonText:'确认',
             showConfirmButton:false,
             confirmButtonColor:'#fc5144',
             timer:1000}),successFn(data);
       } else {

       }
     })
  })//click函数的闭合标签

  //实验连接数据库
  $('input[name=username]').on('blur',function(){
    if($(this).val() == ''){
      swal({
          title:'错误',
          text:"用户名不能为空!",
          type:"warning",
          confirmButtonText:'确认',
          // showConfirmButton:false,
          confirmButtonColor:'#fc5144'})
    } else {
      var successFn = function(data){
        var data = data.data[0],
            pwd = data.u_pwd;
            $('input[name=password]').val(pwd);
      }

      var username = $(this).val(),param = {};
          param.username = username;
      var jsonData = JSON.stringify(param);

      reqAjax('POST','/home/postDataBase',jsonData,true,function(data){
          if(data.success){
            successFn(data);
          } else {

          }
        })
    } //else 闭合标记
  })

  //登录验证
  $('#go_about').on('click',function(){
    console.log('sssssssss')
    if($('input[name=username]').val() == '' || $('input[name=password]').val() == ''){
      swal({
          title:'错误',
          text:"用户名或密码不能为空!",
          type:"warning",
          confirmButtonText:'确认',
          // showConfirmButton:false,
          confirmButtonColor:'#fc5144'})
    } else {
      var successFn = function(data){
          location.href = '/about';
      }

      var password = $('input[name=password]').val(),
          username = $('input[name=username]').val(),
          param = {};
          param.username = username;
          param.password = password;
      var jsonData = JSON.stringify(param);

      reqAjax('POST','/home/login',jsonData,true,function(data){
          if(data.success){
            successFn(data);
          } else {
          }
        })
    } //else 闭合标记

  })






}) //define闭合标记
