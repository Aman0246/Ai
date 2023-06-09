const a=async(req,res,next)=>{
    res.header("Access-Control-Allow-Headers", "https://url-shrinker-adnc.vercel.app")
    next();
}
module.exports={a}