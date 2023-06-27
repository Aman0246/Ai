import axios from 'axios'
import React from 'react'
import { toast } from 'react-hot-toast'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function Navbars() {
  const navigate=useNavigate()
  const loggedIn=JSON.parse(localStorage.getItem("token"))
  const handleLogout=async()=>{
    await axios.get("/api/v1/auth/logout")
    localStorage.removeItem("token")
    toast.success("LogOut succesfully")
     navigate("/login") 

  }

  return (

    <div className='border-b-4 bg-gray-100 mt-3  border-gray-300 w-full flex flex-wrap items-center justify-evenly '>
    <img  src="https://ih1.redbubble.net/image.4645193321.0183/st,small,507x507-pad,600x600,f8f8f8.jpg" className='w-[5rem]' alt="" srcSet="" />
    <h1 className='text-5xl font-bold p-4 bg-gradient-to-r from-black via-green-500 to-black inline-block text-transparent bg-clip-text'>Open Ai Clone</h1>
    <div className='flex gap-5'>
    {loggedIn?( <Link to='/login' onClick={handleLogout} className='border rounded-xl text-green-500   bg-black p-3'>LogOut</Link>):(<Link to='/register'className='border rounded-xl text-green-500  bg-black p-3'>SignUp</Link>)}
    </div>
   </div>
  )
}
