const mongoose =require('mongoose')
const user1 =mongoose.Schema({
    
    sno1:Number,names1:String,Roll1:String,Book1:String,Due1:Date
})
const Schema1 =mongoose.model("BOOK TAKEN USERS",user1)
module.exports=Schema1