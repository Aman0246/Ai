  
require('dotenv').config()
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const aiImage=async(req,res)=>{
    try {
        const {text}=req.body
        const {data} = await openai.createImage({
            prompt: ` ${text}`,
            n: 1,
            size: "512x512",
        });
   
        if(data){
                // console.log(data.data[0].url)
      
               res.send(data.data[0].url)
         
            }
          
    
        
    } catch (error) {
        res.send({mess:"Well this is not be happen...........",err:error.message})
        
    }
}

module.exports={aiImage}