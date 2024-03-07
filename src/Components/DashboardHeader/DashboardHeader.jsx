import React from 'react'
import "./DashboardHeader.css"
import logogrn from "./images/LogoWhite.png"
import { IoMenu } from "react-icons/io5";
import { loginUserInfo } from '../../Redux/State';
import { HiMenu } from "react-icons/hi";
import { RiArrowDownSLine } from "react-icons/ri";
import { GiCancel } from 'react-icons/gi';
import { useState } from 'react';
import Dropdowndash from './Droopdowndash';

const DashboardHeader = () => {
  const userInfo = JSON.parse(localStorage.getItem("loginUserInfo"))
  const [show, setShow] = useState(false)

  return (
    <>

    <div className='DashboardHeader'>
      {/* { show ?  
  <div className='dropDown'></div>  */}

     <img className='dashboardHeaderLogo' src={logogrn} alt="Logo" />
      <div className='burger1' onClick={() => setShow(!show)}>

        {
          show ? <GiCancel /> : <HiMenu />
        }
      </div>
      <h4 className='dashboardHeaderText'>{userInfo.businessName}</h4>
      <div className='userProfile'>
        <div className='Initials'>ET</div>
        <div className='ProfileDetail'>
          <h5>{`${userInfo.firstName} ${userInfo.lastName}`} </h5>
          <h6>{userInfo.role}</h6>
        </div>
      </div>
{
  show && <div className='dropDown'>
    
     <Dropdowndash/>

  </div> 
}
    </div>
   
 
    </>
  )
}

export default DashboardHeader
