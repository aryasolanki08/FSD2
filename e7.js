var express = require("express")
var app = express()

app.get("/calendar/:day/event/:ename",function(req,res){
    res.send(req.params);
})

app.listen(8080)