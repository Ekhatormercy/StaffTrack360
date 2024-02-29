import React, { useState } from "react";

import "./MainAdminDash.css";
import { CgProfile } from "react-icons/cg";
import { FaUser } from "react-icons/fa";
import { IoPersonAddOutline } from "react-icons/io5";
import { FcDepartment } from "react-icons/fc";
// import Sidebar from '../../../../Components/Sidebar/Sidebar'
import DashboardHeader from "../../../../Components/DashboardHeader/DashboardHeader";
import AddEmployee from "../pages/AddEmployee/AddEmployee";
import Performance from "../pages/Performances/Performance";
import AddDepartment from "../pages/addDepartment/AddDepartment";
import Profile from "../pages/Profile/Profile";
import { useNavigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import RateEmployee from "../../HodDashboard/Pages/rateEmployee/RateEmployee";
import Task from "../task/Task";
const MainAdminDash = () => {

  const nav = useNavigate()

  const handlelogout =()=>{
    nav("/decisionpage")
  }
  const handlelogoutYes =()=>{
    nav("/")
  }
  const [pop, setPop] = useState (false)
  const [active, setActive] = useState("Active");
  const [performance, setPerformance] = useState(true);
  const [dept, setDept] = useState(false);
  const [employee, setEmployee] = useState(false);
  const [profile, setProfile] = useState(false);

  const changeStatePerformance = () => {
    setPerformance(true);
    setDept(false);
    setEmployee(false);
    setProfile(false);
  };
  const changeStateDept = () => {
    setPerformance(false);
    setDept(true);
    setEmployee(false);
    setProfile(false);
  };
  const changeStateEmployee = () => {
    setPerformance(false);
    setDept(false);
    setEmployee(true);
    setProfile(false);
  };
  const changeStateProfile = () => {
    setPerformance(false);
    setDept(false);
    setEmployee(false);
    setProfile(true);
  };

  return (
    <>
    <div className="MainConntainer">
      <div className="leftSection">
        {/* <Sidebar/> */}

        <div className="Sidebar">
          <div className="sidebarMain">
            <div className="freeSpaceTop"></div>
            <div className="menuItems">
              <div
                className={`item1 ${performance ? active : null} `}
                onClick={changeStatePerformance}
              >
                <CgProfile  />
                Performances
              </div>
              <div
                className={`item1 ${dept ? active : null} `}
                onClick={changeStateDept}
              >
                <FcDepartment  />
               Department
              </div>
              <div
                className={`item1 ${employee ? active : null} `}
                onClick={changeStateEmployee}>
                <IoPersonAddOutline />
                Add Employee
              </div>
              <div
                className={`item1 ${profile ? active : null} `}
                onClick={changeStateProfile}
              >
                <FaUser />
                Profile
              </div>
            </div>
            <div className="logout">
              <button  onClick={()=>{setPop(true)}}
                
              >
                LOGOUT
              </button>
            </div>
            </div>
       
          </div>
        </div>
        <div className="rightSection">
          <div className="TopRightSection">
            <DashboardHeader />
          </div>
          <div className="MainDashboard">
          {performance ? (
            <Performance />
          ) : dept ? (
            <AddDepartment />
          ) : employee ? (
            <AddEmployee />
          ) : profile ? (
            <Profile />
            // <Task/>
          ) : 
          null}
        </div>
        </div>
        
   
    </div>

 {
  pop ? 
   <div className="popbody">
  <div className="popcard">
    <div className="popwrap">
      <h1>Are You Sure?</h1>
      <div className="YesNo">
        <button onClick={handlelogoutYes} className="yesbtn">YES</button>
        <button onClick={()=>setPop(false)} className="yesbtn">NO</button>
      </div>
    </div>
  </div>

</div>:null
 }
  </>
  );
};

export default MainAdminDash;
