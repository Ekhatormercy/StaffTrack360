import { useNavigate } from "react-router-dom";
import Signup from "../../Onboarding/Signup";
const Dropdown = () => {
  const Nav = useNavigate()
  const handlelogin =()=>{
    Nav("/login")
}
  const handletrialpage =()=>{
    Nav("/trialpage")
}
  return (
    <div className="Dropdown">
      <div className="sidehold">
        <div className="Sideholdtextdiv">
          <div className="border">Home</div>
          <div className="border" >Service</div>
          <div  className="border">About Us</div>
        </div>
        <div className="BUTTONDIV">
            <button onClick={handlelogin} className="droplogin">Login</button>
            <button onClick={Signup}  className="dropsign">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
