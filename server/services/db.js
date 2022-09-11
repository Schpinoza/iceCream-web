const mongoose = require("mongoose");
const { config } = require("../../config");

const MONGODB_URL = config.MONGODB_KEY_URL;
const init = async () => {
  mongoose.connect(MONGODB_URL, { useNewUrlParser: true });
};

module.exports = { init };
