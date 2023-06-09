const a=async(req,res,next)=>{
    res.header("Access-Control-Allow-Headers", "https://ai-18oq237gk-aman0246.vercel.app")
    next();
}
module.exports={a}