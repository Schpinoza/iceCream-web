const express = require("express");
const router = express.Router();

const iceCreamController = require("./iceCream.controller");

router.post("/", iceCreamController.createIceCream);
router.put("/:id", iceCreamController.updateIceCream);
router.get("/:id", iceCreamController.getIceCreamById);
router.get("/", iceCreamController.getIceCreamList);
router.delete("/:id", iceCreamController.deleteIceCream);

module.exports = router;
