const express=require("express")
const app=express()
const cors=require("cors")
app.use(express.json())
const mongoose=require('mongoose')
const {routes}=require("./router/authroutes")
const {airouter}=require("./router/openAiRouejs")
require('dotenv').config()
const port=process.env.PORT || 8080
mongoose.connect(process.env.MONCOCONNECT).then(()=>{console.log("mongoDb Connected")}).catch(()=>{console.log("Db Connection Errror")})
//=================================
app.use(cors({
    credentials:true,
    origin:"https://ai-aman0246.vercel.app/"  
  }))
//=================================
app.use("/api/v1/auth",routes)
app.use("/api/openai",airouter)


app.listen(port,()=>{
    console.log(`surver Running at ${port}`)
})