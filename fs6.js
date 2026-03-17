var x = {d:{a:10,b:20,c:[30,10]}}

data = JSON.stringify(x);
var fs = require("fs");
fs.writeFileSync("f2.txt",data)
data = JSON.parse(fs.readFileSync("f2.txt","utf-8"))

add = data.d.a + data.d.b;
sub = data.d.c[1] - data.d.b;
mul = data.d.c[0]*data.d.c[1];

fs.appendFileSync("f2.txt","\nAddition "+add+"\nSubtraction "+Math.abs(sub)+"\nMultiplication "+mul)