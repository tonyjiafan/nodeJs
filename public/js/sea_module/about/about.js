define(function(require,exports,module){
  //引入模块
  var $ = require('../../outerPlugin/jquery.min');

    $('#get_data').on('click',function(){
      console.log('about')
      $.ajax({
        type:'GET',
        url:'/about/getData'
      }).done(function(data){
          console.log(data)
          $('#tb_body').append(data.html)
      })
    })

})
