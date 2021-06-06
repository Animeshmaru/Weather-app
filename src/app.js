const express = require('express');
const app=express();
const port=1337;
const path = require('path');
const hbs = require('hbs');
const pubPath=path.join(__dirname,"../views");
// const tempPath=path.join(__dirname,"../templates/views");
const partialPath=path.join(__dirname,"../views/partials");
// console.log(path.join(__dirname,'../public/css/style.css'));
// console.log(tempPath);
// console.log(partialPath);


app.set('view engine','hbs');
// app.set('views',tempPath);
// app.set('views',__dirname+'/views')
hbs.registerPartials(partialPath);
app.use(express.static(pubPath));

app.get("",(req,res)=>{
    res.render("index",{
        name:"Animesh"
    }

    );
})
app.get("/update",(req,res)=>{
    res.render("update");
})
app.get("/about",(req,res)=>{
    res.render("about");
})
app.get("*",(req,res)=>{
    res.render("404_error");
})

app.listen(port,()=>{
    console.log(`${port} listening`);
})