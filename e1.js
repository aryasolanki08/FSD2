var express = require("express");
var app = express();
app.get("/",function(req,res){
    res.set("content-type","text/plain"); /*or res.type("text/plain") or res.setHeader("content-type","text/plain")*/
    res.send("Hello everyone");
})

app.listen(8008);

// app.listen(prompt,[Host],backlog,callback)