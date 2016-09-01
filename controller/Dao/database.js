'use strict'

var mysql = require("mysql");

function getConn(){
    return mysql.createConnection({
        host:"localhost",
        port:"3306",
        user:"root",
        password:"111111",
        database:"yohobuy"
    });
}

var query = function (sql,params,callback) {
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



exports.query = query;
