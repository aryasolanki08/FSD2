var fs = require("fs");

// fs.writeFileSync("ex.txt","50 -1 99 100 20 0 56 78 59");

data = fs.readFileSync("ex.txt","utf-8");
console.log(data)

data = data.split(" ");
console.log(data)

j=1
for(i in data){
    if(data[j]>data[i]){
        var temp = data[i];
        data[i]=data[j];
        data[j]=temp;
        j++;
    }
}
console.log(data)
