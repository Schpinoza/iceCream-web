import axios from "axios";

const baseUrl = "/v1/";

const get = async (endpoint) => {
  try {
    const response = await axios.get(baseUrl + endpoint);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
const post = async (endpoint, iceCreamObject) => {
  try {
    await axios.post(baseUrl + endpoint, iceCreamObject);
  } catch (error) {
    console.log(error.message);
  }
};

const getIceCreams = async () => {
  return await get("ice-cream");
};
const sendOrder = async (order) => {
  return await post(`order`, order);
};

const getOrderList = async () => {
  return await get("order/admin-order-list");
};

const APIRequests = {
  getIceCreams,
  sendOrder,
  getOrderList,
};
export default APIRequests;
