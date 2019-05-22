const express=require("express");
const app=express();
var s=[],pt="",message="",apt="";
var login,admin_login;
var pg=require('pg');
//var conString = "postgres://YourUserName:YourPassword@localhost:5432/YourDatabase";
var constring="postgres://postgres:123456@localhost:5432/postgres";

var client=new pg.Client(constring);

async function start(){
    await client.connect();
}

async function read(){
login=await client.query("SELECT * FROM students_details");
login.rows.forEach(row=>{console.log(row.name);});

admin_login=await client.query("SELECT * FROM ADMIN_DETAILS");
login.rows.forEach(row=>{console.log(row.name);});
}

async function check(name,password){
 s=[];
 log.rows.forEach(row=>{
    if(row.name==name &&row.password==password){
        s.push(row);
        pt=row.id;
    }
});   
if(pt==" ") console.log("invalid");
}

async function admin_check(name,password){
    sa=[];
    admin_login.rows.forEach(row=>{
        if(row.name==name && row.password==password){
            sa.push(row);
            pt=row.id;
        }
    });
    if(apt=="") console.log("invalid admin username/password");

}

app.use(express.static(__dirname + '/public'));
app.get("/",function (req,res) {
    start();
    read();
    res.render('home.ejs'); 
});

app.get('/student',function(req,res){
res.render('student.ejs',{details:res});
});

app.get('/admin',function(req,res){
    console.log(message);
    res.render('admin.ejs',{message:message});
});

app.get('/login/:name/:pass',function(req,res){

    var qn=req.params.name;
    var qp=req.params.pass;

    console.log(qn+" "+qp);

    check(qn,qp);

    console.log(pt);
    if(pt){
        pt="";
        res.render("studentHome.ejs",{full:s});
    }
    else{res.redirect('/register');}

});


app.get('register/:id/:name/:pass/:email/:phone',function(req,res){
    var i=req.params.id;
    var n=req.params.name;
    var p=req.params.pass;
    var email=req.params.email;
    var phone=req.params.phone;

    reg(i,n,p,e,ph);
    console.log(i+"\n"+n+"\n"+p+"\n"+e+"\n"+ph);
    res.redirect('/');
});

async function reg(i,n,p,e,ph){
    var oi=await client.query("INSERT INTO STUDENT_DETAILS values('"+i+"','"+n+"','"+p+"','"+e+"','"+ph+"');");
}

app.listen(3010,function(){
    console.log("server started successfully");
});