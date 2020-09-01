/**
 * Created by Administrator on 2020/8/29 0029.
 */
const myexpress=require('express');
const app=myexpress(); //
const userRouter=require('./router/user1')
const userRouter2=require('./router/viewRouter')
const bodyParser=require('body-parser')
const cookieParser=require("cookie-parser")
const session=require("express-session")
var ejs=require("ejs")

app.set('views',__dirname+ '/view')
app.set('view engine','ejs')

app.use(cookieParser())
app.use(session({
    secret:'123',
    name:'demo',
    cookie:{maxAge:8000},
    rolling:true,
    resave:true
}))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(userRouter);
app.use(userRouter2);



app.use(myexpress.static(__dirname+'/public'));


app.listen(8888)