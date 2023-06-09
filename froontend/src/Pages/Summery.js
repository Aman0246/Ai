import React, { useState } from 'react'
import "./css/Login.css"
import { Link } from 'react-router-dom'
import TextareaAutosize from 'react-textarea-autosize';
import axios from 'axios'
import toast from 'react-hot-toast';

export default function Summery() {
  
  const[text,settext]=useState(" ")
  const[summery,setsummery]=useState("")




  const handleSummary=async(e)=>{
e.preventDefault();
try {
      toast.success("wait for few secound")
     let a= await axios.post("/api/openai/summary",{text})
     setsummery(a.data)
       
    } catch (error) {
      console.log(error.message)
    }
    
  }

  return (
 <>
 {summery?("" ):(<div className='p-5 font-bold  '>"AI Summarizer is a revolutionary tool that leverages advanced AI algorithms to analyze and summarize articles and URLs. It quickly extracts key insights, saving you time and effort in digesting lengthy content. Stay informed, make informed decisions, and unlock the power of efficient information extraction with AI Summarizer."</div>)

 }

    <div className="flex flex-col mt-[15rem] w-[50%]  items-center login-box">

        <div className=' text-green-500 text-2xl pb-5 font-bold' >Summerizer</div>
 
  <form className=' w-full'>
    <div className="user-box ">
        <div className=' text-green-500 font-bold pb-5 ' >Article/Url: </div>
        <textarea  className='w-full border-2 rounded-xl h-[300px] bg-black focus:outline-none border-green-500 text-white resize-none p-3  text-[17px]' value={text} onChange={(e)=>settext(e.target.value)} ></textarea>
        <Link className='w-full text-center py-3' onClick={handleSummary} href="">
          Start
       <span></span>
    </Link>
    </div>
    <div className="user-box">
        {summery?(<><div className='w-full font-bold   text-green-500 pb-3' > Summery :</div>
        <textarea value={summery} className='w-full rounded-xl p-5  h-[300px] border-2 bg-black text-[17px] focus:outline-none border-green-500 text-white' ></textarea></> ):("")}
 
       

    </div><center>

    <Link to="/" className=' text-white cursor-pointer' >GoBack</Link>
    
    </center>
  </form>
</div>

 </>

  )
}

