const mongoose = require("mongoose");
const { config } = require("../config");

const init = async () => {
  mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true });
};

module.exports = { init };
