import Secondlayer from "./secondlayer/Secondlayer"
import Fourthlayer from "./Fourthlayer/Fourthlayer"
import Heropage from "./Heropage"
import Thirdlayer from "./thirdlayer/Thirdlayer"
import Header from "./Header/Header"
import Dropdown from "./Header/Dropdown"
import { useState } from "react"



const Landingpage =()=>{
    const [show, setShow] = useState(false)
    return(
         <>
            <Header show={show} setShow={setShow}/>
      {
   show === true? <Dropdown/> :null
       }
         <Heropage/>
         <Secondlayer/>
        
         <Thirdlayer/>
         <Fourthlayer/>
         
         </>
    )
}
export default Landingpage