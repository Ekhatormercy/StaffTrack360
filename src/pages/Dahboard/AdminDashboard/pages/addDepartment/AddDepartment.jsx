import React from 'react'
import "./AddDepartment.css"

const AddDepartment = () => {
  return (
    <div className='addDepartment'>
        <div className='addDptHeader'><p>ADD DEPARTMENT</p></div>
        <div className='addDptSec1'>
          <input type="text" placeholder='NAME OF DEPARTMENT'/>
          <input type="text"  placeholder='DEPARTMENT HEAD'/>
          <button>ADD DEPARTMENT</button>
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
