import { useState } from "react"
import Headerlgn from "../landingPage/Header/Headerlgn"
import "./Signup.css"
import { useNavigate } from "react-router-dom"
import axios from "axios"



const Signup =()=>{

    const [firstName, setFirstName]=useState('')
    const [lastName, setLastName]=useState('')
    const [businessName, setBusinessName]=useState('')
    const [businessEmail, setBusinessEmail]=useState('')
    const [phoneNumber, setPhoneNumber]= useState('')
    const [password, setPassword]=useState('')

    const Nav = useNavigate()
    const admindata = {
      firstName:firstName,
      lastName:lastName,
      businessName:businessName,
      phoneNumber:phoneNumber,
      password:password,
      businessEmail:businessEmail
    }
    const url = `https://staftrack360.onrender.com/api/v1/signup`

    const handlepasschange =async(e)=>{
      e.preventDefault();
      await axios.post(url, admindata)
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
                <input type="text" placeholder="First Name" onChange={(e)=>setFirstName(e.target.value)} />
                <input type="text" placeholder="Last Name" onChange={(e)=>setLastName(e.target.value)}/>
                <input type="text" placeholder="Business Name" onChange={(e)=>setBusinessName(e.target.value)}/>
                <input type="email" placeholder="Business Email" onChange={(e)=>setBusinessEmail(e.target.value)}/>
                <input type="text" placeholder="Phone Number" onChange={(e)=>setPhoneNumber(e.target.value)}/>
                <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
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