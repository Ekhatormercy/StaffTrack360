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
// import { Route, Routes } from "react-router-dom";
import RateEmployee from "../../HodDashboard/Pages/rateEmployee/RateEmployee";
import Task from "../task/Task";
import { useEffect } from "react";
import DashboardHeaderEMployee from "../../../../Components/DashboardHeader/DashboardHeaderEmployee";

const MainAdminDashEmployee = () => {

  const userInfo = JSON.parse(localStorage.getItem("loginUserInfo"));
  const userInfo2 = JSON.parse(localStorage.getItem("loginUserInfo2"));
  const nav = useNavigate();
  const userID=(userInfo2[0]._id)
  const userToken=(userInfo2[0].token)
  console.log(userToken)
  async function handlelogoutYes() {
    try {
      const res = await axios.post(
        ` https://staftrack360.onrender.com/api/v1/logOut/${userID}`, 
        {},
        {
          headers: {
            Authorization: `Bearer ${userToken}`
          }
        }
      );
      localStorage.clear(userInfo2);
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

  const changeStateDept = () => {
    setPerformance(false);
    setDept(true);
    setEmployee(false);
    setProfile(false);
    setTask(false);
    setRateEmployee(false);
  };

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
                {userInfo2[0].role === "Hod" ? (
                  <>
                    <div
                      className={`item1 ${performance ? active : null} `}
                      onClick={changeStatePerformance}
                    >
                      <CgProfile />
                      Performances
                    </div>
                    <div
                      className={`item1 ${profile ? active : null} `}
                      onClick={changeStateProfile}
                    >
                      <FaUser />
                      Profile
                    </div>
                    <div
                      className={`item1 ${profile ? active : null} `}
                      onClick={changeStateTask}
                    >
                      <FaUser />
                      Task
                    </div>
                    <div
                      className={`item1 ${profile ? active : null} `}
                      onClick={changeStateRateEmployee}
                    >
                      <FaUser />
                      Rate Employee
                    </div>
                  </>
                ) : userInfo2[0].role === "Employee" ? (
                  <>
                    <div
                      className={`item1 ${performance ? active : null} `}
                      onClick={changeStatePerformance}
                    >
                      <CgProfile />
                      Performances
                    </div>
                    <div
                      className={`item1 ${profile ? active : null} `}
                      onClick={changeStateProfile}
                    >
                      <FaUser />
                      Profile
                    </div>
                    <div
                      className={`item1 ${profile ? active : null} `}
                      onClick={changeStateTask}
                    >
                      <FaUser />
                      Task
                    </div>
                  </>
                ) : null}
              </div>
              <div className="logout">
                <button onClick={() => setPop(true)}>LOGOUT</button>
              </div>
            </div>
          </div>
        </div>
        <div className="rightSection">
          <div className="TopRightSection">
            <DashboardHeaderEMployee />
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

export default MainAdminDashEmployee;
