import React from 'react'
import "./Paymentpage.css"
import undraw from "../../assets/undraw.svg"
const Paymentpage = () => {
  return (
   <div className="paycontainer">
     <div className="paywrapper">
      <div className="leftpart">
        <div className="leftparttextwrapper">
          <div className="lefttextwrap">
            <div className="lefttext">
            <p>Payment <span>Terms</span></p>
           </div>

           <div className="lefttextpwrapper">
              <h2>1000/per year for the subscribtion of the app
                 to explore the functionalities and the aim of the app.
              </h2>
           </div>
            {/* <div className='playbuttoncontainer'></div> */}
             <div className="paybutton">
              <button>Pay Here</button>
            </div>  
           </div>
        </div>
      </div>
      <div className="rightpart">
        <div className="rightpartwrapper">
          <div className="imagepart">
            <img src={undraw} alt="" />
          </div>
        </div>
      </div>
     </div>
   </div>
  )
}

export default Paymentpage