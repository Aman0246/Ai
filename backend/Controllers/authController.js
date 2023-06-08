const {User}=require("../Models/userModel")
const {hassPassword,compare}=require("../Bcrypt/bcrypt")
var jwt = require('jsonwebtoken');
const { response } = require("express");
var validator = require('validator');

const register=async(req,res)=>{
    try {
        const {username,email,password}=req.body
        if(!username||!email||!password)return res.status(200).send({status:false,message:"Require to fill each field"})
        let user= await User.findOne({email})
        if(user)return res.status(200).send({status:false,message:"User all Ready exist"})
        if(!validator.isEmail(email))return res.status(200).send({status:false,message:"email is invalid"})
        const hasspassword=await hassPassword(password)
        let newUser =await User.create({username,email,password:hasspassword})
        res.status(201).send({status:true,message:"registration done",user:newUser})
    } catch (error) {
        res.status(500).send({status:false,message:error.message})
    }

}

const login=async(req,res)=>{
    try {
        const {email,password}=req.body
        if(!email||!password)return res.status(200).send({status:false,message:"Require to fill each field"})
      if(!validator.isEmail(email))return res.status(200).send({status:false,message:"email is invalid"})
      let user= await User.findOne({email})
      if(!user)return res.status(200).send({status:false,message:"invalid User"})
      const comparePassword= await compare(password,user.password)
      if(!comparePassword)return res.status(200).send({status:false,message:"password not matched"})
      const token=jwt.sign({id:user._id},process.env.JWT_KEY)
      res.cookie("token",token)
      res.status(200).send({status:true,message:"login Successfull.",token:token})
        
    } catch (error) {
        res.status(500).send({status:false,message:error.message})
    }  




}

const logOut=async(req,res)=>{
    res.clearCookie("token")
    return res.status(200).send({status:true,message:"logOut Succesfully"})

}

module.exports={register,login,logOut}