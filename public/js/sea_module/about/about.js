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
              swal({title:'Success',
                  text:"请求数据成功!",
                  type:"success",
                  // confirmButtonText:'确认',
                  showConfirmButton:false,
                  confirmButtonColor:'#fc5144',
                  timer:1000}),successFn(data);
            }else {

            }
        })
    })

})
