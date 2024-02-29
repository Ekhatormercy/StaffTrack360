import React from 'react'
import "./Choose.css"
const Choose = () => {
  return (
    <div className="choosecontainer">
    <div className="choosewrapper"></div>

    <div className="choosebox">
        <div className="chooseerrortext">
            <h1>Are you sure</h1>
        </div>
        <div className="choosebutton">
          <div className="yesbutton">
            <h2>YES</h2>
          </div>
          <div className="nobutton">
            <h2>NO</h2>
          </div>
        </div>
    </div>

   </div>
  )
}

export default Choose