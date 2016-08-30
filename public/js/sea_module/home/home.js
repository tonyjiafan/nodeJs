define(function(require,exports,module){
  //引入模块
  var $ = require('../../outerPlugin/jquery.min');


  $('#btn').on('click',function(){
    console.log('start')
    $.ajax({
       type:'GET',
       url:'/home/inforData',
       }).done(function(data){
         console.log(data)
         var name = data.name,
             job = data.job,
             age = data.age,
             sex = data.sex;
         $('#text_box').append('我是' + name + '我的职业是' + job + '我今年' + age + '岁')
      })
    })

})
