// const express = require('express')

import express, { NextFunction, Request, Response } from 'express'
const app = express()

// parser 
app.use(express.json())


// middleware

 const logger = (req:Request,res:Response,next:NextFunction)=>{

       console.log(req.url,req.method,req.hostname);

       next();
 }


 // express  router use for get other method

 const userRouter = express.Router();
 const courseRouter =express.Router();

 app.use('/api/v1/users/',userRouter);
 app.use('/api/v1/courses/',courseRouter)

 userRouter.post('/createUser',(req:Request , res:Response)=>{
      
      const user =req.body;

      console.log(user);

      res.json({

         success : true,
         message : 'User create successfully',
         data : user
          
      })
 })

 courseRouter.post('/createCourse',(req:Request,res:Response)=>{

     const course = req.body;
     console.log(course);


     res.json({

         success: true,
         message : 'Course create success',
         data : course

     })


 })

// for params 
app.get('/:id/:subid', (req : Request , res : Response) => {

    console.log(req.params)

  res.send('Hello Developers! Do not worried more explore ? Job ki paisoy')
})

// for query  
// for error handling
app.get('/',logger, async(req : Request , res : Response,next:NextFunction) => {

    // console.log(req.query);

    try{

        res.send(something)

    }

    catch(error){
        //  console.log(error);

        next(error)
        
         
    }


    
})



app.post('/',logger,(req:Request,res:Response)=>{

    console.log(req.body);
    res.send('got data')

})

//  all route error handling 

app.all('*',(req,res)=>{

     res.status(404).json({

         success : false ,
         message: 'route not found'
          
     })
})


//  global error handling 

app.use((error:any , req:Request , res:Response , next:NextFunction)=>{

       if(error){

        console.log(error)
        
        res.status(404).json({
            success: false ,
            message: 'fail to get data'

         })
            
       }
})

export default app;