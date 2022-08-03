let MongoConnect=require('mongodb').MongoClient

let employeedata=require("./employee");
let connectionurl="mongodb://localhost:27017"
MongoConnect(connectionurl,  async(error,db)=>{
    if(error){
        console.log(error)
    }else{
        console.log("connection successfully")
    }
})

let result =await database.collection("employee").insertMany(employeeArr);
console.log(result);
let find=await database.collection('employee').find().toArray();
console.log(find);
const Salary=await database.collection('employee').find({"salary":{$gt:20000}}).toArray();
console.log(Salary);
let Exp=await database.collection('employee').find({"overallExp":{$gt:1}}).toArray;
console.log(Exp);
let update=await database.collection('employee').updateMany({"salary":{$set:{"salary":28000}}})
console.log(update);