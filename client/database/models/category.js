const mongoose = require("mongoose");
const {Schema, model } = mongoose;

const categorySchema = new Schema({
    category_id : {type:Number},
    category_name:{type: String},
    description:{type:String},
    picture:{type:String}
});
const categoryModel = new model("category", categorySchema);

module.exports = categoryModel;