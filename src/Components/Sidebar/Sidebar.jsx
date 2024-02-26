// import React, { useState } from 'react'
// import "./Sidebar.css"
// import { CgProfile } from "react-icons/cg";
// import { FcDepartment } from "react-icons/fc";
// import { IoPersonAddOutline } from "react-icons/io5";
// import { FaUser } from "react-icons/fa";
// import { useNavigate } from 'react-router-dom';
// // import Performance from '../pages/Performances/Performance'
// import Performance from '../../pages/Dahboard/AdminDashboard/pages/Performances/Performance';
// import AddDepartment from '../../pages/Dahboard/AdminDashboard/pages/addDepartment/AddDepartment';
// import AddEmployee from '../../pages/Dahboard/AdminDashboard/pages/AddEmployee/AddEmployee';
// import Profile from '../../pages/Dahboard/AdminDashboard/pages/Profile/Profile';

// const Sidebar = () => {
//   const [active, setActive] =useState("Active")
//   const [performance, setPerformance] =useState(true)
//     const [dept, setDept] =useState(false)
//     const [employee, setEmployee] =useState(false)
//     const [profile, setProfile] =useState(false)

//     const changeStatePerformance=()=>{
//       setPerformance(true);
//       setDept(false);
//      setEmployee(false);
//      setProfile(false);
//   }
//     const changeStateDept=()=>{
//       setPerformance(false);
//       setDept(true);
//      setEmployee(false);
//      setProfile(false);
//   }
//     const changeStateEmployee=()=>{
//       setPerformance(false);
//       setDept(false);
//      setEmployee(true);
//      setProfile(false);
//   }
//     const changeStateProfile=()=>{
//       setPerformance(false);
//       setDept(false);
//      setEmployee(false);
//      setProfile(true);
//   }
    

//   const nav = useNavigate()

//   return (
//     <>
   
 
//     <div className='Sidebar'>
//       <div className='sidebarMain'>
//         <div className='freeSpaceTop'></div>
//         <div className='menuItems'>
//           <div className={`item1 ${performance? active : null} `}  onClick= {changeStatePerformance}
//           >
//             <CgProfile color='white' />
//             <p>Performances</p>  
//           </div>
//           <div className={`item1 ${dept? active : null} `}  onClick={changeStateDept}>
//             <FcDepartment color='white' />
//             <p> Department</p>
//           </div>
//           <div className={`item1 ${employee? active : null} `}  onClick={changeStateEmployee}
         
//           >
//             <IoPersonAddOutline color='white' />
//             <p> Add Employee</p>
//           </div>
//           <div className={`item1 ${profile? active : null} `}  onClick={changeStateProfile}
         
//           >
//             <FaUser />
//             <p> Profile</p>
//           </div>
//         </div>
//         <div className='logout'>
//           <button onClick={()=>{
//             nav('/')
//           }}>LOGOUT</button>
//         </div>
     
//     </div>
       
      
//         </div>

//         </>
//   )
// }

// export default Sidebar

//     {/* <div className='MainDashboard' >
//           {
//              performance?<Performance/>:
//                dept?<AddDepartment/>:
//             employee? <AddEmployee/>:
//             profile?<Profile/>:
//           //  <RateEmployee/>:
//            null
//           }
         
//         </div> */}
