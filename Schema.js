const mongoose =require('mongoose')
const user =mongoose.Schema({

    names:Number,
    email:String,
    age:String
})
const Schema =mongoose.model("BOOKS",user)
module.exports=Schema