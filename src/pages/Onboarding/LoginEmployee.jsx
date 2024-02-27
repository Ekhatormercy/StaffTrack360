import Button from "../../Components/buttons/Button"
import Headerlgn from "../landingPage/Header/Headerlgn"
import "./Login.css"
import { useNavigate } from "react-router-dom"
const LoginEmployee =()=>{

    const Nav = useNavigate()

    const handlemail=()=>{
        Nav("/businessmail")
    }
    return(
      <>
    <Headerlgn/>  
    <div className="loginbox">
        <div className="loginwrap">
           <h1 className="bizh1">Employee Login</h1>
            <div className="inputdiv">
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Password" />
                
                <button className="LOGINBTN">LOGIN</button>
                  <div className="signherediv">
            <p>Don't have an Account? <span onClick={handlemail}>Signup</span></p>
          </div>
     </div>
         
         
          </div>
        </div>
    
    </>

    )
}
export default LoginEmployee