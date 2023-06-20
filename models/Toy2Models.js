var mongoose = require('mongoose');

var ToySchema = mongoose.Schema({
    name : String,
    Price : Number,
    category : String,
    quantity : Number,
    pic : String
});
var Toy2Models = mongoose.model("TOY2", ToySchema, "Toy2");

module.exports = Toy2Models;
