'use strict'
define(function(require,exports,module){
  var $ = require('./outerPlugin/jquery.min');
  //ajax提交
  exports.reqAjax = function(type,url,data,async,callback1,callback2){ //callback2为失败回调
    $.ajax({
             type:type,
             url:url,
             data:data,
             datatype:'json',
             async:async
             }).done(function(data){
              if(data.success){
                    callback1(data)
                } else {
                    swal({title:'失败',text:data.errMsg,type:"warning",confirmButtonText:'确认',
                    confirmButtonColor:'#10aef2'});
                }
             }).fail(function(){
        swal({title:'请重试',text:"服务器正在维护中...",type:"warning",confirmButtonText:'确认',
            confirmButtonColor:'#10aef2'});
            setTimeout(function(){
                  location.reload();
                },3000);
    })
  }

})
