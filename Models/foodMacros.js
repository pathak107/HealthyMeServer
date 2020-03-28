const mongoose = require('mongoose');
var foodMacrosSchema= new mongoose.Schema({
    foodName:String,
    description: String,
    protein:Number,
    carbs:Number,
    fat:Number,
    fiber:Number,
    calories:Number
});

var foodMacros= new mongoose.model('foodMacros',foodMacrosSchema);

module.exports= foodMacros;

// "foodName":"Chicken",
// "description":"Best source for lean protein.",
// "calories": 165,
// "protein": 31 ,
// "carbs": 0,
// "fiber": 0 ,
// "fat": 3.6

