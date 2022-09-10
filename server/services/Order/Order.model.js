const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const item = {
  iceCream: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Ice_cream",
  },
  amount: Number,
};

const Order = new Schema({
  userDetails: {
    orderer: String,
    email: String,
    address: String,
    city: String,
    zipcode: Number,
    date: String,
  },
  items: [item],
  orderTotalPrice: Number,
});

const OrderedModel = mongoose.model("Order", Order);
module.exports = OrderedModel;
