const EventEmiter=require('events');

const myEmiter = new EventEmiter();


// listener

myEmiter.on('birthday',()=>{

     console.log('Happy Birthday to you')
})

myEmiter.on('birthday',(gift)=>{
    console.log(`I will send a ${gift}`)
})

myEmiter.on('birthday',()=>{
    console.log(`YOu and me go to sajak`)
})




myEmiter.emit('birthday','i-phone');