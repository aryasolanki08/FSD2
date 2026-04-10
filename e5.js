var express = require("express")
var app = express()
student = {u1:[{name:"LJU",id:2},{name:"LJU2",id:3},{name:"LJU3",id:4}]}
app.get("/student",function(req,res){
    res.type("text/html")
    res.write("<table border='2px'>")
    res.write("<tr>")
    res.write(`<th> Name </th>`)
    res.write(`<th> ID </th>`)
    res.write("</tr>")
    for(i of student.u1){
        res.write("<tr>")
        res.write(`<td> ${i.name} </td>`)
        res.write(`<td> ${i.id} </td>`)
        res.write("</tr>")
    }
    res.write("</table")
    res.send()
})

app.listen(8080)