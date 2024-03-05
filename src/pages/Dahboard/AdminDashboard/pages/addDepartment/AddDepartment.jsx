import React, { useState } from 'react'
import "./AddDepartment.css"
import axios from 'axios'

const AddDepartment = () => {
  const userInfo = JSON.parse(localStorage.getItem("loginUserInfo"))

  const [departmentName, setDepartmentName]=useState()
  const [departmentHead, setDepartmentHead]=useState()

  const departmentInputDetails={
    department:departmentName,
    departmentHead:departmentHead
  }
  const userToken=(userInfo.token)
  async function handleAddDepartment(){
    try {
      const res = await axios.post(
        `https://staftrack360.onrender.com/api/v1/addDepar/${userInfo._id}`, departmentInputDetails,
        {
          headers: {
            Authorization: `Bearer ${userToken}`
          }
        }
      );
      console.log(res)
    } catch (err){
      console.log("error from API", err)
    }
  }
  

  return (
    <div className='addDepartment'>
        <div className='addDptHeader'><p>ADD DEPARTMENT</p></div>
        <div className='addDptSec1'>
          <input type="text" placeholder='NAME OF DEPARTMENT' onChange={(e)=>setDepartmentName(e.target.value)}/>
          <input type="text"  placeholder='DEPARTMENT HEAD' onChange={(e)=>setDepartmentHead(e.target.value)}/>
          <button onClick={handleAddDepartment}>ADD DEPARTMENT</button>
        </div>
        <div className='addDptSec2'>
            <div className='listOfDept'>
              <p>DEPARTMENTS</p>
              <p> HEAD OF DEPARTMENTS</p>
            </div>
            <div className='listOfDeptMain'>
              <p>Account</p>
              <p>Ujah Collins</p>
            </div>
           
           
            <div className='listOfDeptBtn'><button>View all</button></div>
        </div>
    </div>
  )
}

export default AddDepartment
