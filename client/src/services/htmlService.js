import axios  from 'axios'

const baseUrl = '/v1/'

const get = async(endpoint)=>{
    try{
    const response =  await axios.get(baseUrl+endpoint)
    return response.data
    }
    catch (error) {
        console.error(error);
      }

}
const post = async(endpoint,iceCreamObject)=>{
    try {
        await axios.post(baseUrl+endpoint, iceCreamObject);

      } catch (error) {
        console.log(error.message);

      }
    }


const getIceCreams = async ()=>{
    return await get('iceCream')
  }
const postIceCreamFromCart = async (iceCreamObject)=>{
  console.log(iceCreamObject);
    return await post(`order`,iceCreamObject)
}

const getOrderList = async ()=>{
  return await get('order/admin-order-list')

}
export default {
    getIceCreams,
    postIceCreamFromCart,
    getOrderList,

}