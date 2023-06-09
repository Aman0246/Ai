const a=async(req,res,next)=>{
    res.header("Access-Control-Allow-Headers", "https://ai-five-sigma.vercel.app")
    next();
}
module.exports={a}