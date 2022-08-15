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
const post = (endpoint,iceCreamObject)=>{
    try {
        await axios.post(baseUrl+endpoint, iceCreamObject);

      } catch (error) {
        console.log(error.message);

      }
    }



const getIceCreams= async ()=>{
    return await get('iceCream')
  }
const postIceCreamFromCart =async (iceCreamObject)=>{

    return await post(`order`,iceCreamObject)
}

export default {
    getIceCreams,
    postIceCreamFromCart,

}