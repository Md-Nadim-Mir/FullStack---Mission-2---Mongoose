

//  asynchoronous file  read and write system start


const { error } = require('console');
const fs= require('fs');


// reading text asynchoronously 

fs.readFile('./texts/read.txt','utf-8',(err,data)=>{

      if(err){
        throw  error('read error')
      }

      console.log(data)

      
      // 👍 writting text asynchoronously


      fs.writeFile('./texts/write2.txt',' 👍 Hello developer , i am comming 👍 ', 'utf-8',(err,data)=>{

          if(err){
             
              throw error('asyncronous data write problem')
          }
      })
 
})






//  asynchoronous file  read and write system end