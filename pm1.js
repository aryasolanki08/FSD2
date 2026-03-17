var pm = require("path");
Path = pm.basename("C:/LJ/abc.html")
console.log(Path)

Path1 = pm.dirname("C:/abc/h1.html")
console.log(Path1)

ext = pm.extname("D:/LJ/task.txt");
console.log(ext);

path2 = pm.parse("D:/LJ/ZPB.html")
console.log(path2.name)