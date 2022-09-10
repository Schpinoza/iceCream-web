const order = require("./Order.services");

const create = async (req, res) => {
  try {
    return res.send(await order.create(req.body));
  } catch (error) {
    return res.fail("failed to create ice cream");
  }
};

const getIceCreamOrderList = async (req, res) => {
  try {
    return res.send(await order.getIceCreamOrderList());
  } catch (error) {
    return res.fail("failed to get ice creams");
  }
};

const getIceCreamOrderById = async (req, res) => {
  try {
    return res.send(await order.getIceCreamOrderById(req.params.id));
  } catch (error) {
    return res.fail("failed to get ice cream");
  }
};

const deleteIceCreamOrder = async (req, res) => {
  try {
    return res.send(await order.deleteIceCreamOrder(req.params.id));
  } catch (error) {
    return res.fail("failed to delete ice cream");
  }
};

module.exports = {
  create,
  getIceCreamOrderList,
  getIceCreamOrderById,
  deleteIceCreamOrder,
};
