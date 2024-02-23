import React from 'react'
import "./EmployeeProfile.css"
import { CgProfile } from "react-icons/cg";


const EmployeeProfile = () => {
  return (
    <div className='EmployeeProfile'>
      <div className='UserProfileContainer'>
        <div className='profilepicEmpl'>
          <CgProfile size={120}/>
        </div>
        <div className='ProfileDetailsEmpl'>
              <div className='idividualItemProfile'>
                <p>Name :</p>
                <p>Mercy Itohan</p>
              </div>
              <div className='idividualItemProfile'>
                <p>Role :</p>
                <p>Backend Software Developer</p>
              </div>
              <div className='idividualItemProfile'>
                <p>Department :</p>
                <p> IT & Software</p>
              </div>
        </div>
      </div>
      <div className='PerformanceTitle'>
        PERFORMANCE RATING
      </div>
      <div className='PerformanceRatingsEmployee'></div>
    </div>
  )
}

export default EmployeeProfile
