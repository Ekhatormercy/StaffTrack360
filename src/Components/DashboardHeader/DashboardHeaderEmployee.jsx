import React from 'react'
import "./DashboardHeader.css"
import logogrn from "./images/LogoWhite.png"
import { IoMenu } from "react-icons/io5";
import { loginUserInfo } from '../../Redux/State';

const DashboardHeaderEMployee = () => {
  const userInfo2= JSON.parse(localStorage.getItem("loginUserInfo2"))
  
  return (
    <div className='DashboardHeader'>
      <img className='dashboardHeaderLogo' src={logogrn} alt="Logo" />
        <div className='menu'><IoMenu color='#00756A' size={30}/></div>
      <h4 className='dashboardHeaderText'>Welcome...</h4>
      <div className='userProfile'>
        <div className='Initials'>ET</div>
        <div className='ProfileDetail'>
             <h5>{`${userInfo2[0].fullName}`} </h5>
             <h6>{userInfo2[0].role}</h6>
        </div>
      </div>
    </div>
  )
}

export default DashboardHeaderEMployee
