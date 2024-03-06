import React, { useState } from 'react'
import "./AddEmployee.css"
import axios from 'axios'
import { SpinnerDotted } from "spinners-react";
import { useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';
import { HashLoader } from 'react-spinners';


const AddEmployee = () => {
const userInfo = JSON.parse(localStorage.getItem("loginUserInfo"))
const [userInfo2, setUserInfo2] = useState()
const [loading, setLoading] = useState(false);
const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [department, setDepartment] = useState('')
const [role, setRole] = useState('')

const AddEmployeeInput = {
  fullName:name,
  email:email,
  department:department,
  role:role
}

const Nav=useNavigate()
console.log(AddEmployeeInput)
// console.log(userInfo._id)
async function handleAddEmployee() {
  try {

    const res = await axios.post(
      `https://staftrack360.onrender.com/api/v1/addStaff/${userInfo._id}`,
      AddEmployeeInput,
      {
        headers: {
          Authorization: `Bearer ${userInfo.token}`
        }
      } );
      
    console.log(res.data);
    setUserInfo2(res.data);
    
    console.log(userInfo2); 
    localStorage.setItem('loginUserInfo2', JSON.stringify(userInfo2));
  } catch (err) {
    
    console.error("Error from API", err);
    setLoading(false);
    
  }
}


  return (
    <div className='AddEmployee'>
      <div className='sectionHead'>
      <p>ADD EMPLOYEE</p>
      </div>
      
      <div className='Section1'>
          <input type="text" placeholder='Name' onChange={(e)=>setName(e.target.value)}/>
          <input type="email" placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
          <input type="text" placeholder='Department' onChange={(e)=>setDepartment(e.target.value)}/>
          <input type="text" placeholder='Role' onChange={(e)=>setRole(e.target.value)}/>
          {/* <button
           onClick={handleAddEmployee}

          >
           {
                   
            loading ? <SpinnerDotted size={30} color='white' /> : "ADD EMPLOYEE"
           }  
           </button> */}

<button
        onClick={handleAddEmployee}
        //  className="signuppbtn"
        disabled={loading}
        style={{ position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center' }}
      >
        {loading && (
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
        {loading ? "siginup.." : 'ADD EMPLOYEE'}
      </button>
      </div>
    </div>
  )
}

export default AddEmployee
