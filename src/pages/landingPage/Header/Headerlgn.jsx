import "./Headerlgn.css";
import { useNavigate } from "react-router-dom";
const Headerlgn = () => {

  const Nav = useNavigate()

  const handlehome =()=>{
    Nav("/")
  }
  return (
    <div className="Header">
      <div className="Headerwrap1">
        <div className="staflogodiv">
          <h3 onClick={handlehome} className="staflogodiv">
            StaffTrack<span>360</span>
          </h3>
        </div>
      </div>
    </div>
  );
};
export default Headerlgn;
