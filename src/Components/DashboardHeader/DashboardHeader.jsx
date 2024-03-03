import React from 'react'
import "./DashboardHeader.css"
import logogrn from "./images/LogoWhite.png"
import { IoMenu } from "react-icons/io5";
import { loginUserInfo } from '../../Redux/State';

const DashboardHeader = () => {
  const userInfo= JSON.parse(localStorage.getItem("loginUserInfo"))
  
  return (
    <div className='DashboardHeader'>
      <img className='dashboardHeaderLogo' src={logogrn} alt="Logo" />
        <div className='menu'><IoMenu color='#00756A' size={30}/></div>
      <h4 className='dashboardHeaderText'>{userInfo.businessName}</h4>
      <div className='userProfile'>
        <div className='Initials'>ET</div>
        <div className='ProfileDetail'>
             <h5>{`${userInfo.firstName} ${userInfo.lastName}`} </h5>
             <h6>{userInfo.role}</h6>
        </div>
      </div>
    </div>
  )
}

export default DashboardHeader
