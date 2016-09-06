'use strict'
const jiami = require('./jiami');
//服务器 - cookie操作

class nodeCookie {
//添加cookie
	addCookie(res,name,data){
		let baseStr = jiami.encryptAes(data,'jiafan') //nodejs加密cookie
		res.cookie(name,baseStr,{maxAge:7*24*60*60*1000, path:'/'});
	}
//添加cookie(未加密)
	addCookieUnencrypted(res,name,data){
		let type = typeof(data),baseStr;
		type == 'object' ? baseStr = JSON.stringify(data) : baseStr = data.toString();
		res.cookie(name,baseStr,{maxAge:7*24*60*60*1000, path:'/'});
	}
//获取cookie(未加密)
	getCookieUnencrypted(req,name){
	let data = req.cookies[name];
	if(data==undefined){
		return data
	} else {
    	return data = JSON.parse(unescape(data))
	}
}
//获取cookie(加了密的)
	getCookie(req,name){
		let data = req.cookies[name];
		if(data == undefined){
			return data
		} else {
		    data = JSON.parse(jiami.decryptAes(data,'jiafan')) //nodejs解密cookie
		    return data
		}
	}
//修改cookie
	updateCookie(req,res,name,obj){ //obj代表要修改的内容
		let data = this.getCookie(req,name);
			for(let key in obj) {
				data[key] = obj[key]
			}
			data = JSON.stringify(data) //字符串化
			this.addCookie(res,name,data)
	}
//删除单个cookie
	delCookie(res,name){
		res.clearCookie(name,{path: '/'});
	}
//删除多个cookie
	delAllCookie(res,obj){
		for(let key in obj){
			this.delCookie(res,obj[key])
		}
	}
}

module.exports = nodeCookie;
