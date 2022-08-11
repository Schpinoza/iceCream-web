const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const iceCreamSchema = new Schema({
  name: String,
  price: Number,
  supplyAmount: Number,
});

const IceCreamModel = mongoose.model("Ice_cream", iceCreamSchema);
module.exports = IceCreamModel;
