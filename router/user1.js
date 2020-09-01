/**
 * Created by Administrator on 2020/8/29 0029.
 */
const router=require("express").Router();
const db=require('./sqlHelp');
router.post("/reg",(req,res)=>{
    let email=req.body.Email;
    let user=req.body.user;
    let pwd=req.body.pwd;
    let respwd=req.body.respwd;
    let sql="insert into user(username,pwd,email,state,delState) values(?,?,?,1,1)"

    db.query(sql,[user,pwd,email],function(err,data){
        if(err){
            res.send("数据库出错")
        }else{
            if(data.affectedRows>0) {
                res.send("注册OK")
            }else{
                res.send("账户密码出错")
            }
        }
    })
});
router.post("/userLogin",(req,res)=>{
    let user=req.body.user;
    let pwd=req.body.pwd;
    console.log(user)
    console.log(pwd)
    let sql="select *from user where userName = ? and pwd =?"

    db.query(sql,[user,pwd],function(err,data){
        console.log(sql)
        console.log(err)
        if(err){
            res.send({code:500,message:"数据库出错"})
        }else{
            if(data.length>0) {
                req.session.user=user;
                req.session.info=data[0];
                res.send({code:200,message:"登录成功",data:data})
            }else{
                res.send({code:201,message:"账户或密码有误"})
            }
        }
    })
});
module.exports=router;