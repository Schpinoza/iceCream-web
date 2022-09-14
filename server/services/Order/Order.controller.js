const order = require("./Order.services");

const createOrder = async (req, res) => {
  try {
    return res.send(await order.createOrder(req.body));
  } catch (error) {
    return res.fail("failed to create order");
  }
};

const getIceCreamOrderList = async (req, res) => {
  try {
    return res.send(await order.getIceCreamOrderList());
  } catch (error) {
    return res.fail("failed to get orders list");
  }
};

const getIceCreamOrderById = async (req, res) => {
  try {
    return res.send(await order.getIceCreamOrderById(req.params.id));
  } catch (error) {
    return res.fail("failed to get order");
  }
};

const deleteIceCreamOrder = async (req, res) => {
  try {
    return res.send(await order.deleteIceCreamOrder(req.params.id));
  } catch (error) {
    return res.fail("failed to delete order");
  }
};

module.exports = {
  createOrder,
  getIceCreamOrderList,
  getIceCreamOrderById,
  deleteIceCreamOrder,
};
