import React, { useState } from 'react'
import "./css/Login.css"
import { Link, useNavigate } from 'react-router-dom'
import validator from 'validator'
import axios from 'axios'
import toast from 'react-hot-toast';
import Loader from "../components/Loader/Loader"


export default function Login() {
   const [load,setload]=useState(false)
  const[email,setEmail]=useState("")
  const[Password,setPassword]=useState("")
    


  const navigate=useNavigate()
  const handleLogin=async(e)=>{
    e.preventDefault();
    try {setload(true)
      if(!validator.isEmail(email)){alert("email is invalid ")}
  await axios.post("/api/v1/auth/login",{email:email,password:Password}).then((a)=>{

    setload(false)
     if(a.data.message==="invalid User") return  toast.error("Not Registerd")
     if(a.data.message==="password not matched") return  toast.error("Wrong Password")
      if(a.data.token){
        localStorage.setItem("token",true)
        // const local= localStorage.getItem("token")
        // console.log(local)
        navigate("/")
        if(a.data.status===true) { toast.success(a.data.message)}} })
     
    } catch (error) {
      console.log(error.message)
    }
    
  }


  return (
 
    <div className="flex flex-col justify-center items-center login-box">
       {load?<div className='absolute'> <Loader/> </div>:("")}
    <div className='text-2xl pb-10 text-white' >Login</div>
  <form>
 
    <div className="user-box">
      <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" />
      <label>Email</label>
    </div>
    <div className="user-box">
      <input value={Password} onChange={(e)=>setPassword(e.target.value)}  type="password" name="" required=""/>
      <label>Password</label>
    </div><center>
    <Link onClick={handleLogin} href="">
          Login
       <span></span>
    </Link>
    <Link to="/register" className=' text-white cursor-pointer' >Don't Have Account? Register</Link>
    
    </center>
  </form>
</div>


  )
}
