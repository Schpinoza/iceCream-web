const mongoose = require("mongoose");

const init = async () => {
  mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true });
};

module.exports = { init };
