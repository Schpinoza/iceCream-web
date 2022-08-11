const OrderModel = require('./Order.model')
// const mongoose = require('mongoose');
const iceCreamService = require('../iceCream/iceCream.service')


// const creatOrGet = async(orderedId)=>{
//     if(orderedId){
//         return await getById(orderedId)
//     }
//     return new OrderedModel
// }


const create = async(order)=>{
    const ordered = new OrderModel()
    //  order.items = order.items.map(item=>({...item,iceCream:item.iceCream}))
    ordered.overwrite(order)
    updateSopplyAmount(order)
    return await ordered.save()
}

const getById= async(orderId)=>{
    
    // return await OrderModel.find({}).populate({path: 'items.iceCream'})
    return await OrderModel.findOne({_id:orderId}).populate({path: 'items.iceCream'})

}

const updateSopplyAmount= async(order)=>{
    order.items.forEach(item => {
        iceCreamService.updateAmount(item.iceCream, item.amount)
    });
}

const getList = async()=>{
    const allOrders = await OrderModel.find({})
    const eachOrderId = await Promise.all(allOrders.map((order)=>{
        const orderList = getById(order._id)
        return orderList
    }))
    return eachOrderId


}

module.exports = {
    create,
    getById,
    getList
}