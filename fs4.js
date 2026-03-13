var fs = require("fs");
var crickets = [
    {"Name":"Arya","No":8},
    {"Name":"Dhoni","No":7},
    {"Name":"Kohli","No":18}
]

cricketers = JSON.stringify(crickets);

fs.writeFileSync("cr.txt",cricketers);
readData = fs.readFileSync("cr.txt","utf-8");
console.log(readData);