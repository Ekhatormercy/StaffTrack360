import { useNavigate } from "react-router-dom";
import Signup from "../../Onboarding/Signup";
import { useEffect, useRef, useState } from "react"
import {Link as ScrollLink} from "react-scroll"
const Dropdown = () => {
  const Nav = useNavigate()
  const handleloginasbusiness =()=>{
    Nav("/loginasBusiness")
}
  const handleloginasemployee =()=>{
    Nav("/loginasEmployee")
}
  const handlesignup =()=>{
    Nav("/signup")
}
  return (
    <div className="Dropdown">
      <div className="sidehold">
        <div className="Sideholdtextdiv">
          <div className="border">Home</div>
          <ScrollLink
              to="seclayer"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500} >  
          <div className="border" >Service</div>
          </ScrollLink>
          <div className="border">About Us</div>
        </div>
        <div className="BUTTONDIV">
            <button onClick={handleloginasbusiness} className="droplogin">Login as Business</button>
            <button onClick={handleloginasemployee} className="droplogin">Login as Employee</button>
            <button onClick={handlesignup}  className="dropsign">SIGN UP</button>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
