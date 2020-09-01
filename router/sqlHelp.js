/**
 * Created by Administrator on 2020/8/29 0029.
 */
const mysql=require("mysql");
function DbHelp(sql,param,callback){
  const conn=  mysql.createConnection({
        host:'localhost',
        user:"root",
        password:"root",
        port:3306,
        database:"kfq"
    });
    conn.connect()
    conn.query(sql,param,callback);
    conn.end
}
module.exports={
    query:DbHelp
}