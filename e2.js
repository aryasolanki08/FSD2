var express = require("express")
var app = express()
app.get("/",function(req,res){
    res.type("text/plain")
    res.send("<h1>Hey you!</h1>")
})
app.get("/about",function(req,res){
    res.type("text/html")
    res.send("<h1>Yes You!</h1>")
    res.send("<h1>Be happy</h1>")
})
app.listen(8008,()=>{
    console.log("Running")
})