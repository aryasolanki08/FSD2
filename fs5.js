var fs = require("fs");

shape = [
    {"name":"square","side":8},
    {"name":"circle","diamter":10},
]

obj = JSON.stringify(shape);
fs.writeFileSync("Shape.txt",obj)
data = fs.readFileSync("Shape.txt","utf-8")
data = JSON.parse(data);

pSq = 4*(data[0].side);
pCi = 2*(3.14)*(data[1].diamter/2)

fs.appendFileSync("Shape.txt","\nPerimeter of Square "+pSq+"\nPerimeter of Circle "+pCi)

