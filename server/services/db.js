const mongoose = require('mongoose')



const init = async()=>{
    mongoose.connect("mongodb+srv://admin-tal:tal2307@cluster0.gpidj.mongodb.net/?retryWrites=true&w=majority",{useNewUrlParser: true});

}






module.exports={init}