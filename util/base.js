define(function(require,exports,module){
  'use strict';
   var $ = require('../../outerPlugin/jquery.min'),
       boots = require('../../outerPlugin/bootatrap.min'),
       sweet = require('../../outerPlugin/sweetalert.min');

	var Base = {};

	/**
	 * 通用方法
	 * @constructor
	 */
	Base = function (data) {
		this.$body = $('body');
		this.moduleName = data.moduleName; //当前页面
		this.events = {};
		this.requestNum = 0;
	};
	Base.prototype = {
		debugger: function (msg) {
			console && console.log('%c%s', 'color:red', msg);
		},
		on: function (name, callback) {
			if (!this.events[name]) this.events[name] = [];
			this.events[name].push(callback);
		},
		emit: function (name, arg) {
			var list = this.events[name], counter = 0;
			if (list) {
				for (; counter < list.length; counter++) {
					list[counter].apply(this, arg);
				}
			}
		},
		// 错误处理
		ajaxError: function (error) {

		},
		// 异常处理
		ajaxException: function (res) {

		},
		//
		ajaxStart: function () {

		},
		ajaxStop: function () {

		},
		/**
		 * 二次封装的ajax请求
		 * @param {string} url 接口地址，一个用来包含发送请求的URL字符串
		 * @param {object} data 请求发送的数据
		 * @param {callback} callback 成功响应后的回调处理函数
		 * @param {callback} error 响应错误后的回调处理函数
		 * @returns {deferred} 返回一个延迟对象
		 */
		fetch: function (url, data, callback, errorCallback, config,no_check_login) {
			no_check_login = no_check_login || false;
			var def = $.Deferred(), ctx = this;
			if (ctx.requestNum === 0) ctx.ajaxStart();
			ctx.requestNum++;

			var _data = {
				"identication": {
					session_id: this.cookie().get('session_id'),
					info: {
						"systemModel": "PC"
					}
				},
				"data": data
			}

			config = config || {
					url: url,
					data: JSON.stringify(_data),
					contentType: 'application/json',
					dataType: 'json',
					type: 'POST',
					processData: false,
					timeout: 1000 * 120
				}
			config.success = function (request, textStatus) {
				ctx.requestNum--;
				if (ctx.requestNum === 0) ctx.ajaxStop();
				try {
					var redirect = encodeURIComponent(location.href);  //获取当前请求的页面 url 地址
					/*
					如果过期就将当前的url拼接成参数跳转到登录页面，
					并在登录页面解析出来，这样就能实现登陆后回到原来登录过期的页面
					no_check_login  fetch_login 方法的身份证
					*/
					if(request.login_exipired === null && !no_check_login){
						// layer.msg("会话过期请重新登录")
            swal({
                title:'',
                text:"会话过期请重新登录!",
                type:"warning",
                confirmButtonText:'确认',
                confirmButtonColor:'#fc5144'})
						Base.prototype.cookie().del('logined');
						Base.prototype.cookie().del('session_id');
						Base.prototype.cookie().del('select_1');
						Base.prototype.cookie().del('select_2');
						setTimeout(function(){
							location.href='/pages/login.html?redirect=' + redirect;
						},2000)
					} else {
						callback && callback.call(this, request, textStatus);
						def.resolve(request, textStatus);
					}
				} catch (error) {
					ctx.debugger(error);
				}
			};
			config.error = function (XMLHttpRequest, textStatus, errorThrown) {
				ctx.requestNum--;
				if (ctx.requestNum === 0) ctx.ajaxStop();
				try {
					errorCallback && errorCallback.call(this, XMLHttpRequest, textStatus, errorThrown);
					def.reject(XMLHttpRequest, textStatus, errorThrown);
				} catch (error) {
					ctx.debugger(error);
				}
			};
			$.ajax(config);
			return def.promise();
		},
		fetchGet: function (url, data, callback, errorCallback) {
			var session_id = sessionStorage.getItem('session_id');
			if (!!session_id) {
				var item = {
					identication: {session_id: session_id},
					data: data
				};
				this.fetch(null, null, callback, errorCallback, {
					url: url,
					data: JSON.stringify(item),
					dataType: 'json',
					type: 'GET',
					processData: false,
					timeout: 1000 * 120
				})
			} else {
				window.location.href = 'login.html'
			}
		},
		fetch_login: function (url, data, callback, errorCallback) {
			var data = {
				"identication": {
					// version: '2.0.0',
					info: {
						"systemModel": "PC"
					}
				},
				"data": data
			}
			this.fetch(null, null, callback, errorCallback, {
				url: url,
				data: JSON.stringify(data),
				dataType: 'json',
				type: 'POST',
				processData: false,
				timeout: 1000 * 120
			}, true);  //fetch_login 在调用 fetch方法时多传入一个参数，作为loging请求的唯一标识
		},
		// loading
		loading: function (show) {

		},
		loadingShow: function () {
			this.loading(true);
		},
		loadingHide: function () {
			this.loading(false);
		},
		// 登录
		login: function () {

		},
		// 退出
		exit: function () {

		},
		cookie: function () {
			/**
			 * 根据cookie名获取对应的数据
			 * @param {string} name cookie名
			 * @returns 返回对应的数据
			 */
			this.get = function (name) {
				var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
				if (arr = document.cookie.match(reg)) return decodeURI(arr[2]);
			};
			/**
			 * 根据cookie名设置保存数据
			 * @param {string} name cookie名
			 * @param {string} value 要设置保存的数据
			 * @param {string} [second=1800] cookie的过期时间，秒为单位
			 */
			this.set = function (name, value, second, domain) {
				var exp = new Date();
				second = second || 1800;
				exp.setTime(exp.getTime() + second * 1000);
				domain = domain || document.location.host;
				document.cookie = name + "=" + decodeURI(value) + ";path=/;domain=" + domain + ";expires=" + exp.toGMTString();
			};
			/**
			 * 根据cookie名设置保存数据，没有过期时间，即浏览器关闭时数据清除
			 * @param {string} name cookie名
			 * @param {string} value 要设置保存的数据
			 */
			this.setNoExp = function (name, value) {
				document.cookie = name + "=" + decodeURI(value) + ";path=/";
			};
			/**
			 * 根据cookie名删除对应的数据
			 * @param {string} name cookie名
			 */
			this.del = function (name) {
				var exp = new Date();
				exp.setTime(exp.getTime() - 1);
				var cval = this.get(name);
				if (cval != null) document.cookie = name + "=" + cval + ";path=/;expires=" + exp.toGMTString();
			}

			return this;
		},
		getQueryString: function (name, url) {
			url = url || location.href;
			var reg = new RegExp("(^|&|\\?)" + name + "=([^&]*)(&|$)", "i");
			var r = url.substr(1).match(reg);
			if (r != null) return unescape(r[2]);
			return null;
		}
	};

	return Base;
});
