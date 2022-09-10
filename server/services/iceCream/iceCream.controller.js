const iceCreamService = require("./iceCream.service");

const createIceCream = async (req, res) => {
  try {
    return res.send(await iceCreamService.saveIceCream(req.body));
  } catch (error) {
    return res.fail("failed to create ice cream");
  }
};

const updateIceCream = async (req, res) => {
  try {
    return res.send(
      await iceCreamService.saveIceCream(req.body, req.params.id)
    );
  } catch (error) {
    return res.fail("failed to update ice cream");
  }
};

const getIceCreamList = async (req, res) => {
  try {
    return res.send(await iceCreamService.getIceCreamList());
  } catch (error) {
    return res.fail("failed to get ice creams");
  }
};

const getIceCreamById = async (req, res) => {
  try {
    return res.send(await iceCreamService.getIceCreamById(req.params.id));
  } catch (error) {
    return res.fail("failed to get ice cream");
  }
};

const deleteIceCream = async (req, res) => {
  try {
    return res.send(await iceCreamService.deleteIceCream(req.params.id));
  } catch (error) {
    return res.fail("failed to delete ice cream");
  }
};

module.exports = {
  createIceCream,
  updateIceCream,
  getIceCreamList,
  getIceCreamById,
  deleteIceCream,
};
