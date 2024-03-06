import "./Seclayer.css"
import { OurServicesData } from "../../../Components/Data"


const Secondlayer = ()=>{
    
    return(
        <div  className="Seclayerdiv">
            <div className="secwrap">
                <div className="Ourserviceh1textdiv">
                    <h1>Our Services</h1>
                </div>
                <div className="perfRating">
                 {
                    OurServicesData?.map((e)=>(
                        <div className="perfratecard">
                        <div className="perfratecardrwap">
                          <div className="perfratingimgdiv">
                             <img src={e.image} alt="" />
                         </div>
                   <div className="rateh1p">
                     <h1>{e.h1text}</h1>
                     <p>{e.p}</p></div>
                  
                   </div>
                     </div>
                    ))
                 }
                </div>
            </div>

        </div>
    )
}
    
export default Secondlayer