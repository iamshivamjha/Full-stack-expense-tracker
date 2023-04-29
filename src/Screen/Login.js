import React from 'react'
import { useState } from 'react';
import {Link ,useNavigate} from "react-router-dom"

export const Login = () => {
    const [credentials, setcredentials] = useState({ email: "", password: "" });


const navigate=useNavigate();







  const handleSubmit = async (e) => {
    e.preventDefault();//sinthetic event hota h
    // const {name,email,password,location} = user
    console.log(JSON.stringify(
      {
        
        email: credentials.email,
        password: credentials.password,
        
      }))
    // const {name,password,email,location}=credentials;

    const response = await fetch("/loginuser", {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(
        {
           email: credentials.email,
          password: credentials.password
        }
      )


    });
    const data = await response.json()
    if (!data.success) {
      window.alert("invalid enteries")
      console.log("invalid entry")
    }
    if(data.success){
      alert("successfully register");
      localStorage.setItem("authToken",data.authToken);
      console.log(localStorage.getItem("authToken"));
      navigate('/login')      
      console.log("succefully register");
    }



  }
  const onchange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value })

}
  return (
    <form method='POST' onSubmit={handleSubmit} >
    <div class="mb-3">
      <h1>Welcome to my website<br></br><h5>Please login or register yourself</h5></h1>
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={credentials.email} onChange={onchange} required></input>
      <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label" >Password</label>
      <input type="password" class="form-control" name='password' id="exampleInputPassword1" value={credentials.password} onChange={onchange} required></input>
    </div>
    <div className='new'>
    <button type="submit" class="btn btn-primary">Login</button>
    <Link to="/signup" className='btn btn-danger' >Register</Link>
    </div>
    
    <blockquote className='bq'>“A successful website does three things:
          <br></br>
          It attracts the right kinds of visitors.
          <br></br>      
          Guides them to the main services or product you offer.
          <br></br>
          Collect Contact details for future ongoing relation.”</blockquote>
  </form>
  )
}
