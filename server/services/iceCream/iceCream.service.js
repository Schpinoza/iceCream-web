const IceCreamModel = require('./iceCream.model')


const createOrGet =async (iceCreamId)=>{
    if(iceCreamId){
        return await getById(iceCreamId)
    }
    return new IceCreamModel()
}

const save = async(iceCreamData,iceCreamId)=>{
    const iceCream = await createOrGet(iceCreamId)
    iceCream.overwrite({...iceCream._doc,...iceCreamData})
    return await iceCream.save()
}

const getList = async()=>{
    const iceCreams = await IceCreamModel.find()
    return iceCreams
}

const getById = async(iceCreamId)=>{
    return await IceCreamModel.findOne({_id:iceCreamId})
}

const update = async(iceCreamId,data)=>{
    return await IceCreamModel.updateOne({_id:iceCreamId},data)
}

const deleteIceCream = async(iceCreamId)=>{
    return await IceCreamModel.deleteOne({_id:iceCreamId})

}

const updateAmount = async(id,amountToReduce)=>{
    const updateSupplyAmount = -amountToReduce
    return await IceCreamModel.updateOne({_id:id},{$inc:{supplyAmount:updateSupplyAmount}});
    // const iceCream = await update(id,supplyAmount,updateSupplyAmount)
}



module.exports={
    save,
    getList,
    getById,
    deleteIceCream,
    updateAmount
}