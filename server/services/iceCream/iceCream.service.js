const IceCreamModel = require("./iceCream.model");

const createOrGetIceCream = async (iceCreamId) => {
  if (iceCreamId) {
    return await getIceCreamById(iceCreamId);
  }
  return new IceCreamModel();
};

const saveIceCream = async (iceCreamData, iceCreamId) => {
  const iceCream = await createOrGetIceCream(iceCreamId);
  iceCream.overwrite({ ...iceCream._doc, ...iceCreamData });
  return await iceCream.save();
};

const getIceCreamList = async () => {
  const iceCreams = await IceCreamModel.find();
  return iceCreams;
};

const getIceCreamById = async (iceCreamId) => {
  return await IceCreamModel.findOne({ _id: iceCreamId });
};

const deleteIceCream = async (iceCreamId) => {
  return await IceCreamModel.deleteOne({ _id: iceCreamId });
};

const updateIceCreamSupply = async (id, amountToReduce) => {
  const updateSupplyAmount = -amountToReduce;
  return await IceCreamModel.updateOne(
    { _id: id },
    { $inc: { supplyAmount: updateSupplyAmount } }
  );
};

module.exports = {
  saveIceCream,
  getIceCreamList,
  getIceCreamById,
  deleteIceCream,
  updateIceCreamSupply,
};
