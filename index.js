const http= require("http");
const server= http.createServer((req,res)=>{
    res.writeHead(200,{
        "Content-Type":"text/html"
    })
    res.write("<h1>Men birinchi serverim yasadim va ishlaydi nima gap</h1>")
    res.end()
})  

server.listen(3000,"localhost",()=>{
    console.log("Server is running on port 3000");
})


