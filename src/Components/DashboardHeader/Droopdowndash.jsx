import React, { useState } from "react";
import axios from "axios"; 

import "./Dropdowndash.css"
import { CgProfile } from "react-icons/cg";
import { FaUser } from "react-icons/fa";
import { IoPersonAddOutline } from "react-icons/io5";
import { FcDepartment } from "react-icons/fc";

import { useNavigate } from "react-router-dom";
import AddDepartment from "../../pages/Dahboard/AdminDashboard/pages/addDepartment/AddDepartment";
import AddEmployee from "../../pages/Dahboard/AdminDashboard/pages/AddEmployee/AddEmployee";
import Profile from "../../pages/Dahboard/AdminDashboard/pages/Profile/Profile";
import Task from "../../pages/Dahboard/AdminDashboard/task/Task";
import RateEmployee from "../../pages/Dahboard/HodDashboard/Pages/rateEmployee/RateEmployee";

const Dropdowndash = () => {
  console.log('dropping')
  const userInfo = JSON.parse(localStorage.getItem("loginUserInfo"));
  const userToken = userInfo.token;
  const nav = useNavigate();
  

  async function handlelogoutYes() {
    try {
      const res = await axios.post(
        `https://staftrack360.onrender.com/api/v1/signout/${userInfo._id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
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

  const changeStatePerformance = () => {
    setPerformance(true);
    setDept(false);
    setEmployee(false);
    setProfile(false);
    setTask(false);
    setRateEmployee(false);
  };

  async function changeStateDept() {
    try {
      const res = await axios.get(
        `https://staftrack360.onrender.com/api/v1/alldepartment/${userInfo._id}`,
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );
      console.log(res);
      const allStaffData = res.data.data;
      setPerformance(false);
      setDept(true);
      setEmployee(false);
      setProfile(false);
      setTask(false);
      setRateEmployee(false);
      console.log(allStaffData);
      localStorage.setItem("allStaffData", JSON.stringify(res.data.data));
    } catch (err) {
      console.log("error from API", err);
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
   
          <div className="Sidebar1">
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
        
        <div className="rightSection">
          
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

export default Dropdowndash;
