var express = require("express")
var app = express()
employee = {name:"Arya",age:20,designation:"Developer"}
app.get("/home",function(req,res){
    res.type("text/plain")
    res.json(employee)
})

app.get("/about",function(req,res){
    res.type("text/plain")
    res.write(employee.designation+" "+employee.name+" is "+employee.age+" years old")
    res.send()
})

app.get("/contact",function(req,res){
    res.type("text/plain")
    res.send(employee.name)
})

app.listen(8080)