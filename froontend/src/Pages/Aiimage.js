import React, { useState } from 'react'
import "./css/Login.css"
import { Link } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast';
import Loader from '../components/Loader/Loader';

export default function Image() {
  const [load,setload]=useState(false)
  const[text,settext]=useState(" ")
  const[image,setimage]=useState("")
  const handleSummary=async(e)=>{
    setload(true)
    e.preventDefault();
    try {toast.success("wait for few secound")
 await axios.post("/api/openai/AIimage",{text}).then((a)=>{
  setload(false)

     setimage(a.data)
           
    })

       
    } catch (error) {
      console.log(error.message)
    }
    
  }

  return (
 <>
 {image?(""):(<div className='p-5 font-bold  '>"AI Image Generate: Harness the power of AI to create stunning and realistic images with ease and creativity."</div>)

}

{load?<div className='absolute'> <Loader/> </div>:("")}
    <div className="flex flex-col mt-[15rem] w-[40%]  items-center login-box">

        <div className=' text-green-500 text-2xl pb-5 font-bold' >Ai-Image</div>
 
  <form className=' w-full'>
    <div className="user-box ">
        <div className=' text-green-500 font-bold pb-5 ' >Generate Ai Image: </div>
        <textarea  className='w-full border-2 rounded-xl  bg-black focus:outline-none border-green-500 text-white resize-none p-3  text-[17px]' value={text} onChange={(e)=>settext(e.target.value)} ></textarea>
        <Link className='w-full text-center py-3' onClick={handleSummary} href="">
          Start
       <span></span>
    </Link>
    </div>
    <div className="user-box">
        {image?(<><div className='w-full font-bold   text-green-500 pb-3' > image :</div>
        <img src={image} className='w-full rounded-xl p-5  h-[300px] border-2 bg-black text-[17px] focus:outline-none border-green-500 text-white' alt='img' ></img></> ):("")}
 
      

    </div><center>

    <Link to="/" className=' text-white cursor-pointer' >GoBack</Link>
    
    </center>
  </form>
</div>

 </>

  )
}
