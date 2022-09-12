const express = require("express");
require("dotenv").config();
const { init } = require("./server/services/db");
const router = require("./server/router/v1");

const PORT = process.env.PORT || 3001;
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

init();

app.use("/v1", router);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
