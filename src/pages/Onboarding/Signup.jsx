import { useState } from "react"
import Headerlgn from "../landingPage/Header/Headerlgn"
import "./Signup.css"
import { useNavigate } from "react-router-dom"
import axios from "axios"

// import { AppContext } from "../context/AppContext"

import BusinessEmail from "./BusinessEmail"
import AppContext from "../context/AppContext"
import { useContext } from "react"
import { MyContext } from "../context/AppContext"



const Signup =()=>{

    const {adminData, setAdminData} = useContext(MyContext)
    const{
      businessName,
      businessEmail,
      firstName,
      lastName,
      password,
      phoneNumber,
  
  }=adminData
    const Nav = useNavigate()
    const handleChange = (e)=>{
      setAdminData({...adminData, [e.target.name] : e.target.value})
    }
    
    const url = `https://staftrack360.onrender.com/api/v1/signup`

    const handlepasschange =async(e)=>{
      e.preventDefault();
      
      await axios.post(url, adminData)
     .then((response)=>{
       console.log(response.data)
       Nav("/dashboard")
     })
     .catch((error)=>{
       console.log(error)
     })
        
    }
    const handlelogin =()=>{
        Nav("/dashboard")
    }
    return(
        <>
        <Headerlgn/>
        <div className="Signupbox">
            <div className="signupwrap">
              <div className="inputwrapSignup">
                <input type="text" placeholder="First Name" name="firstName" value={firstName} onChange={handleChange}/>
                <input type="text" placeholder="Last Name"  name="lastName" value={lastName} onChange={handleChange}/>
                <input type="text" placeholder="Business Name"  name="businessName" value={businessName} onChange={handleChange}/>
                <input type="email" placeholder="Business Email"  name="businessEmail" value={businessEmail} onChange={handleChange}/>
                <input type="text" placeholder="Phone Number"  name="phoneNumber" value={phoneNumber} onChange={handleChange}/>
                <input type="password" placeholder="Password"  name="password" value={password} onChange={handleChange}/>
                <button onClick={handlepasschange} className="signuppbtn">SIGN UP</button>
              
              </div>
              <div className="sgnin">
                <p>Already have an account? <span onClick={handlelogin}>Sign in</span></p>
              </div>
            </div>
        </div>
        </>
    )
}
export default Signup