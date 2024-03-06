import Secondlayer from "./secondlayer/Secondlayer"
import Fourthlayer from "./Fourthlayer/Fourthlayer"
import Heropage from "./Heropage"
import Thirdlayer from "./thirdlayer/Thirdlayer"
import Header from "./Header/Header"
import Dropdown from "./Header/Dropdown"
import { useState, useRef } from "react"
import Footer from "../../Components/Footer/Footer"
import './LandingPage.css'

// const footerRef = useRef(null)

const Landingpage =()=>{
    const [show, setShow] = useState(false)
    return(
         <div className="LandingpageContainer">
            <Header show={show} setShow={setShow}/>
      {
   show === true? <Dropdown/> :null
       }
         <Heropage/>
        <section id="seclayer">
        <Secondlayer/>
        </section>
        
         <Thirdlayer/>
         <Fourthlayer/>
         <Footer/>
     
         
         </div>
    )
}
export default Landingpage