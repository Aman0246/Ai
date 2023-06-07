const express=require("express")
const routes=express.Router()
const {register,login,logOut}=require("../Controllers/authController")


routes.post("/register",register)
routes.post("/login",login)  
routes.get("/logout",logOut)

module.exports={routes}