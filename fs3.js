var fs = require("fs");

fs.writeFile("ex.txt","50 -1 99 100 20 0 56 78 59",function(err){
    if(err){
        console.log("Error "+err)
    }
    else{
        fs.appendFile("ex.txt","Sorted Nathi bhai",function(err){
            if(err){
             console.log("Error "+err)
            }
            else{
                data = fs.readFile("ex.txt","utf-8",function(err,data){
                    if(err){
                        console.log("Error "+err)
                    }
                    else{
                        console.log(data)
                    }
                })
            }
        })
    }
});
