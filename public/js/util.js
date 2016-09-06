'use strict'
define(function(require,exports,module){
  var $ = require('./outerPlugin/jquery.min');
  //ajax提交
  exports.reqAjax = function(type,url,data,async,callback1,callback2){ //callback2为失败回调
    $.ajax({
             type:type,
             url:url,
             data:{param:data},
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
                },10000);
    })
  }

  //cookie操作
	//设置cookie
		exports.setCookie = function(name,value) {
		    var exp = new Date();
		    exp.setTime(exp.getTime() + 12*60*60*1000);
		    document.cookie = name + "="+ escape(value) + ";expires=" + exp.toGMTString()+";path=/";
		}
	//获取cookie
		exports.getCookie = function(name) {
		    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");

		    if(arr=document.cookie.match(reg))
		        return unescape(arr[2]);
		    else
		        return null;
		}
	//删除cookie
		exports.delCookie = function(name){
		var exp = new Date();
		exp.setTime(exp.getTime() - 1);
		var cval=exports.getCookie(name);
		if(cval!=null)
		document.cookie= name + "="+cval+";expires="+exp.toGMTString()+";path=/";
		}

})
