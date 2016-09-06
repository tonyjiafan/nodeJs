'use strict';
// 加密模块
const crypto = require('crypto');

exports.md5 = (str) => {
	let  md5sum = crypto.createHash('md5');
		md5sum.update(str);
		str = md5sum.digest('hex');
	return str;
}

//数据加密
exports.encryptAes = (str,secret) => {
   let  cipher = crypto.createCipher('rc4', secret);
   let  enc = cipher.update(str,'utf8','hex');
   enc += cipher.final('hex');
   return enc;
}

//数据解密
exports.decryptAes = (str,secret) => {
   let  decipher = crypto.createDecipher('rc4', secret);
   let  dec = decipher.update(str,'hex','utf8');
   dec += decipher.final('utf8');
   return dec;
}



//=>base64加密开始
let  keyStr = "ABCDEFGHIJKLMNOP" + "QRSTUVWXYZabcdef" + "ghijklmnopqrstuv" + "wxyz0123456789+/" + "=";
exports.encode64 = (input) => {
   input = "" + input;
   let  output = "";
   let  chr1, chr2, chr3 = "";
   let  enc1, enc2, enc3, enc4 = "";
   let  i = 0;
   do
   {
      chr1 = input.charCodeAt(i++);
      chr2 = input.charCodeAt(i++);
      chr3 = input.charCodeAt(i++);
      enc1 = chr1 >> 2;
      enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
      enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
      enc4 = chr3 & 63;
      if (isNaN(chr2)) {
         enc3 = enc4 = 64;
      } else if (isNaN(chr3)) {
         enc4 = 64;
      }
      output = output +
         keyStr.charAt(enc1) +
         keyStr.charAt(enc2) +
         keyStr.charAt(enc3) +
         keyStr.charAt(enc4);
      chr1 = chr2 = chr3 = "";
      enc1 = enc2 = enc3 = enc4 = "";
   } while (i < input.length);
   return output;
}


//将参数先排序然后进行拼接字符串
exports.sortPrams = (paramObj) => {
   let  paramArr = [];
   let  paramStr = '';
   let  appSignature = '^_~'; //参数分隔符
   for(let  objName in paramObj){
    paramArr.push(objName);
   }
   paramArr.sort();
   for(let  i=0; i<paramArr.length; i++){
      let  paramVal = paramObj[paramArr[i]];
      if(typeof paramVal == 'boolean'){
         if(paramVal == true){
            paramStr += paramArr[i]+'='+1;
         }else{
            paramStr += paramArr[i]+'='+0;
         }

      }else if(typeof paramVal=='number'){
				var tempNumber = Number(cutZero(''+paramVal));
				if (tempNumber == 0) {
					paramStr += paramArr[i]+'=0.0'
				} else {
					paramStr += paramArr[i]+'='+ tempNumber;
				}
      }else{
         paramStr += paramArr[i]+'='+paramVal;
      }

      if(i != paramArr.length-1) {
         paramStr += appSignature;
      }
   }
   return paramStr;
}

let cutZero = (old) => {
  //console.log('old=='+old);
    //拷贝一份 返回去掉零的新串
    let newstr=old;
    //循环变量 小数部分长度
    let leng = old.length-old.indexOf(".")-1
    //判断是否有效数
    if(old.indexOf(".")>-1){
        //循环小数部分
        for(var i=leng;i>0;i--){
                //如果newstr末尾有0
                if(newstr.lastIndexOf("0")>-1 && newstr.substr(newstr.length-1,1)==0){
                    let k = newstr.lastIndexOf("0");
                    //如果小数点后只有一个0 去掉小数点
                    if(newstr.charAt(k-1)=="."){
                        return  newstr.substring(0,k-1);
                    }else{
                    //否则 去掉一个0
                        newstr=newstr.substring(0,k);
                    }
                }else{
                //如果末尾没有0
                    return newstr;
                }
            }
        }
        return old;
  }
