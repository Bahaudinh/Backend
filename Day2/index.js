const express=require("express")
const app=express()

let port=8080

app.listen(port,()=>{
    console.log(`Server is listening at port ${port}`);
})

app.use((req,res)=>{
    console.log("Request Recieved");
    code="<h1>Hello World</h1><ul><li>Nodejs</li><li>Express</li><li>MongoDB</li></ul>"
    res.send(code);
})