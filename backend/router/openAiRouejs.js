const express=require("express")
const airouter =express.Router()
const {summeryController}=require("../Controllers/AiController")
const {aiImage}=require("../Controllers/ImageGenerator")


airouter.post("/summary",summeryController)
airouter.post("/AIimage",aiImage)


module.exports={airouter}