import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbars() {

  return (

    <div className='border-b-4 bg-gray-100 mt-3  border-gray-300 w-full flex items-center justify-evenly '>
        <img  src="https://ih1.redbubble.net/image.4645193321.0183/st,small,507x507-pad,600x600,f8f8f8.jpg" className='w-[5rem]' alt="" srcSet="" />
    <h1 className='text-5xl font-bold p-4 bg-gradient-to-r from-black via-green-500 to-black inline-block text-transparent bg-clip-text'>Open Ai Clone</h1>
    <div className='flex gap-5'>
    <Link to='/login'className='border rounded-xl text-green-500  bg-black p-3'>Login</Link>
    <Link to='/register' className='border rounded-xl text-green-500   bg-black p-3'>SinUp</Link>

    </div>

</div>
  )
}
