import React, { useState } from "react";
import axios from "axios"; // Import axios

import "./MainAdminDash.css";
import { CgProfile } from "react-icons/cg";
import { FaUser } from "react-icons/fa";
import { IoPersonAddOutline } from "react-icons/io5";
import { FcDepartment } from "react-icons/fc";
import DashboardHeader from "../../../../Components/DashboardHeader/DashboardHeader";
import AddEmployee from "../pages/AddEmployee/AddEmployee";
import Performance from "../pages/Performances/Performance";
import AddDepartment from "../pages/addDepartment/AddDepartment";
import Profile from "../pages/Profile/Profile";
import { useNavigate } from "react-router-dom";
import RateEmployee from "../../HodDashboard/Pages/rateEmployee/RateEmployee";
import Task from "../task/Task";
import Dropdowndash from "../../../../Components/DashboardHeader/Droopdowndash";
const MainAdminDash = () => {
  const [show, setShow] = useState(false)

  const userInfo = JSON.parse(localStorage.getItem("loginUserInfo"));
  const userToken=userInfo.token
  const nav = useNavigate();
  // console.log(userInfo2[0]._id)

  async function handlelogoutYes() {
    try {
      const res = await axios.post(
        `https://staftrack360.onrender.com/api/v1/signout/${userInfo._id}`, 
        {},
        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`
          }
        }
      );
      localStorage.clear(userInfo);
      nav("/");
    } catch (err) {
      console.log("error from API", err);
    }
  }
  
  

  const [pop, setPop] = useState(false);
  const [active, setActive] = useState("Active");
  const [performance, setPerformance] = useState(true);
  const [dept, setDept] = useState(false);
  const [employee, setEmployee] = useState(false);
  const [profile, setProfile] = useState(false);
  const [task, setTask] = useState(false);
  const [rateEmployee, setRateEmployee] = useState(false);

  async function changeStatePerformance(){
    
      try {
        const res = await axios.get(
          `https:// https://staftrack360.onrender.com/api/v1/viewall/${userInfo._id}`,
          {
            headers: {
              Authorization: `Bearer ${userToken}`
            }
          }
        );
        console.log(res)
        setPerformance(true);
    setDept(false);
    setEmployee(false);
    setProfile(false);
    setTask(false);
    setRateEmployee(false);
    } catch (err){
      console.log("error from API", err);
      
    }
  }
 

  async function changeStateDept(){
    try {
      const res = await axios.get(
        `https://staftrack360.onrender.com/api/v1/alldepartment/${userInfo._id}`,
        {
          headers: {
            Authorization: `Bearer ${userToken}`
          }
        }
      );
      console.log(res)
      const allStaffData=res.data.data
      setPerformance(false);
      setDept(true);
      setEmployee(false);
      setProfile(false);
      setTask(false);
      setRateEmployee(false);
      console.log(allStaffData)
      localStorage.setItem('allStaffData', JSON.stringify(res.data.data))
    } catch (err){
      console.log("error from API", err)
    }
  }

  

  const changeStateEmployee = () => {
    setPerformance(false);
    setDept(false);
    setEmployee(true);
    setProfile(false);
    setTask(false);
    setRateEmployee(false);
  };

  const changeStateProfile = () => {
    setPerformance(false);
    setDept(false);
    setEmployee(false);
    setProfile(true);
    setTask(false);
    setRateEmployee(false);
  };

  const changeStateTask = () => {
    setPerformance(false);
    setDept(false);
    setEmployee(false);
    setProfile(true);
    setTask(true);
    setRateEmployee(false);
  };

  const changeStateRateEmployee = () => {
    setPerformance(false);
    setDept(false);
    setEmployee(false);
    setProfile(true);
    setTask(false);
    setRateEmployee(true);
  };

  return (
    <>
      <div className="MainConntainer">
        <div className="leftSection">
          <div className="Sidebar">
            <div className="sidebarMain">
              <div className="freeSpaceTop"></div>
              <div className="menuItems">
                
                  <>
                    <div
                      className={`item1 ${performance ? active : null} `}
                      onClick={changeStatePerformance}
                    >
                      <CgProfile />
                      Performances
                    </div>
                    <div
                      className={`item1 ${dept ? active : null} `}
                      onClick={changeStateDept}
                    >
                      <FcDepartment />
                      Department
                    </div>
                    <div
                      className={`item1 ${employee ? active : null} `}
                      onClick={changeStateEmployee}
                    >
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
                  </>
                
              </div>
              <div className="logout">
                <button onClick={() => setPop(true)}>LOGOUT</button>
              </div>
            </div>
          </div>
        </div>
        <div className="rightSection">
          <div className="TopRightSection">
            {/* <DashboardHeader show={show} setShow={setShow}/>
            {
              show === true? <Dropdowndash/>:null
            } */}
            <DashboardHeader/>
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
            ) : task ? (
              <Task />
            ) : rateEmployee ? (
              <RateEmployee />
            ) : null}
          </div>
        </div>
      </div>

      {pop ? (
        <div className="popbody">
          <div className="popcard">
            <div className="popwrap">
              <h1>Are You Sure?</h1>
              <div className="YesNo">
                <button onClick={handlelogoutYes} className="yesbtn">
                  YES
                </button>
                <button onClick={() => setPop(false)} className="yesbtn">
                  NO
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default MainAdminDash;
