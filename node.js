const http=require("http")

const server=http.createServer((req,res)=>{
    res.writeHead(200,{"Content-type":"text/html"})
res.end(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>HTML 5 Boilerplate</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
	Hi
  </body>
</html>`)
})
server.listen(3000,()=>{
    console.log("server is running on local host 3000")
})

