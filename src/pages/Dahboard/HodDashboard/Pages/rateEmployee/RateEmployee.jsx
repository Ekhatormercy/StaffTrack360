import React, { useState } from 'react'
import "./RateEmployee.css"
import { CiSearch } from "react-icons/ci";
const RateEmployee = () => {
  const [rateEmployee, setRateEmployee] = useState(false)
  
  return (
    
    <div className='rateEmplyee'>
      <div className='searchBtn'>
        <CiSearch size={30}/>
        <input type="text" placeholder='Search by Name' />
      </div>
      <div className='employeeRatingLst'>
        <div className='EachRatingList'>
        <p> Elizabeth Toweh</p>
        <button onClick={()=>{
          setRateEmployee(!rateEmployee)
        }}>Rate</button>
        </div>
        {
          rateEmployee ? 
             <div className='EachRatingInput'>
            <div className='MainInput'>
              <input type="text" placeholder='TC'/>
              <input type="text" placeholder='TC'/>
              <input type="text" placeholder='TC'/>
              <input type="text" placeholder='TC'/>
              <input type="text" placeholder='TC'/>
              <input type="text" placeholder='TC'/>
            </div>
            <button onClick={()=>{
              setRateEmployee(false)
            }}>Add</button>
        
          </div> : null
        }
       
        
      </div>
    </div>
  )
}

export default RateEmployee
