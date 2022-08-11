const express =require('express')
const router = express.Router();

const OrderController = require('./Order.controller')

router.post("/",OrderController.create)
router.get("/admin-order-list",OrderController.getList)
router.get("/:id",OrderController.getById)
router.delete("/:id",OrderController.deleteIceCream)

module.exports = router




