//This is main server 
const express = require('express')
const app = express()
const db=require('./db');

const bodyParser = require('body-parser');
 app.use(bodyParser.json())

const person=require('./models/person');
app.get('/', function (req, res) {
  res.send('Hello Avanish');
})
app.post('/person',async(req,res)=>{
try{
  const data=req.body// Assuming the request body contains the person data
  //Create a new Person document using the Mongoose model
  const newPerson=new person(data);

  //save the new person to the database
    const response=await newPerson.save()
    console.log('data saved');
      res.status(200).json(response);

}catch(err){
    console.log(err);
    res.status(500).json({error:'Internal server error'});
  }
  
})
app.listen(5000,()=>{
  console.log("server is listening at port 5000");
});