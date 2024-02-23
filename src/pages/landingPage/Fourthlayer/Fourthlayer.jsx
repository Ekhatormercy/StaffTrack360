import letsgrow from "../../../assets/letsgrow.webp"
import { IoIosArrowForward } from "react-icons/io";
import "./Fourthlayer.css";
const Fourthlayer = () => {
  return (
    <div className="LetsGrow2geda">
      <div className="letsgrowwrap">
        <div className="LetsGrowtextdiv">
          <h1>Let's Grow Together</h1>
        </div>
        <p>Explore Our Platform with 15 days free Trail.</p>
        <p>
          Manage Your Employees Performance and Give feedback to enhance Your
          company Productivity.
        </p>
        <button className="newtrialbtn1">Start Free Trial <IoIosArrowForward /></button>
        
        <div className="letsgrowimg">
            <img src={letsgrow} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Fourthlayer;
