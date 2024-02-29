import React from 'react'
import "./Verifyerror.css"
const Verifyerror = () => {
  return (
      <div className="errorcontainer">
        <div className="errorwrapper"></div>

        <div className="errorbox">
            <div className="errortext1">
                <h1>OOPS!!!</h1>
            </div>
            <div className="errortext2">
                <h1>Email Verification Failed</h1>
            </div>
        </div>
      </div>
  )
}

export default Verifyerror