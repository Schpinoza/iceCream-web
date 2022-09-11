const mongoose = require("mongoose");
const url = process.env.MONGODB_URL;
const init = async () => {
  mongoose.connect(url, { useNewUrlParser: true });
};

module.exports = { init };
