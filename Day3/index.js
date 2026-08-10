const express = require('express');
const app=express();
const port=8080;

app.listen(port,()=>{
    console.log(`Server is running at port ${port}`);
})

const path=require("path");

app.set("view engine","ejs");
app.set("views",path.join(__dirname+"/views"));

app.get("/",(req,res)=>{
    res.render("home.ejs");
})

app.get("/rolldice",(req,res)=>{
    let diceValue=Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs",{diceValue});
})