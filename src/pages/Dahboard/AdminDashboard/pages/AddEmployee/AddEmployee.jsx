import React from 'react'
import "./AddEmployee.css"

const AddEmployee = () => {
  return (
    <div className='AddEmployee'>
      <div className='sectionHead'>
      <p>ADD EMPLOYEE</p>
      </div>
      
      <div className='Section1'>
          <input type="text" placeholder='Name'/>
          <input type="text" placeholder='Email'/>
          <input type="text" placeholder='Department'/>
          <input type="text" placeholder='Role'/>
          <button>ADD EMPLOYEE</button>
      </div>
    </div>
  )
}

export default AddEmployee
