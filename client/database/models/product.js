const mongoose = require("mongoose");
const {Schema, model } = mongoose;

const productSchema = new Schema({
    id: {type: Number},
    product_name: {type: String, required: true},
    image: {type: String, require: true},
    manufacturing_date: {type: Date, min: 2020},
    price:{type: Decimal},
    manufacturing_address: {type:String},
    sku:{type:String},
    keyword:{type:String},
    status:{type:String},
    variant:{type:Object},
    description:{type:String}
});
const productModel = new model("products", productSchema);

module.exports = productModel;