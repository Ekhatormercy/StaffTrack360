import React, { useState } from 'react'
import "./AddEmployee.css"
import axios from 'axios'


const AddEmployee = () => {
const userInfo = JSON.parse(localStorage.getItem("loginUserInfo"))
const [userInfo2, setUserInfo2] = useState()
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
console.log(AddEmployeeInput)
console.log(userInfo._id)
async function handleAddEmployee() {
  try {
    // const token = localStorage.getItem("loginUserInfo.token");
    const userInfo = JSON.parse(localStorage.getItem("loginUserInfo")); 

    const res = await axios.post(
      `https://staftrack360.onrender.com/api/v1/addStaff/${userInfo._id}`,
      AddEmployeeInput, 
      
    );

    console.log(res.data);
    setUserInfo2(res.data.data);
    console.log(userInfo2); 
    // localStorage.setItem('userInfo2', JSON.stringify(res.data.data));
  } catch (err) {
    console.error("Error from API", err);
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
          <button onClick={handleAddEmployee}>ADD EMPLOYEE</button>
      </div>
    </div>
  )
}

export default AddEmployee
