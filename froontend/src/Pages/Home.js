import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Home.css"

export default function Home() {
  const navigate=useNavigate()
  const hancleclickOne=()=>{
       navigate("/summery")
  }
  return (

    <div className='a'>

   
    <div class="grid  gap-4 grid-cols-3 grid-rows-2">
    <div className=' hover:border-green-300 hover:bg-gray-900 justify-center flex-col items-center flex border-4 border-green-500 h-[15rem] my-5 mx-5 rounded-3xl bg-black text-white ' >
      <h1 className='p-2 font-bold text-lg underline underline-offset-3 '>Summerizer</h1>
      <span className='p-3'>AI Summarizer: Effortlessly condense lengthy texts into concise summaries. Save time, extract key information, and make informed decisions.</span>
      <button onClick={hancleclickOne} className=' p-1 rounded-lg font-bold bg-white text-black'> Click Me</button>
    </div>
    <div className=' hover:border-green-300 hover:bg-gray-900 justify-center flex-col items-center flex border-4 border-green-500 h-[15rem] my-5 mx-5 rounded-3xl bg-black text-white ' >
      <h1 className='p-2 font-bold text-lg underline underline-offset-3 '>Generate Ai Image</h1>
      <span className='p-3'>"AI Image is an innovative solution that utilizes the capabilities of artificial intelligence to generate captivating and lifelike images. </span>
      <button onClick={()=>{navigate("/image")}} className=' p-1 rounded-lg font-bold bg-white text-black'> Click Me</button>
    </div>
    <div className=' hover:border-green-300 hover:bg-gray-900 justify-center flex-col items-center flex border-4 border-green-500 h-[15rem] my-5 mx-5 rounded-3xl bg-black text-white ' >
      <h1 className='p-2 font-bold text-lg underline underline-offset-3 '>Generate Paragraph</h1>
      <span className='p-3'>Introducing the Paragraph Generator app! Create paragraphs effortlessly with just a few clicks. Streamline your writing process and enhance productivity. </span>
      <button onClick={()=>{navigate("/paraMaker")}} className=' p-1 rounded-lg font-bold bg-white text-black'> Click Me</button>
    </div>
    
    
  </div> </div>
  )
}
