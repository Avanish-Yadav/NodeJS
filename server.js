const express = require('express')
const app = express()
const db=require('./db');

const bodyParser = require('body-parser');
 app.use(bodyParser.json())

const person=require('./models/person');
app.get('/', function (req, res) {
  res.send('Hello Avanish');
})
app.post('/person',(req,res)=>{

  const data=req.body// Assuming the request body contains the person data
  //Create a new Person document using the Mongoose model
  const newPerson=new person(data);

  //save the new person to the database
  newPerson.save((error,savedPerson)=>{ //but now a time callback is not used but async await is used
      if(error){
        console.log('Error saving person',error);
        res.status(500).json({error:'Internal server error'});
      }else{
        console.log('data saved successfully');
        res.status(200).json(savedPerson);
      }
  })
  

})
app.listen(5000,()=>{
  console.log("server is listening at port 5000");
});