import React from 'react'
import "./Profile.css"
import { FaCircleUser } from "react-icons/fa6";

const ProfileEmployee = () => {
  const userInfo2= JSON.parse(localStorage.getItem("loginUserInfo2"))
  return (
    <div className='Profile'>
      <div className='ProfilePics'>
        <FaCircleUser size={130}/>
        <button>Upload Profile Image</button>
      </div>
      <div className='ProfileDetails'>
        <div className='ProfileDetails1'>
          <p>Name</p>
          <p>{userInfo2.fullName}</p>
        </div>
        <div className='ProfileDetails1'>
        <p>Email</p>
          <p>{userInfo2.email}</p>
        </div>
        <div className='ProfileDetails1'>
        <p>Phone</p>
          <p>{userInfo2.phoneNumber}</p>
        </div>
        <div className='ProfileDetails1'>
        <p>Department</p>
          <p>{userInfo2.department}</p>
        </div>
        <div className='ProfileDetails1'>
        <p>Role</p>
          <p>{userInfo2.role}</p>
        </div>
      </div>
    </div>
  )
}

export default ProfileEmployee
