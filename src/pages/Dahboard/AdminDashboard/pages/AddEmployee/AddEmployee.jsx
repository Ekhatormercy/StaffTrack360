import React, { useState } from 'react'
import "./AddEmployee.css"
import axios from 'axios'
import { SpinnerDotted } from "spinners-react";
import { useNavigate } from 'react-router-dom';


const AddEmployee = () => {
const userInfo = JSON.parse(localStorage.getItem("loginUserInfo"))
const [userInfo2, setUserInfo2] = useState()
const [loading, setLoading] = useState(false);
const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [department, setDepartment] = useState('')
const [role, setRole] = useState('')

const AddEmployeeInput = {
  name:name,
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
      AddEmployeeInput, );
      
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
          <button
           onClick={handleAddEmployee}

          >
           {
                   
            loading ? <SpinnerDotted size={30} color='white' /> : "ADD EMPLOYEE"
           }  </button>
      </div>
    </div>
  )
}

export default AddEmployee
