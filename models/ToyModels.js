var mongoose = require('mongoose');

var ToySchema = mongoose.Schema({
    name : String,
    Price : Number,
    category : String,
    quantity : Number,
    video : String,
    pic : String
});
var ToyModels = mongoose.model("TOY", ToySchema, "Toy");

module.exports = ToyModels;
