const express=require('express');
const bodyParser=require('body-parser');

//create a express app
const app=express();

app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json());

//configuring the database
const dbConfig=require('./config/database.config.js');
const mongoose=require('mongoose');

mongoose.Promise=global.Promise;
//connecting to the database
mongoose.connect(dbConfig.url,{useNewUrlParser:true})
.then(()=>{
    console.log("Successfully connected to the database");
})
.catch(()=>{
    console.log("Couldnot connect to the database,exiting now..",err);
    process.exit;
});

app.get('/',(req,res)=>{
    res.json({'message':'Welcome to Notes application'});
});

require('./app/routes/note.routes.js')(app);

app.listen(3000,()=>{
    console.log("server listening on port 3000");
});