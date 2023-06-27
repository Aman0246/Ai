import React, { useState } from 'react'
import "./css/Login.css"
import { Link } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast';
import Loader from '../components/Loader/Loader';

export default function Paramaker() {
  const [load,setload]=useState(false)
  const[text,settext]=useState(" ")
  const[para,setpara]=useState("")




  const handleSummary=async(e)=>{
    e.preventDefault();
    try {setload(true)
        toast.success("wait for few secound")
 await axios.post("/api/openai/paraMaker",{text}).then((a)=>{
  setload(false)

     setpara(a.data)     })
       
    } catch (error) {
      console.log(error.message)
    }
    
  }

  return (
 <>
 {para?("" ):(<div className='p-5 font-bold  '>With the Paragraph Generator app, you can easily craft well-structured paragraphs in seconds. Enjoy a user-friendly interface, customizable templates, and seamless integration with your favorite writing tools. Boost your writing efficiency today!</div>)

 }
   {load?<div className='absolute'> <Loader/> </div>:("")}
    <div className="flex flex-col mt-[15rem] w-[50%]  items-center login-box">

        <div className=' text-green-500 text-2xl pb-5 font-bold' >Paragraph Generator</div>
 
  <form className=' w-full'>
    <div className="user-box ">
        <div className=' text-green-500 font-bold pb-5 ' >Title: </div>
        <textarea  className='w-full border-2 rounded-xl bg-black focus:outline-none border-green-500 text-white resize-none p-2 text-[17px]' value={text} onChange={(e)=>settext(e.target.value)} ></textarea>
        <Link className='w-full text-center py-3' onClick={handleSummary} href="">
          Start
       <span></span>
    </Link>
    </div>
    <div className="user-box">
        {para?(<><div className='w-full font-bold   text-green-500 pb-3' > Paragraph :</div>
        <textarea value={para} className='w-full rounded-xl p-2 h-[300px] border-2 bg-black text-[17px] focus:outline-none border-green-500 text-white' ></textarea></> ):("")}
 
       

    </div><center>

    <Link to="/" className=' text-white cursor-pointer' >GoBack</Link>
    
    </center>
  </form>
</div>

 </>

  )
}

