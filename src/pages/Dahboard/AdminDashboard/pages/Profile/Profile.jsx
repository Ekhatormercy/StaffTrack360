import React from 'react'
import "./Profile.css"
import { FaCircleUser } from "react-icons/fa6";

const Profile = () => {
  const userInfo= JSON.parse(localStorage.getItem("loginUserInfo"))
  return (
    <div className='Profile'>
      <div className='ProfilePics'>
        <FaCircleUser size={130}/>
        <button>Upload Profile Image</button>
      </div>
      <div className='ProfileDetails'>
        <div className='ProfileDetails1'>
          <p>Name</p>
          <p>{userInfo.firstName} {userInfo.lastName}</p>
        </div>
        <div className='ProfileDetails1'>
        <p>Email</p>
          <p>{userInfo.businessEmail}</p>
        </div>
        <div className='ProfileDetails1'>
        <p>Phone</p>
          <p>{userInfo.phoneNumber}</p>
        </div>
        <div className='ProfileDetails1'>
        <p>Department</p>
          <p>{userInfo.businessName}</p>
        </div>
        <div className='ProfileDetails1'>
        <p>Role</p>
          <p>{userInfo.role}</p>
        </div>
      </div>
    </div>
  )
}

export default Profile