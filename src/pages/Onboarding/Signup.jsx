import Headerlgn from "../landingPage/Header/Headerlgn"
import "./Signup.css"
import { useNavigate } from "react-router-dom"
const Signup =()=>{
    const Nav = useNavigate()
    
    const handlepasschange =()=>{
        Nav("/dashboard")
    }
    const handlelogin =()=>{
        Nav("/login")
    }
    return(
        <>
        <Headerlgn/>
        <div className="Signupbox">
            <div className="signupwrap">
              <div className="inputwrapSignup">
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
                <input type="text" placeholder="Business Name" />
                <input type="text" placeholder="Phone Number" />
                <input type="text" placeholder="Password" />
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