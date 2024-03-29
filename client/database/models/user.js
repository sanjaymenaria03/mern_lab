const mongoose = require("mongoose");
const {Schema, model } = mongoose;

const userSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, default: "xyz@gmail.com"},
    mobile_number: {type: Number, default: 000000000},
    year: {type: Number, min: 2012, max:2030},
    password: { type: String, required: true},
});


const userModel = new model("users", userSchema);


module.exports = userModel;