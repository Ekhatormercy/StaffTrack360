import { useState } from "react"
import Headerlgn from "../landingPage/Header/Headerlgn"
import "./Passwordchange.css"
import { useNavigate } from "react-router"
import axios from "axios"

const PasswordChange =()=>{
  const userInfo2 = JSON.parse(localStorage.getItem("loginUserInfo2")); 
  const [password, setPassword]= useState()
  const [confirmPassword, setConfirmPassword] = useState()

  const Nav=useNavigate()
  
  const newPasswordDetails={
    password:password,
    confirmPassword:confirmPassword
  }
  console.log(newPasswordDetails)
  const employeeID="65e4d570c6e2fbf54f1facfd"

  async function handleChangePassword (){
    try{
      const res=await axios.post(
        ` https://staftrack360.onrender.com/api/v1/resetStaff/${employeeID}`, newPasswordDetails
      );
      console.log(res)
      Nav("/loginasEmployee")
    }catch (err){
      console.log("Error from API", err);
    }
  }
 
  // console.log(loginInfo)
    return(
        <>
        <Headerlgn/>
      <div className="passwordchangebox">
        <div className="passwordwrap">
            <div className="passwordInput">
              <div className="Newpasstext">
              <p>Enter New Password to continue</p>
              </div>
                <input type="text" placeholder="New Password" onChange={(e)=>setPassword(e.target.value)} />
                <input type="text" placeholder="Confirm Password" onChange={(e)=>setConfirmPassword(e.target.value)} />
                <button className="ContinueBtn" onClick={handleChangePassword}> CONTINUE</button>
            </div>
        </div>
      </div>
      </>
    )
}
export default PasswordChange