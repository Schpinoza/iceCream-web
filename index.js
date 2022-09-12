const express = require("express");
require("dotenv").config();
const { init } = require("./server/services/db");
const router = require("./server/router/v1");

const PORT = process.env.PORT || 3001;

const app = express();
app.get("*", function (req, res) {
  const index = path.join(__dirname, "build", "index.html");
  res.sendFile(index);
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

init();

app.use("/v1", router);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});