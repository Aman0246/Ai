const a=async(req,res,next)=>{
    res.header("Access-Control-Allow-Headers", "https://ai-indol.vercel.app")
    next();
}
module.exports={a}