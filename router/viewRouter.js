/**
 * Created by Administrator on 2020/8/31 0031.
 */
const router=require("express").Router();
const db=require('./sqlHelp');
router.use("/index.html",(req,res)=>{
    let sql="select * from banner where keyname='lun'";
    db.query(sql,[], function (err,data) {
        console.log(data[0].url);
        let sql1="select * from product";
        db.query(sql1,[], function (err1,data1) {
            if(req.session.user){
                res.render("index.ejs",{user:req.session.user,headImage:req.session.info.HeadImage,lunbo:data,newList:data1 })
            }else{
                res.render("index.ejs",{user:req.session.user,lunbo:data,newList:data1})
            }
        })

    })
})
module.exports=router;