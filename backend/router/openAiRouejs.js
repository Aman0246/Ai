const express=require("express")
const airouter =express.Router()
const {ParaController}=require("../Controllers/ParaMaker")
const {summeryController}=require("../Controllers/AiController")
const {aiImage}=require("../Controllers/ImageGenerator")


airouter.post("/summary",summeryController)
airouter.post("/AIimage",aiImage)
airouter.post("/paraMaker",ParaController)


module.exports={airouter}