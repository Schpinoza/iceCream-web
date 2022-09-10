const express = require("express");
const router = express.Router();

const OrderController = require("./Order.controller");

router.post("/", OrderController.create);
router.get("/admin-order-list", OrderController.getIceCreamOrderList);
router.get("/:id", OrderController.getIceCreamOrderById);
router.delete("/:id", OrderController.deleteIceCreamOrder);

module.exports = router;
