require('dotenv').config()
const express = require('express');
const app= express();
const mongoose = require('mongoose');
const url=process.env.DATABASE_URL;
mongoose.connect(url, {useNewUrlParser: true,useCreateIndex:true,useUnifiedTopology: true})
.then(() => console.log( 'Database Connected' ))
.catch(err => console.log( err ));

//api controller
const apiController = require('./routes/api.js');
app.use('/api',apiController);


app.listen(process.env.PORT||3000,()=>{
    console.log("Server started succesfully");
});