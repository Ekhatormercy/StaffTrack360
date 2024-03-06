import React, { useState } from 'react'
import "./AddDepartment.css"
import axios from 'axios'
import { css } from '@emotion/react';
import { HashLoader } from 'react-spinners';



const AddDepartment = () => {
  const userInfo = JSON.parse(localStorage.getItem("loginUserInfo"))
  const allStaffDataMain = JSON.parse(localStorage.getItem("allStaffData"))

  const [loading, setLoading] = useState(false)
const [departmentName, setDepartmentName]=useState()
  const [departmentHead, setDepartmentHead]=useState()
  const [addDeptBtn, setAddDeptBtn] = useState(false)

  

  

  console.log(allStaffDataMain[0].department)

  const userToken=userInfo.token

  const departmentInputDetails={
    department:departmentName,
    departmentHead:departmentHead
  }
const handleAddDeptAdd =()=>{
  
  setAddDeptBtn(true)
}
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
      setLoading(false);
      setAddDeptBtn(false)
    } catch (err){
      console.log("error from API", err)
      setLoading(false);
    }
  }
  

  return (
    <>
    {
      addDeptBtn? <>
      <div className='addDepartment'>
        <>
        <div className='addDptHeader'><p>ADD DEPARTMENT</p></div>
        <div className='addDptSec1'>
          <input type="text" placeholder='NAME OF DEPARTMENT' onChange={(e)=>setDepartmentName(e.target.value)}/>
          <input type="text"  placeholder='DEPARTMENT HEAD' onChange={(e)=>setDepartmentHead(e.target.value)}/>
          {/* <button onClick={handleAddDepartment}>ADD DEPARTMENT</button> */}
          <button
  onClick={handleAddDepartment}
  disabled={loading}
  style={{
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}
>
  {addDeptBtn && (
    <HashLoader
      css={css`
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      `}
      color="#ffffff"
      loading={loading}
      size={30}
    />
  )}
  {addDeptBtn ? 'ADD DEPARTMENT' : null}
</button>

        </div>
        </>
    </div>
      
      </>:<>
      <div className='addDepartment'>
        <>
        <div className='addDptHeader'><p>DEPARTMENTS</p><button onClick={handleAddDeptAdd}>Add New Department</button></div>
      
        <div className='addDptSec2'>
            <div className='listOfDept'>
              <p>DEPARTMENTS</p>
              <p> HEAD OF DEPARTMENTS</p>
            </div>
            <div className='listOfDeptMain'>
              
          {allStaffDataMain?.map((user)=>(
            <>
            <div className='listOfDeptMainList'>

            <p>{user.department}</p>
            <p>{user.departmentHead}</p>
            </div>
            
            </>
            
          )
          
          )}
              </div>
              
            
        </div>
        </>
    </div>
      </>
    }
    </>
    
  )
}

export default AddDepartment
