
# Part-1 (module-5)

# What is MongoDB ?

MongoDB is NoSQL database storing data in JSON like doucments . NoSQL database break from traditonal relational models , ideal for managing vast data . MongoDB stands out for its scalability , flexibility, and performance trusted by giants like google , Facebook  and eBay.


# Why MongoDB ?

👍 Scalable high performance & Open source. 
👍 Doucment-oriented Database.
👍 Cost-Effective Solutions.
👍 Rich ecosystem of Tolls , Doucmentation and Community.


# MongoDB vs Traditional  database ?

👍 MongoDB: 

1. Doucment-oriented 
2. Flexible 
3. HOrizontal & Vertical
4. Optimized for unstructured or semi-strucred data.


👍 Traditional Database 👍

1. relational
2. rigid
3. Vertical
4. Optimized for structured  data.


# MongoDB Features

 👍JSON like doucments (BSON)
 👍Indexing
 👍Aggregation Framework
 👍Security Features
 👍Free Atlas Database
 👍MongoDB Compass (GUI)

 # Where MongoDB is good Choice

 👍E-commerce application
 👍Social media application
 👍Gamming application
 👍Web application
 👍Mobile application
 👍Realtime application



# Atlas command

```
// command show all database
show dbs  

//  practice name database create
use practice  

// test name one collection create
db.createCollection('test')  

// one data insert database
db.getCollection('test').insertOne({name:'next level web development'})

 // command for data find  
db.getCollection('test').find()

```

// cmd commnad line give command and use environment path mongoose add

+ link : downlaod mongodb atlas 

