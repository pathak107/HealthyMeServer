const mongoose = require('mongoose');
var weightLossSchema= new mongoose.Schema({
    title:String,
    description: String,
});

var weightLossPlan= new mongoose.model('weightLossPlan',weightLossSchema);

module.exports= weightLossPlan;