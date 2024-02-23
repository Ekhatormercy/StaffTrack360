import React from 'react'
import "./DashboardHeader.css"
import logogrn from "./images/LogoWhite.png"

const DashboardHeader = () => {
  return (
    <div className='DashboardHeader'>
      <img className='dashboardHeaderLogo' src={logogrn} alt="Logo" />
      <h4 className='dashboardHeaderText'>Welcome...</h4>
      <div className='userProfile'>
        <div className='Initials'>ET</div>
        <div className='ProfileDetail'>
             <h5>Elizabeth Toweh</h5>
             <h6>Super Admin</h6>
        </div>
      </div>
    </div>
  )
}

export default DashboardHeader
