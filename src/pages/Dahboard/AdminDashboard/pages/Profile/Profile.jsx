import React from 'react'
import "./Profile.css"
import { FaCircleUser } from "react-icons/fa6";
import axios from "axios"
import { useState } from 'react';

const Profile = () => {

  const userInfo= JSON.parse(localStorage.getItem("loginUserInfo"))
  const userToken=userInfo.token
  const userId=userInfo._id
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewImage(null);
    }
  };

  const handleUpload = async () => {
    try {
      if (!selectedFile) {
        alert('Please select a file to upload.');
        return;
      }

      const formData = new FormData();
      formData.append('file', selectedFile);
       
      const response = await axios.put(`https://human-resources-application.onrender.com/api/v1/upload/${userId}`, formData, {
        headers: {
          Authorization: `Bearer ${userToken}`
          
        },
      });

      console.log('File uploaded successfully:', response.data);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };
  return (
    <div className='Profile'>
      <div className='ProfilePics'>
        <input type="file" onChange={handleFileChange} />
        <img src={previewImage} alt="Preview" style={{ maxWidth: '100%', maxHeight: '200px' }} />
        
        <button onClick={handleUpload}>Upload Profile Image</button>
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
        <p>Business Name</p>
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
