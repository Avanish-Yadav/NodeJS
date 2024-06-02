const mongoose=require('mongoose');
//define the mongodb connection
const mongoURL='mongodb+srv://avanishYadav:avanish@cluster0.dq3nqba.mongodb.net/'
//set up Mongodb connection
mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true  
})

//get the default connection
//Mongoose maintains a default connection object represent the Mongodb connection.
const db=mongoose.connection;

db.on('connected',()=>{
    console.log('Connected to MongoDB server');
});

db.on('error',(err)=>{
    console.log('MongoDB connection error',err);
});

db.on('disconnected',()=>{
    console.log('MongoDB disconnected');
});

//Export the databse connection
module.exports=db;