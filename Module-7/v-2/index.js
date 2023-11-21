// 👍 Know about  Local module 

const myModule =require('./local-1')

console.log(myModule.add(2,3))
console.log(myModule.a * myModule.b);

// 👍 other system it can be used  that means destructurnig

const {add,a,b}=require('./local-1');

console.log(add(20,30));
console.log(a,b , a*b)


// 👍 when two export module exist same variable name when it 
// 👍 require to alising for error handling 

// const {add, a, b}=require('./local-2');  
// console.log(add(3,4));

// 👍 || error show beacuse add name previous define



//   👍 that can be solve use alising

 const {add: add2 , a:a2 , b:b2 }= require('./local-2');

 console.log(add2(5,6,7),a2,b2,(a2+b2));


//  👍 Know about Local Module end






// 👍 Know about built in module in node.js start

 // work in:  https://nodejs.org/docs/latest-v20.x/api/path.html#pathbasenamepath-suffix

 
 console.log('helllo')

 const path = require('path');

 console.log(path.basename('H:/Full Stack Web Development/Mission 2 - Mongoose/Module-7/index.js'));

 console.log(path.dirname('H:/Full Stack Web Development/Mission 2 - Mongoose/Module-7/index.js'))

 console.log(path.parse('H:/Full Stack Web Development/Mission 2 - Mongoose/Module-7/index.js'))


 console.log(path.join('H:/Full Stack Web Development/Mission 2 - Mongoose/Module-7/' , 'local-1.js'))

 


// 👍 Know about built in module in node.js start






