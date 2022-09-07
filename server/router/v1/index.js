const express = require("express");
const router = express.Router();

const iceCreamRouter = require("../../services/iceCream/iceCream.router");
const orderRouter = require("../../services/Order/Order.router");
router.use("/iceCream", iceCreamRouter);
router.use("/order", orderRouter);

module.exports = router;
