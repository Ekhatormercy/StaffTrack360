import React, { useState } from 'react'
// import "./RateEmployee.css"
import { CiSearch } from "react-icons/ci";
import "./RateEmp.css"
import axios from 'axios';



const RateEmployee = () => {

  const [rateEmployee, setRateEmployee] = useState(false)
  const [tc, setTc]=useState(0)
  const [tm, setTm]=useState(0)
  const [or, setQr]=useState(0)
  const [cf, setCf]=useState(0)
  const [da, setDa]=useState(0)
  const [wq, setWq]=useState(0)
  const [cp, setCp]=useState(0)
  
  
  const allDeptEmployee = JSON.parse(localStorage.getItem("allDeptEmployee"));
  const userInfo2 = JSON.parse(localStorage.getItem("loginUserInfo2"));
  const userID= allDeptEmployee[0]._id;

  // console.log("userinfo2", userInfo2)
  console.log( "userdata", allDeptEmployee)
  const companyID = userInfo2.companyId
  const userToken2= userInfo2.token

  async function handleAddRatings (userID){
    try{
      const performanceInput = {
        TC: parseInt(tc),
        TM: parseInt(tm),
        OR: parseInt(or),
        CF:  parseInt(cf),
        DA: parseInt(da),
        WQ: parseInt(wq),
      };
      const res = await axios.post(
        ` https://staftrack360.onrender.com/api/v1/addperf/${userID}/${companyID}`, 
        performanceInput,
        {
          headers: {
            Authorization: `Bearer ${userToken2}`
          }
        }
      );
      console.log(res)
      setRateEmployee(false)
    } catch (err){
      console.log("error from API", err)
    }
  }


  
  return (
    
    <div className='rateEmplyee'>
      <div className='searchBtn'>
        <CiSearch size={30}/>
        <input type="text" placeholder='Search by Name' />
      </div>
      <div className='employeeRatingLst'>
       


        {allDeptEmployee.map ((deptemploy)=>(
          
         <> 
        <div  key={deptemploy._id} className='EachRatingList'>
          <p> {deptemploy.fullName}</p>
          <button onClick={()=>{
          setRateEmployee(!rateEmployee)
          console.log(deptemploy._id)
          // handleAddRatings(deptemploy._id);
        }}>Rate</button>
        </div>
        {
          rateEmployee &&(
             <div className='EachRatingInput'>
            <div className='MainInput'>
              <input type="text" placeholder='TC' onChange={(e)=>setTc(e.target.value)}/>
              <input type="text" placeholder='TM'  onChange={(e)=>setTm(e.target.value)}/>
              <input type="text" placeholder='QR'  onChange={(e)=>setQr(e.target.value)}/>
              <input type="text" placeholder='CF'  onChange={(e)=>setCf(e.target.value)}/>
              <input type="text" placeholder='DA'  onChange={(e)=>setDa(e.target.value)}/>
              <input type="text" placeholder='WQ'  onChange={(e)=>setWq(e.target.value)}/>
            </div>
            <button onClick={() => handleAddRatings(deptemploy._id)}>Add</button>
        
          </div> 
        )}
        </>
        ))
          
        }
       
        
       
        
      </div>
    </div>
  )
}

export default RateEmployee