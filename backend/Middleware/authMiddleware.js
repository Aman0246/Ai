const a=async(req,res,next)=>{
    res.header("Access-Control-Allow-Headers", "https://ai-p2xf.vercel.app/")
    next();
}
module.exports={a}