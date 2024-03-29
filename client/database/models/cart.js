const mongoose = require("mongoose");
const { schema, model } = mongoose;

const cartSchema = new mongoose({
    _id: { type: String, require: true },
    quantity: { type: Number, require: true },
    Total_price: { type: Number, require: true },
    modified_at: { type: Date }
});

const cartModel = new model("cart", cartSchema);
module.exports = CardModel;