const mongoose = require("mongoose");
<<<<<<< HEAD
const init = async () => {
  mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true });
=======
const url = process.env.MONGODB_URL;
const init = async () => {
  mongoose.connect(url, { useNewUrlParser: true });
>>>>>>> main
};

module.exports = { init };
