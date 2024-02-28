
import Reviewcard from "../../Reviewcard"
import koralogo from "../../../assets/koralogo.jpg"
import flutterlogo from "../../../assets/flutterlogo.png"
import "./Thirdlayer.css"
const Thirdlayer =()=>{
    return(
     <div className="ThirdlayerDiv">
        <div className="thirdlayerwrap">
          <div className="thirdlayerh1">
          <h1>Customer Reviews</h1>
          </div>
          <div className="ReviewCards">
          
            <Reviewcard text="Kora, Nigeria." ptext="“ It has been an absolute pleasure
working with staftrac360 team. 
Thanks for the brilliant facilitation 
of Employee performance ratings. It's a fantastic tool for aligning individual objectives with organizational success. Gone are the days of cumbersome performance reviews. ”" image={koralogo}/>
<Reviewcard text="FlutterWave, Nigeria." ptext="“StaffTrack360 has brought efficiency and clarity to our evaluation processes. The easy-to-use interface, customizable templates, and real-time feedback options have streamlined the entire performance review cycle, making it a breeze for both managers and employees.”" image={flutterlogo}/>
<Reviewcard ptext="“StaffTrack360 has made  a significant impact on our organization. rom onboarding to daily use, employees 
find the platform easy to navigate, ensuring maximum engagement. It's a powerful solution that prioritizes usability without compromising on advanced performance management features.”" text="Korra, Nigeria."  image={flutterlogo}/>

          </div>
        </div>
     </div>
    )
}
export default Thirdlayer