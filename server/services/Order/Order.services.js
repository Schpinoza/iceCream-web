const OrderModel = require("./Order.model");
const iceCreamService = require("../iceCream/iceCream.service");

const create = async (order) => {
  const ordered = new OrderModel();
  ordered.overwrite(order);
  updateSupplyAmount(order);
  return await ordered.save();
};

const getById = async (orderId) => {
  return await OrderModel.findOne({ _id: orderId }).populate({
    path: "items.iceCream",
  });
};

const updateSupplyAmount = async (order) => {
  order.items.forEach((item) => {
    iceCreamService.updateSupply(item.iceCream, item.amount);
  });
};

const getList = async () => {
  const allOrders = await OrderModel.find({});
  const eachOrderId = await Promise.all(
    allOrders.map((order) => {
      const orderList = getById(order._id);
      return orderList;
    })
  );
  return eachOrderId;
};

module.exports = {
  create,
  getById,
  getList,
};
