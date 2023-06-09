const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
   username:{
    type:String,
    require:[true,"username is require"]
   },
   email:{
    type:String,
    require:[true,"email is require"],
    unique:true
   },
   password:{
    type:String,
    require:[true,"Password Required"]
   },
   customerId:{
    type:String,
    defaults:""
   },
   subscription:{
    type:String,
    defaults:""
   }


})


const User= new mongoose.model("User",userSchema)
module.exports={User}