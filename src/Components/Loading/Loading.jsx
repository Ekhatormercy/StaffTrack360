import React from 'react'
import "./Loading.css"

const Loading = () => {
  return (
   <div className="loadingcontainer">
    <div className="loadingwrapper"></div>

    <div className="loadbox">
        <div className="loaderrortext">
            <h1>Loading....</h1>
        </div>
    </div>

   </div>
  )
}

export default Loading