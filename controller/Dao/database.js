'use strict'

var mysql = require("mysql");

//连接本地数据库
function getConn(){
    return mysql.createConnection({
        host:"localhost",
        port:"3306",
        user:"root",
        password:"111111",  //你的mysql root密码
        database:"yohobuy"   //你的额数据库名称
    });
}

//查询mysql数据库的方法
exports.query = function (sql,params,callback) {
    var conn = getConn();
    conn.query(sql,params, function (err,data) {
        if(err){
            console.log(err);
        }else{
            callback(data);
        }
    });
    conn.end();
};
