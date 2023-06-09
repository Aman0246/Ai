import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
import "./Register.css"
import toast from 'react-hot-toast';


export default function Register() {
  const[usename,setUsername]=useState("")
  const[email,setEmail]=useState("")
  const[password,setpassword]=useState("")
  
  const navigate=useNavigate()
const handleregister=async(e)=>{
  e.preventDefault();   
  try {
    let data=await axios.post("/api/v1/auth/register",{username:usename,email:email,password:password})
    console.log(data)
    if(data.status===201){(toast.success(data.data.message))
      navigate("/login")
    
    }
     alert(data.data.message)
    }catch (error) {
    console.log(error.message)
   }
    
}

  return (
    <div className=" mt-6 flex flex-col justify-center items-center login-box ">
 
    <div className='text-2xl pb-10 text-white' >Register</div>
  <form>
    <div className="user-box">
      <input value={usename} onChange={(e)=>setUsername(e.target.value)} type="text" />
      <label>Username</label>
    </div>
    <div className="user-box">
      <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" />
      <label>Email</label>
    </div>
    <div className="user-box">
      <input value={password} onChange={(e)=>setpassword((e.target.value))}type="password" />
      <label>Password</label>
    </div><center>
    <a onClick={handleregister}  href="/login">
          REgister
       <span></span>
    </a>
    <Link to="/login" className=' text-white cursor-pointer' >Have Account? Login</Link>
    
    </center>
  </form>
</div>
  )
}
