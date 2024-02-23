import Headerlgn from "../landingPage/Header/Headerlgn"
import "./BusinesEmail.css"
import { useNavigate } from "react-router-dom"
import greenlogo from "../../assets/greenlogo.png"
const BusinessEmail =()=>{

    const Nav =useNavigate()
   const handlesignup =()=>{
    Nav("/signup")
   }

    return (
        <>
        <Headerlgn/>
    <div className="Businessemailbox">
        <div className="Businessmailwrap">
            <div className="businessmainwrap">
               <div className="Bizlogodiv">
                <img src={greenlogo} alt="" />
               </div>
               <p>To experience our solution , kindly enter your 
       business email address below</p>
       <input type="text" placeholder="Enter Business Email" />
       <button onClick={handlesignup} className="Continuebtn">CONTINUE</button>
            </div>
        </div>
    </div>
    </>
    )
}
export default BusinessEmail