// import Button from "../../Components/buttons/Button"
import heroimg from "../../assets/heroimg.webp"
import { useNavigate } from "react-router"
import "./Heropage.css"


const Heropage =()=>{
  const Nav = useNavigate()

  const handletrialpage =()=>{
   Nav("/trialpage")
  }
    return(
      <div className="heropage">
        <div className="herowrap">
          <div className="heroleft">
            <h1>Performance Management: <br />
            Bridging the Gap Between <br />Goals and Achievements.</h1>
            <p>Innovate, Motivate, Excel: Managing Performance <br />
          for Tomorrow's Success</p>
          <button onClick={handletrialpage} className="newtrailbtn">Start a Free Trial</button>
          </div>
          <div className="heroright">
            <img src={heroimg} alt="" />
          </div>
        </div>
        
        
      </div>
    )
}
export default Heropage