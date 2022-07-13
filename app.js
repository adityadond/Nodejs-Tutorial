const express=require("express")
const fs=require("fs")

const server=express()
server.get("/",(req,res)=>{
    fs.writeFile("hello.txt","I am Aditya",()=>{})
res.send("Hello World")
})

server.post("/",(req,res)=>{

    fs.writeFile("letsupgrade.json",JSON.stringify(req.query),(err)=>{
        console.log("file created")
    })
  res.send(req.query)
})

server.listen(3000,()=>{
    console.log("Server running on 3000")
})