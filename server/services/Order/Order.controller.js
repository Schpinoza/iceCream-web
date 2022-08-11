const order = require('./Order.services')

const create = async(req, res)=>{
   try{
    return res.send(await order.create(req.body))
   }catch(error){
    return res.fail("failed to create ice cream")
   }
  }


   const getList = async(req, res)=>{
    try{
     return res.send(await order.getList())
    }catch(error){
     return res.fail("failed to get ice creams")
    }
   }

   const getById = async(req, res)=>{
    try{
     return res.send(await order.getById(req.params.id))
    }catch(error){
     return res.fail("failed to get ice cream")
    }
   }
   
   const deleteIceCream = async(req, res)=>{
    try{
     return res.send(await order.deleteIceCream(req.params.id))
    }catch(error){
     return res.fail("failed to delete ice cream")
    }
   }

   module.exports={
    create,
    getList,
    getById,
    deleteIceCream
   }