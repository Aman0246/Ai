const express=require("express")
const app=express()
app.use(express.json())
const mongoose=require('mongoose')
const {routes}=require("./router/authroutes")
require('dotenv').config()
const port=process.env.PORT || 8080
mongoose.connect(process.env.MONCOCONNECT).then(()=>{console.log("mongoDb Connected")}).catch(()=>{console.log("Db Connection Errror")})

app.use("/api/v1/auth",routes)


app.listen(port,()=>{
    console.log(`surver Running at ${port}`)
})