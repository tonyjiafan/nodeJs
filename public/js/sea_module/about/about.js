define(function(require,exports,module){
  //引入模块
  var $ = require('../../outerPlugin/jquery.min'),
      util = require('../../util'),
      reqAjax = util.reqAjax;

    $('#get_data').on('click',function(){
      var successFn = function(data){
          $('#tb_body').append(data.html)
      }
        reqAjax('POST','/about/getData','',true,function(data){
            if(data.success){
              successFn(data)
            }else {

            }
        })
    })

})
