
// 👍 Synchoronus system file read and write start


const fs =require('fs');



// 👍 reading file text 

  const readText = fs.readFileSync('./texts/read.txt','utf-8');
  console.log(readText)


  /// 👍 writting file text

  const writeText =fs.writeFileSync('./texts/write.txt',' 👍 This is my content  /n'+readText );

  console.log(writeText);


  // 👍 Synchoronus system file read and write end

