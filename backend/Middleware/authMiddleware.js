const a=async(req,res,next)=>{
    res.header("Access-Control-Allow-Headers", "https://ai-aman0246.vercel.app")
    next();
}
module.exports={a}