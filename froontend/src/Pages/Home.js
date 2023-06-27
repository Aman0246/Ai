import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Home.css"
import "./extra.css"
import { Link } from 'react-router-dom'

export default function Home() {
  const loggedIn=JSON.parse(localStorage.getItem("token"))

  const navigate=useNavigate()
  const hancleclickOne=(e)=>{
    e.preventDefault()
       navigate("/summery")
  }


  return (
    <>
     {loggedIn?(<div className='a'>
    <div className="grid  gap-4 grid-cols-3 grid-rows-2">
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
    
    
  </div> </div>):(<Link to="/login" className="bg flex justify-center items-center text-white">
<h1 className='flex flex-col justify-center items-center text-9xl' >
<div aria-label="Orange and tan hamster running in a metal wheel" role="img" className="wheel-and-hamster">
	<div className="wheel"></div>
	<div className="hamster">
		<div className="hamster__body">
			<div className="hamster__head">
				<div className="hamster__ear"></div>
				<div className="hamster__eye"></div>
				<div className="hamster__nose"></div>
			</div>
			<div className="hamster__limb hamster__limb--fr"></div>
			<div className="hamster__limb hamster__limb--fl"></div>
			<div className="hamster__limb hamster__limb--br"></div>
			<div className="hamster__limb hamster__limb--bl"></div>
			<div className="hamster__tail"></div>
		</div>
	</div>
	<div className="spoke"></div>
</div>
  </h1>
  </Link>)}
    
  </>
  )
}
