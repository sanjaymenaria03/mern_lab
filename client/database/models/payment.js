const mongoose = require("mongoose");
const {Schema, model } = mongoose;

const paymentSchema = new Schema({
    payment_id : {type:Number},
    payment_type : {type: String}
});
const paymentModel = new model("payments", productSchema);

module.exports = paymentModel;