[https://www.mongodb.com/try/download/community-kubernetes-operator]

+ link : download mongodb shell

[https://www.mongodb.com/try/download/shell]

+ edit environment variable : mongodb bin file path save 

cmd line : 

```
// connetion check
mongosh 
``` 

# some graphical user interface name
👍 studio 3t
👍 nosqlbooster  [https://nosqlbooster.com/downloads]



👍 More Important command 



# Portion-2

👍 Learn insert,insertOne, find, findOne, field filtering, project

```

// Data show and save always press
 
 ctrl + enter



// insert one document simple command

db.test.insertOne({name: 'Mohammad Abdullah'})

// insert many document command

db.test.insertMany([{name:'Complete web development'} , {name: 'Next Level web development'}])

// find one document

db.test.findOne({age:45})


// find many document one property basis

db.test.find({favoutiteColor:'Red'})
db.test.find({gender:'Male'})


// field filter basis filter. 2nd second bracket inside filter field

db.test.find({gender:'Male'} , {name:1,email:1,phone:1,company:1,skills:1})


// Another way field filltering

db.test.find({gender:'Male'}).project({name:1,email:1,company:1})

// project is not work findOne 

db.test.findOne({gender:'Male'},{name:1,email:1})


```

# Portion-3

👍 Learn $eq, $neq, $gt, $lt, $gte, $lte


```

// mongodb operator $eq = equal , $nq=not equal

db.test.find({age: {$eq : 18}})
db.test.find({gender: {$ne : 'Male'}})

// $gt = greater than selected value . use field filter
// $gte = greater than equal 

db.test.find({age: {$gt: 95}}  , {name:1,email:1})
db.test.find({age: {$gte: 95}}  , {name:1,email:1,age:1})

// $lt=less than , $lte=less than equal
db.test.find({age: {$lt : 10}}  , {name:1,email:1,age:1})
db.test.find({age: {$lte : 10}}  , {name:1,email:1,age:1})

// sort use for small to big sort
db.test.find({age: {$lte : 5}}  , {name:1,email:1,age:1}).sort({age:1})






```

# Portion-4

👍 Learn $in, $nin, implicit and condition

```
// $in =  mean [a,b,c] inside array any value match the document that can be given

db.test.find({age: {$in: [4 , 17 , 50]}},{age:1}).sort({age:1})

// $nin mean not match in array  [a,b,c]
db.test.find({age: {$nin: [1,3,6,7 ,17 , 50]}},{age:1}).sort({age:1})


// multiple query $lte and $gte . called implicit 

db.test.find({age: {$gte : 18 , $lte: 30}} , {age:1}).sort({age:1})

db.test.find({age: {$gte : 18 , $lte: 30} , gender : 'Male'} , {age:1,gender:1}).sort({age:1})


db.test.find(
    {
    age: { $gte: 18, $lte: 30 },
    gender: 'Male',
    interests : {$in : ["Gaming", "Writing"]}
    }, 
    { age: 1, gender: 1,interests:1 })
    .sort({ age: 1 })


```


# Portion-5

 👍 learn $and, $or, implicit vs explicit


```
// $and operator opearation

db.test.find({
    
    $and : [ 
    
    {gender:'Female'} , 
    { age: {$gte : 21}},
    {age: {$lte: 50}},
    {friends: 'Mizanur Rahman'}
    ]
    
     } 
    , {age:1,gender:1,friends:1})
    .sort({age:1})



    //$or opearator any one condition is true

    db.test.find({
    $or :
    
      [
        {salary : {$lt : 50}},
        {gender: 'Non-binary'},
        {age: {$lt: 5}}
        
      ]

    })
  .project({age:1,gender:1,salary:1})
  .sort({age:1})
 

// object of array access use or = 'skills.name'

db.test.find({
    $or:
    
    [
        {salary : {$lt : 2}},
        {gender: {$ne : 'Male'}},
        {gender: {$ne : 'Female'}},
        {age: {$lt: 5}},
        {'skills.name ': 'JAVA'}
        
    ]
})
.project({age:1,gender:1,salary:1,skills:1})
.sort({age:1})



//  $not loginal not opearator

  db.test.find({
        
    salary : {$not : {$gt : 110}}
    
     })
     .project({salary:1,gender:1,age:1})
    .sort({salary:1})


// $nor logical operator

   db.test.find({
    $nor : [
        
         {salary: {$gt : 110}}
        ]
    }).project({salary:1,gender:1,age:1}).sort({age:1})


```


# Portion-6


👍 Learn $exists, $type,$size


```
     // $exists 
 
      db.test.find(
       
      {gender : {$exists:true , $eq: 'Genderfluid'} }
      
      ).project({gender:1}).sort({age:1})



      // $type // note : 1= double , 2=string , 3= object , null=10

      db.test.find(
    {
        $and : [
            {address : {$type : 3}},
            {gender: {$eq:'Agender'}}
            ]
    }
    
    ).project({name:1,age:1,gender:1,address:1}).sort({age:1})



    // null find

    db.test.find(
    {company : {$type: 10}}
    
    ).project({company:1})


    // empty array find or array size according query find

    db.test.find(
    
    {friends : {$size : 0}}
    
    ).project({friends:1})
  


```

# Portion-7


👍 Learn $all , $elemMatch 


```

    // {'interests.1' : "Gaming"} = .1 means index 1 no = Gaming

    db.test.find(
    {'interests.1' : "Gaming"}
    ).project({interests:1})


    // $all operator

    db.test.find(
    { interests: {$all : ['Cooking','Gaming','Reading']}}
    ).project({interests:1})


    // $elemMatch
    
     db.test.find(
    {skills: {$elemMatch: { name:  'KOTLIN' , level: 'Expert',isLearning:true}}}
    ).project({skills:1})


```

# Portion-8


👍 Learn $set, $addToSet, $push,


```
// $set operator use updateOne operation

db.test.updateOne({_id : ObjectId("6406ad63fc13ae5a40000065")},{$set : {age : 35 , gender: 'Male'}})

// check update validity

db.test.find({_id : ObjectId("6406ad63fc13ae5a40000065")})

// drawback of $set replace all array value update value but int , 
// preemtive  data all is ok , single value update for single value

  db.test.updateOne(
    {_id : ObjectId("6406ad63fc13ae5a40000065")},
    {$set : {friends : 'Abdullah'}}
)

// check validity

db.test.find({_id : ObjectId("6406ad63fc13ae5a40000065")})



// $addToSet operator previous existing value + add something : use for array
// value add it is best . Extra $each operator for more value add array.

db.test.updateOne(
    {_id : ObjectId("6406ad63fc13ae5a40000067")},
    {$addToSet : { friends: { $each: [ "Mohammad Abdullah", "Adnan", "Habib" ] }}}
)


//// $addToSet & $set duplicate value can't be update . But push duplicate
// value added . Don't care previous value existing in array.

  db.test.updateOne(
    {_id : ObjectId("6406ad63fc13ae5a40000067")},
    { $push:  { friends: {$each : [ "Mohammad Abdullah", "Adnan", "Habib" ]} }}
   )

 



```


# Portion-9

👍 $unset, $pop, $pull, $pullAll


```

// $unset use for delete on 

  db.test.updateOne(
    {_id : ObjectId("6406ad63fc13ae5a40000067")},
    { $unset : {gender: 'Male'}},
    
  )


  // field value no need to write . age: '' or age : 1 is ok 
  // But 2 operation can be applied at a time updateOne

  db.test.updateOne(
    {_id : ObjectId("6406ad63fc13ae5a40000067")},
    { $unset : {age: ''}},
  )

  db.test.updateOne(
    {_id : ObjectId("6406ad63fc13ae5a40000067")},
     { $unset : {email: 1}},
  )


  // Deleter element from array . 1 for last , -1 for fast delete element


  // fast element delete
  
  db.test.updateOne(
    {_id : ObjectId("6406ad63fc13ae5a40000067")},
    { $pop : {friends : -1}}
    
  )

  // last element delete
  
  db.test.updateOne(
    {_id : ObjectId("6406ad63fc13ae5a40000067")},
    { $pop : {friends : 1}}
    
  )


  // delete value from array use $pull operator

  db.test.updateOne(
    {_id : ObjectId("6406ad63fc13ae5a40000066")},
    { $pull : {friends : 'Nahid Hasan Bulbul'}}
    
 )

 // multiple element delete any array Use : $pullAll operator

  
  db.test.updateOne(
    {_id : ObjectId("6406ad63fc13ae5a40000066")},
    { $pullAll : {friends : ["Tanmoy Parvez", "Mir Hussain"]}}
    
 )



```

# Portion-10

👍 Learn : More about $set, $inc how to explore documentation


```

  // object property can be change $set opearator

  db.test.updateOne(
    {_id : ObjectId("6406ad63fc13ae5a40000066")},
    {
        $set : { 'address.city':'Pirojpur' }
    } 
    
   )

   // multiple property can be update

   db.test.updateOne(
    {_id : ObjectId("6406ad63fc13ae5a40000066")},
    {
        $set : { 'address.city':'Pirojpur' , 'address.country': 'Bangleadesh' , 'address.street': 'Mir Bari','address.postalCode':'8500'}
    } 
    
    )


    // update array of object value use 2 conditions  and $ operator

    db.test.updateOne(
    {_id : ObjectId("6406ad63fc13ae5a40000066"),'education.degree': 'Juris Doctor'},
    {
        $set : { 'education.$.major' : 'Medical Politics'}
    } 
    
   )


   // update multiple value from array of object

   db.test.updateOne(
    {_id : ObjectId("6406ad63fc13ae5a40000066"),'education.degree': 'Juris Doctor'},
    {
        $set : { 'education.$.major' : 'Medical Politics' , 'education.$.year':2000}
    } 
    
   )


   // $inc operator --> age : 5  . 5 means 5 years increment

   db.test.updateOne(
    {_id : ObjectId("6406ad63fc13ae5a40000066")},
    {
        $inc : { age : 5}
    } 
    
  )

```


# Portion-11


👍 Learn  delete documents, drop collection and how to explore by yourself

```
  /// deleteOne use delete document

  db.test.deleteOne(
    {_id : ObjectId("6406ad63fc13ae5a40000066")}
  )


  /// new collecton make refresh db 

   db.createCollection('final')

   /// delete any collectio 

   db.final.drop()


```

# 👍 Practice Task: In-Depth Exploration of MongoDB Queries

+ Download practice-data.json file


```


👍 Find all documents in the collection where the age is greater than 30, and only return the name and email fields.
👍 Find documents where the favorite color is either "Maroon" or "Blue."
👍 Find all documents where the skills is an empty array.
👍 Find documents where the person has skills in both "JavaScript" and "Java."
👍  Add a new skill to the skills array for the document with the email "aminextleveldeveloper@gmail.com" The skill is {"name": "Python", "level": "Beginner", "isLearning": true}.
👍 Add a new language "Spanish" to the list of languages spoken by the person.
👍 Remove the skill with the name "Kotlin" from the skills array.


```

# solution of practice Task 

```
  // task 1 

  db.test.find({age: {$gt : 30}}).project({name:1,email:1})

  // task 2

  db.test.find({ $or : [{ favoutiteColor : {$in : ['Maroon','Blue']}}]}).project({favoutiteColor:1})

  // task 3

  db.test.find({skills: {$exists : true ,$eq:[] }}).project({skills:1})

  // task 4

  db.test.find({
    $and: [{'skills.name':'JAVASCRIPT'},{'skills.name':'JAVA'}]
  }).project({skills:1})

  // task 5

  not done

  // task 6

  not done

  // task 7

  not done

  

      
```




# Part-2 : Mastering MongoDB and Aggregation & Indexing (Module-6)





👍 Learn : Introduction of powerful aggregation framework

# What is Aggregation ?

Aggregation is a way of processing a large number of documents  in a collection by means of passing them
through different stages.

The stages make up what is knonwn as a pipeline.

The stages in a pipeline can filter , sort , group , reshape and modify documentss that pass through the pipeline.


 👍 Aggregation Syntax

 ```
    db.collection.aggregate(

       [
           
            // stage 1
            {} , ---> Pipeline

            // stage 2
            {} , ----> Pipeline

            // stage 3
            {} , ----> Pipeline
       ]


    )
 
 ```


 # Portion-1 


 👍 Follow this documentation : 
 [https://studio3t.com/knowledge-base/articles/mongodb-aggregation-framework/#mongodb-out]


👍 Learn : $match , $project aggregation stage


```

    db.test.aggregate([
        
    // stage-1
    {$match: {age: {$gt : 20} ,gender : 'Male'} },
    
    // stage-2
    {$project: {age:1,email:1,gender:1,company:1}}

    ])

```


# Portion-2 



👍Learn :  $addFields , $out , $merge aggregation stage



```

    // $addField use for new field add . But it can be added original data

      db.test.aggregate([
      
      // stage - 1
      {$match : {gender : 'Male'}},
      
      // stage - 2 
      {$addFields: {course : 'Level-2 Developer'}},
      
      // stage -3 
      {$project: {gender: 1 , email : 1  , course : 1}}
      
      
      ])



     // $out operator use for new collection $addField value added

      db.test.aggregate([
      
      // stage - 1
      {$match : {gender : 'Male', age : {$lte: 30}}},
      
      // stage - 2 
      {$addFields: {course : 'Level-2 Developer'}},
      
      // stage -3 
      {$project: {gender: 1 , email : 1  , course : 1}},
      
      // stage -4 
      {$out: 'new_Collection'}
      
      
      ])



      // existing db collection new fields added use : $merge and $addFields


       db.test.aggregate([
      
      // stage - 1
      {$match : {gender : 'Male', age : {$lte: 30}}},
      
      // stage - 2 
      {$addFields: {course : 'Level-2 Developer'}},
      
      // stage -3 
      {$project: {gender: 1 , email : 1  , course : 1}},
      
      // stage -4 
      {$merge: 'test'}
      
      ])

```



# Portion-3


👍 Learn : $group , $sum , $push aggregation stage



```

    // $group , _id is require = $field name 
    // count : $sum : 1 mean this category length
    // allData store all , $push : $$ROOT everything . use $email other field
    // $project opearation use allData.name , allData.email etc

    db.test.aggregate([
      
       // stage : 1
      
        //   {$group: { _id: "$address.country" , 
        // count : {$sum: 1} , allData : {$push: '$email'} }}
    
      {$group: { _id: "$address.country" , count : {$sum: 1} , allData : {$push: '$$ROOT'} }},

       // stage : 2

      {$project: {"allData.name": 1 ,  "allData.email": 1 , "allData.gender": 1 , "allData.age" : 1} }
      
      
      ])

```




# Portion-4


👍 Learn : explore more about $group & $project



```


       /// _id : null --> mean all value select
       // $subtract using for subtract

       db.test.aggregate([
          
          // stage -1
          
          {
              $group: { _id: null ,
                   totalSalary : {$sum : '$salary'}  ,
                     maxSalary : {$max: '$salary'},
                     lowSalary : {$min: '$salary'},
                     AvgSalary: {$avg: '$salary'}
              
          }},
          
          // stage -2
          
          {
              $project: {
                  TotalSalary : '$totalSalary',
                  MaximumSalary: '$maxSalary',
                  lowSalary: 1,
                  AverageSalary: '$AvgSalary',
                  SalaryRange : {$subtract: [ '$maxSalary', '$lowSalary'  ]}
              }
          }
          
          
          ])


```


# Portion-5


👍 Learn : Explore $group with $unwind aggregation stage



  ```

      /// $unwind use for every array element divide single array

      db.test.aggregate([
    
      // stage -1 
      {
          $unwind: "$interests"
      },
      
      //   stage-2 
      
      {
          $group: { _id: "$age" , count: {$sum:1} , interest : {$push : '$interests' } } 
      }
    
    ])

```



# Portion-6 


👍 Learn : $bucket, $sort, and $limit aggregation stage



```
 
           // $bucket use for boundary wise category

     db.test.aggregate([
    
    // stage -1 bucket
    
     {
         $bucket: {
               groupBy: "$age",
               boundaries: [ 20, 40, 50,60,80 ],
               default: "No Much day have life",
               output: {
                 count: { $sum: 1 },
                 name : { $push: "$name.firstName" }
               }
             }
     }, 
     
     // stage - 2  sort --> count value depend . -1 big to small , 1 means small to big
     {
         $sort : {count:1}
     },
     
     // stage - 3  
     {
         $limit: 3
     },
     
    //  stage -4
    
    // {
    //     $project: {count:1 , '$name.firstName':1}
    // }
     
    
    ])



```



# Portion -7 


👍 Learn : $facet, multiple pipeline aggregation stag


```

               db.test.aggregate([
    
    
    {
        $facet: {
            
            // pipeline 1
            
            'allFriends':[
                
                   // stage 1
                   {$unwind: "$friends"},
                   //stage 2
                   {$group: { _id: "$friends" , count : {$sum:1}}}
                
                ] ,
                
            education:[
                
                   // stage 1
                   {$unwind: "$education"},
                   //stage 2
                   {$group: { _id: "$education" , count : {$sum:1}}}
                
                ] ,        
                
                        
        }

    }
    
   ])


```


# Portion - 8 


👍 Learn : $lookup stage, embedding vs referencing


  # Embeddedd

  👍 One to one relationships
  👍 Frequent reading data
  👍 Atomatic updates
  👍 Reduced Network Overhead
  👍 Small data size


  # Referencing 

  👍 One to many relationships
  👍 Many to Many
  👍 Frequent Writting
  👍 Big Data size
  👍 Scalability
  👍 Flexibility



```

   db.orders.aggregate([
    
    {
        $lookup: {
               from: "test",
               localField: "userId",
               foreignField: "_id",
               as: "user"
             }
    }
    
    
    ])




```


# Portion - 9 

👍 Learn : What is indexing, COLLSCAN vs IXSCAN


```
 // serach by id , called indexing

 db.test.find({_id:ObjectId("6406ad63fc13ae5a40000065")}).explain('executionStats')

 // serach by email or anything , called COLLSCAN . But time more requiere for data search and load

 db.test.find({"email" : "mdangl1@odnoklassniki.ru"}).explain('executionStats')


 // data load remove use indexing for all field

 db.getCollection("massive-collection").createIndex({email:1})

 /// previous load time is not required for search and load

 // delete indexing
 db.getCollection("massive-collection").dropIndex({email:1})


 // check for past search value mongodb atlas filter

  {"email" : "mdangl1@odnoklassniki.ru"}






```


# Portion : 10


👍 Learn : Explore compound index and text index



```
/// mongodb atlas create : multiple indexing 
//  As result less time require for search the query


// any filed partial searching use 'text indexing'

db.getCollection("massive-collection").createIndex({about:'text'})

// search exact text what you search . ex : 'dolore'

db.getCollection("massive-collection").find({$text:{$search: 'dolore'}}).project({about:1})



```


# Practice Task : Practice Task: MongoDB Aggregation

👍 Question 1:
-Retrieve the count of individuals who are active (isActive: true) for each gender.

👍 Question 2:
- Retrieve the names and email addresses of individuals who are active (`isActive: true`) and have a favorite fruit of "banana."

👍 Question 3:
- Find the average age of individuals for each favorite fruit, then sort the results in descending order of average age.

 👍 Question 4:
- Retrieve a list of unique friend names for individuals who have at least one friend, and include only the friends with names starting with the letter "W."

Hints: Explore how to use regex [ "friends.name": /^W/]

👍 Question 5:
- Use $facet to separate individuals into two facets based on their age: those below 30 and those above 30. Then, within each facet, bucket the individuals into age ranges (e.g., 20-25, 26-30, etc.) and sort them by name within each bucket.


👍 Question 6:
- Calculate the total balance of individuals for each company and display the company name along with the total balance. Limit the result to show only the top two companies with the highest total balance.



 👍 solutions : 

 ```
 
     not provide . please wait , let me some time
 
 
 ```




 # Part 3 : Mastering the foundation of Express (Module-7)



 # Portion-1


 👍 Learn : What is nodejs , a high level overview of node.js

   # Node.js modules

     1. Operating System Module(os)
     2. File System Module(fs)
     3. Path Module(path)
     4. HTTP Module (http)
     5. URL Module (url)
     6. Utilities Module (util)
   


   
   # Why node.js is popular ?

     7. We can use javaScript on server side.
     8. Build highly scalable backend application
     9.  It is single threaded , event driven and works non blocking I/O
     10. Perfect building data intensive , streaming application


   # Cons of using Node.js

     1. Highly cpu intensive tasks


   # Dependencies of Node JS
     
     1. V8 engine 
     2. libuv
   
   # What is V8 engine 

     Node JS runtime is based on V8 engine
     written in c++ & JavaScript . Without
     V8  NodeJS would never understand JavaScript code.



  # What is Libuv
    
    Libuv is an open source libary written on c++ which focuses on 
    asynchronous I/O and gives node
    access to Computer OS , File System,
    Networking etc.

    Libuv implements 2 important parts of Node.js

    + Evnet Loop
    + Thread Pool
  
  # Event Loop

    1. Execute callback functions
    2. Networking I/O

  # Thread Pool

    1. CPU Intensive Tasks
    2. File Access
    3. File Compression
    4. Cryptography


  # Potion -2

  👍 Learn about What is module, commonjs vs esm


  # What is module ?

  A module is an isolated and resuable block of code that has its own scope.

  👍 Difference between common.js and esm.js ?

   Node.js 14 support esm module

   👍 common.js 
   1. require 
   2. export / module.exports
   3. .js

   👍 esm.js
   1. import 
   2. export default
   3. .mjs


 👍 Types of module system

  1. Local modules (we create)
  2. Built in modules (come with Node.js)
  3. Third Party modules (create by developers)
  



  
  
   # Portion-3

   👍 Learn about File System Module , synchronous vs asynchronous

   👍 File system wirte and read 2 way async and sync it is define 

  # follow the link : https://nodejs.org/docs/latest-v20.x/api/fs.html

    👍 follow Module-7 : v-3 file for code 

  # Portion-4 

  👍 Learn about Event driven architecture, create your own events
     

     # follow the link : https://nodejs.org/docs/latest-v20.x/api/events.html

   👍 event driven is process here on event create , when it is  called , perfonm multiple operation
   

 # Portion-5 

 👍 Learn about Stream and buffer, create your own server


   👍 Stream and Buffer

   It is used  to process a data  piece by piece which called buffer .

   1. It is better in terms user experience.
   2. Needs short memory storage as it do not complete whole process at once.


  👍 Types of streaming

   1. Readable Stream : a stream where we can read data (ex : http req , fs.readStream)

   2.  Writeable Stream : a stream where we can write data (ex : http response , fs.writeStream)
   
   3.  Duplex Stream : a stream for both data read and write .

   4. Transform Stream : a stream where we can reshape data .


  # follow the link : https://nodejs.org/docs/latest-v20.x/api/http.html#httpcreateserveroptions-requestlistener

  

  # Portion - 6

  👍 Installing express, typescript

  # go to experss docs : https://expressjs.com/en/starter/installing.html

  all program show go to ---> v6-project-Express-1

  important command:

  ```
        npm init -y   👍 project init

        npm install express  👍 express install

        npm install typescript  👍 typescript install

        tsc --init             👍 tscconfig.json install

        npm i @types/node     👍 types node install

        @types/express        👍 express install

        tsc  👍 for ts convert js
        tsc -w  👍 for watch any change ts . that convert js

  ```
 

 # Portion - 8

  👍 Learn middleware in express.js

   👍for params

   ```

     app.get('/:id/:subid', (req : Request , res : Response) => {

    console.log(req.params)

    res.send('Hello Developers! Do not worried more explore ? ')
   })


   👍 postman : get request
   http://localhost:5000/34/3
   
   ```

   👍 for query 

   ```
  
  app.get('/', (req : Request , res : Response) => {

    console.log(req.query)

  res.send('Hello Developers! Do not worried more explore ? Job ki paisoy')
  })


   👍 postman : get request
   http://localhost:5000?email=mdazrail.com&name=azrail
    
   
   ```


  # Portion : 9 

  👍 Learn Routing in express.js
 

  // express  router use for get other method
 

 ```


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
    
 
 ```

 
# Portion : 10

👍 Learn about express Error Handler part 1

```
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

```
 
