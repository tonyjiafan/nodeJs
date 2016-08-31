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
           successFn(data)
       }else {

       }
     })
  })//click函数的闭合标签

})
