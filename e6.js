var express = require("express")
var app = express()
singer = [{name:"LJU",age:2},{name:"LJU2",age:3},{name:"LJU3",age:4}]

app.get("/home",function(req,res){
    res.json(singer)
})

app.get("/sorted",function(req,res){
    res.json(singer.sort((a,b)=>b.age-a.age))
    res.send()
})

app.listen(8080)