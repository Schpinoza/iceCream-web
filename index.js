const express = require("express");
<<<<<<< HEAD:index.js
const { init } = require("./server/services/db");
const router = require("./server/router/v1");
=======
const { init } = require("./services/db");
const router = require("./router/v1");
>>>>>>> main:server/index.js
require("dotenv").config();

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

init();

app.use("/v1", router);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
