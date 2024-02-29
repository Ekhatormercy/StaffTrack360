import { useNavigate } from "react-router-dom";
const Dropdown = () => {
  const Nav = useNavigate()
  const handlelogin =()=>{
    Nav("/login")
}
  const handlesignup =()=>{
    Nav("")
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
            <button  className="dropsign">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
