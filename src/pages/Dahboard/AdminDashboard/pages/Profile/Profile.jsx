import React from 'react'
import "./Profile.css"
import { FaCircleUser } from "react-icons/fa6";

const Profile = () => {
  return (
    <div className='Profile'>
      <div className='ProfilePics'>
        <FaCircleUser size={130}/>
        <button>Upload Profile Image</button>
      </div>
      <div className='ProfileDetails'>
        <div className='ProfileDetails1'>
          <p>Name</p>
          <p>Favour Chukwu</p>
        </div>
        <div className='ProfileDetails1'>
        <p>Email</p>
          <p>Favourchukwu@businessmail.com</p>
        </div>
        <div className='ProfileDetails1'>
        <p>Phone</p>
          <p>07099542445</p>
        </div>
        <div className='ProfileDetails1'>
        <p>Department</p>
          <p>Finance</p>
        </div>
        <div className='ProfileDetails1'>
        <p>Role</p>
          <p>Cashier</p>
        </div>
      </div>
    </div>
  )
}

export default Profile
