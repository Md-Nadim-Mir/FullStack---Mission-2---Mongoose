
const http = require('http');
const fs =require('fs');
const { buffer } = require('stream/consumers');

// creating server usning raw node.js

const server = http.createServer();

// listener 

server.on('request',(req,res)=>{

      if(req.url==='/read-file' && req.method ==='GET');

        // stream file reading

        const readableStream=fs.createReadStream(process.cwd() + './texts/data.txt')

        readableStream.on('data',(buffer)=>{
              
            res.write(buffer);

        })

        readableStream.on('end',()=>{

            res.end('Hello developer')

        })



      }
      
)


server.listen(5000,()=>{

     console.log(`server is listening on port 5000`)
})