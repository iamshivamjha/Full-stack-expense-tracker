import React from 'react'
import { useState } from 'react';
import "./Signup.css"
import img from '../Screenshot.png'
import { Link ,useNavigate} from 'react-router-dom';

export const Signup = () => {
  const [credentials, setcredentials] = useState({ name: "", email: "", password: "", location: "" });//geolocation for hit through api thats why
 

 const navigate=useNavigate();
 
 
 
 
 
 
 
     const handleSubmit = async(e) => {
         e.preventDefault();//sinthetic event hota h
         // const {name,email,password,location} = user
         console.log(JSON.stringify(
             {
                 name: credentials.name,
                  email: credentials.email,
                  password: credentials.password,
                   location: credentials.location
             }))
             // const {name,password,email,location}=credentials;
 
         const response =  await fetch("/createuser", {
             method: 'POST',
             headers: {
                 'Content-type': 'application/json',
                 
             },
             body: JSON.stringify(
                 {
                     name: credentials.name, email: credentials.email,
                     password: credentials.password, location: credentials.location
                 }
             )
 
 
         });
         const data = await response.json()
         if(!data.success ){
             window.alert("invalid enteries")
             console.log("invalid entry")
         }
         else{
             alert("successfully register")
             navigate('/')
             console.log("succefully register")
         }
         
 
 
     }
     // alert(
     //     "name="+credentials.name
     // )
     
 
     const onchange = (e) => {
         setcredentials({ ...credentials, [e.target.name]: e.target.value })
 
     }
 
  return (
    <>
        
    
        
            <section id="signup">
            <div className='final'>
            <div className='first'>
            
            <img src={img} id='hj'></img>
            <h3>You want to use this?</h3>
            <div id='font'>
            <h3 id>Then Create Your Account here</h3></div>
            </div>
            <div id='contbig'>
                <div className='container'>
                <h3 id="t">Signup</h3>
                    <form  method='POST' onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label form-lable1">Name</label>
                            <input type="text" className="form-control" name='name' value={credentials.name} onChange={onchange} required></input>
    
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" name='email' value={credentials.email} onChange={onchange} required></input>
                            {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" name='password' value={credentials.password} id="exampleInputPassword1" onChange={onchange} required></input>
                        </div>
    
                        <div className="mb-1">
                            <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
                            <input type="text" className="form-control" name='location' value={credentials.location}  onChange={onchange} required></input>
                        </div>
    
                        <button type="submit" className=" btn btn-success" >Submit</button>
                        <Link to="/" className=' btn btn-danger' >Already a user</Link>
                    </form>
    
                </div>
                </div>
                </div>
                </section>
    </>
  )
}
