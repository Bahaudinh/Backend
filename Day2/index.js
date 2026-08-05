const express=require("express")
const app=express()

let port=3000

app.listen(port,()=>{
    console.log(`Server is listening at port ${port}`);
})

app.use((req,res)=>{
    console.log("Request Recieved");
})