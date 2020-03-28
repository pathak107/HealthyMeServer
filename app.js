const express = require('express');
const app= express();
const mongoose = require('mongoose');
const url="mongodb://shubhamPathak:dafu*k123@cluster0-shard-00-00-hr632.mongodb.net:27017,cluster0-shard-00-01-hr632.mongodb.net:27017,cluster0-shard-00-02-hr632.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority";
mongoose.connect(url, {useNewUrlParser: true,useCreateIndex:true,useUnifiedTopology: true})
.then(() => console.log( 'Database Connected' ))
.catch(err => console.log( err ));

//api controller
const apiController = require('./routes/api.js');
app.use('/api',apiController);


app.listen(process.env.PORT||3000,()=>{
    console.log("Server started succesfully");
});