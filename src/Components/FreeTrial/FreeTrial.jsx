import React from 'react'
import "./FreeTrial.css"
import { useNavigate } from 'react-router-dom'
const FreeTrial = () => {
  const Nav = useNavigate()

  const handleroutechange = () =>{
      Nav("/successpage")
  }
  return (
    <div className="maincontainer">
     <div className="mainwrapper">
        <div className="upperpartwrapper">
            <div className="upperparttext">
            <h1>Start your StaffTrack Experience</h1>
            </div>
        </div>

        <div className="middlepartwrapper">
            <div className="middlepart">
                <div className="middleparttext">
                    <h2>Get a free trial and set up StaffTrack in less than 5 minuites</h2>
                </div>
                <div className="ptagwrapper">
                  <div className="ptag">
                  <input type="text" placeholder="Your Company Business Email" />
                  </div>
                </div>

                <div className="Freetrial">
                    <div className="Button">
                        <button onClick={handleroutechange}>Start Trial Now</button>
                    </div>
                </div>
            </div>
        </div>
     </div>
    </div>
  )
}

export default FreeTrial