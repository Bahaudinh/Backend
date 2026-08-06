const express = require("express")
const app = express()

let port = 8080

app.listen(port, () => {
    console.log(`Server is listening at port ${port}`);
})

app.get("/", (req, res) => {
    console.log("Root Path");
    res.send("Welcome to the root path!");
})

app.post("/", (req, res) => {
    res.send("Welcome to the root path by post request");
})

app.get("/apple", (req, res) => {
    console.log("Apple Path");
    res.send("Welcome to the apple path!");
})

app.get("/orange", (req, res) => {
    console.log("Orange Path");
    res.send("Welcome to the orange path!");
})


app.get("/search", (req, res) => {
    let { q } = req.query;
    res.send(`Search Results for query : ${q}`);
})

app.get("/:username", (req, res) => {
    const { username } = req.params;
    res.send(`Welcome ${username}`);
})

app.use((req, res) => {
    res.status(404).send("Page not found");
});









// app.use((req,res)=>{
//     console.log("Request Recieved");
//     code="<h1>Hello World</h1><ul><li>Nodejs</li><li>Express</li><li>MongoDB</li></ul>"
//     res.send(code);
// })