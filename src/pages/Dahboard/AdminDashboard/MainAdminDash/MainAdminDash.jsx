import React from 'react'
import "./MainAdminDash.css"
import Sidebar from '../../../../Components/Sidebar/Sidebar'
import DashboardHeader from '../../../../Components/DashboardHeader/DashboardHeader'
import AddEmployee from '../pages/AddEmployee/AddEmployee'
import Performance from '../pages/Performances/Performance'
import AddDepartment from '../pages/addDepartment/AddDepartment'
import Profile from '../pages/Profile/Profile'
import { Route, Routes } from 'react-router-dom'
import RateEmployee from '../../HodDashboard/Pages/rateEmployee/RateEmployee'

const MainAdminDash = () => {
  return (
    <div className='MainConntainer'>
        <div className='leftSection'>
          <Sidebar/>
        </div>
        <div className='rightSection'>
          <div className='TopRightSection'>
            <DashboardHeader/>
          </div>
          <div className='mainRightSection'>
            <div className='MainDashboard' >
              <Routes>
                <Route path='/performance' element={<Performance/>}/>
                <Route path='/department' element={<AddDepartment/>}/>
                <Route path='/employee' element={<AddEmployee/>}/>
                <Route path='/profile' element={<Profile/>}/>
                <Route path='/rateEmployee' element={<RateEmployee/>}/>
              </Routes>
             
            </div>
          </div>
        </div>
    </div>
  )
}

export default MainAdminDash
