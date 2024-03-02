import React, { useState } from 'react'
import "./AddEmployee.css"


const AddEmployee = () => {
[userInfo2, setUserInfo2] = useState()
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

async function handleAddEmployee() {
  try {
    setLoading(true);
    const res = await axios.post(
      "https://staftrack360.onrender.com/api/v1/addStaff/65d7af55ec77f213c8ff8978",
      AddEmployeeInput
    );
    console.log(res)
    
    // localStorage.setItem('UserInfo2', JSON.stringify(res.data.data))
  } catch (err) {
    console.log("Error from api", err);
   
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
