const mongoose = require('mongoose');
const { config } = require('../../config');



const init = async()=>{
    mongoose.connect(config.MONGODB_KEY,{useNewUrlParser: true});

}






module.exports={init}