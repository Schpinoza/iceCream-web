const express = require("express");
const router = express.Router();

const iceCreamController = require("./iceCream.controller");

router.post("/", iceCreamController.create);
router.put("/:id", iceCreamController.update);
router.get("/:id", iceCreamController.getById);
router.get("/", iceCreamController.getList);
router.delete("/:id", iceCreamController.deleteIceCream);

module.exports = router;
