const iceCreamService = require('./iceCream.service')

const create = async(req, res)=>{
   try{
    return res.send(await iceCreamService.save(req.body))
   }catch(error){
    return res.fail("failed to create ice cream")
   }
  }

  const update = async(req, res)=>{
    try{
     return res.send(await iceCreamService.save(req.body,req.params.id))
    }catch(error){
     return res.fail("failed to update ice cream")
    }
   }

   const getList = async(req, res)=>{
    try{
     return res.send(await iceCreamService.getList())
    }catch(error){
     return res.fail("failed to get ice creams")
    }
   }

   const getById = async(req, res)=>{
    try{
     return res.send(await iceCreamService.getById(req.params.id))
    }catch(error){
     return res.fail("failed to get ice cream")
    }
   }
   
   const deleteIceCream = async(req, res)=>{
    try{
     return res.send(await iceCreamService.deleteIceCream(req.params.id))
    }catch(error){
     return res.fail("failed to delete ice cream")
    }
   }

   module.exports={
    create,
    update,
    getList,
    getById,
    deleteIceCream
   }