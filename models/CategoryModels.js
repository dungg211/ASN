var mongoose = require('mongoose');

var Category = mongoose.Schema({
    name : String,
    address : String
});
var CategoryModels = mongoose.model("CATEGORY", ToySchema, "category");

module.exports = CategoryModels;
