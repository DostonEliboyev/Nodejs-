const fs= require("fs");
const path= require("path");

// fs.mkdir(path.join(__dirname,"templates"),err =>{
//     if(err) throw new Error();
//     console.log("Folder created successfully");
// })

// fs.mkdir(path.join(__dirname,"Notes","users"),err=>{
//     if(err) throw new Error();
//     console.log("Folder created successfully");
// })

fs.writeFile(path.join(__dirname,"Notes","users","user1.txt"),"User 1",(err)=>{
    if(err) throw new Error();
    console.log("File created successfully");
    fs.appendFile(path.join(__dirname,"Notes","users","user1.txt"),"User 2",(err)=>{
        if(err) throw new Error();
        console.log("File appended successfully");
        fs.readFile(path.join(__dirname,"Notes","users","user1.txt"),"utf-8",(err,data)=>{
            if(err) throw new Error();
            console.log(data);
        })
    })
})









