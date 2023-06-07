import React from 'react'
import "./Login.css"
import { Link } from 'react-router-dom'

export default function Login() {
  return (
 
    <form className="form">
       <p className="form-title">Sign in to your account</p>
        <div className="input-container">
          <input type="email" placeholder="Enter email"/>
          <span>
          </span>
      </div>
      <div className="input-container">
          <input type="password" placeholder="Enter password"/>
        </div>
         <Link to="/login" button type="submit" className="submit">
        Sign in
      </Link>

      <p className="signup-link">
        No account?
        <Link to="/register" href="">Sign up</Link>
      </p>
   </form>


  )
}
