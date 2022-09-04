const mongoose = require('mongoose');
const { config } = require('../../config.js')



const init = async()=>{
    mongoose.connect(config.MONGODB_KEY_URL,{useNewUrlParser: true});

}






module.exports={init}