
define(function(require,exports,module){
  //引入模块
  var $ = require('../../outerPlugin/jquery.min'),
      util = require('../../util'),
      reqAjax = util.reqAjax;

      var nodes  = document.querySelectorAll('li'),
          _nodes = [].slice.call(nodes, 0);

      var getDirection = function (ev, obj) {
          var w = obj.offsetWidth,
              h = obj.offsetHeight,
              x = (ev.pageX - obj.offsetLeft - (w / 2) * (w > h ? (h / w) : 1)),
              y = (ev.pageY - obj.offsetTop - (h / 2) * (h > w ? (w / h) : 1)),
              d = Math.round( Math.atan2(y, x) / 1.57079633 + 5 ) % 4;

          return d;
      };

      var addClass = function ( ev, obj, state ) {
          var direction = getDirection( ev, obj ),
              class_suffix = "";

          obj.className = "";

          switch ( direction ) {
              case 0 : class_suffix = '-top';    break;
              case 1 : class_suffix = '-right';  break;
              case 2 : class_suffix = '-bottom'; break;
              case 3 : class_suffix = '-left';   break;
          }

          obj.classList.add( state + class_suffix );
      };

      // bind events
      _nodes.forEach(function (el) {
          el.addEventListener('mouseover', function (ev) {
              addClass( ev, this, 'in' );
          }, false);

          el.addEventListener('mouseout', function (ev) {
              addClass( ev, this, 'out' );
          }, false);
      });

      //打字机
      var typewriterArr = [],//打字的数据库队列
				typewritering = false,//打字机的线程是否开启
				typewriterID = -1,//打字机的线程ID
				typewriterTime = 200,//定时调用的时间

				typewriterEffect = function(e,str,color){//增加显示的元素
					typewriterArr.push({
						"context":e,//目标元素上下文
						"str":str,//显示的元素
						"lening":0,//截取的进度
						"maxLength":str.length//最大进度
					});
					e.style.color = color||"#000000";//设置元素颜色
				},
				closeTypewriter = function(){//关闭定时调用
					clearTimeout(typewriterID);//清除线程
					typewritering = false;//改变状态
				},
				typewriterUi = function(){//定时调用显示UI
					var i = 0,
						l = typewriterArr.length,
						eing = null;
					for(;i<1;i++){
						eing = typewriterArr[i];
						/*判断中英文进行+2或+1操作
						递增，获取最新截取的长度*/
						eing.lening++;
						//如果截取的长度超过最大长度，泽截取的长度设置为1
						if(eing.lening>eing.maxLength)eing.lening = 0;
						//显示截取的字符
						eing.context.innerHTML = eing.str.substring(0,eing.lening)+"_";
					}
					typewriterID = setTimeout(typewriterUi,typewriterTime);
				};
				//隔时间调用一次定时器，生成一个随机颜色
    			function time(){
    				setInterval(ran,1000);
    				function ran() {
      					var x = Math.floor(Math.random() * (255 - 0 + 1) + 0);
      					var y = Math.floor(Math.random() * (255 - 0 + 1) + 0);
      					var z = Math.floor(Math.random() * (255 - 0 + 1) + 0);
      					var color = "rgb(" + x + "," + y + "," + z + ")";
      					typewriterEffect2.style.color=color;
    				}
    			};
				//开启定时调用，参数为设置定时器调用的时间
				startTypewriter = function(){
					if (!typewritering) {//如果没有开启，则开启
						typewriterTime = typewriterTime||typewriterTime;
						typewriterUi();//开始定时调用
					}
				};
				typewriterEffect(
					document.getElementById("typewriterEffect2"),"nvm ls列出所有安装的版本nvm ls-remote列出所以远程服务器的版本（官方node version list）nvm current显示当前的版本nvm alias <name> <version> ",time()
				);
				startTypewriter(100);

        //计数1
        $.fn.extend({
         wordCount: function (maxLength, wordWrapper) {
           var self = this;
           $(self).attr("maxlength", maxLength);
           showWordCount();
           $(this).on("input propertychange", showWordCount);
           function showWordCount() {
             curLength = $(self).val().length;
             var leaveCount = maxLength - curLength;
             wordWrapper.text(leaveCount + "/" + maxLength);
           }
         }
       })
       $(function () {
         $("#abc").wordCount(10, $("#wordCountShow"));
       })


}) //define闭合标记
