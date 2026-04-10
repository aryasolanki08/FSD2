var express = require("express")
var app = express()
student = {name:"Arya",age:19}
app.get("/student",function(req,res){
    res.type("text/plain")
    res.send(student)
})

app.listen(8008)