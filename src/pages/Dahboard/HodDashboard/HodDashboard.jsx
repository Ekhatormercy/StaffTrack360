import React from 'react'
import './HodDasshboard.css'
import Sidebar from '../../../Components/Sidebar/Sidebar'
import DashboardHeader from '../../../Components/DashboardHeader/DashboardHeader'
import RateEmployee from './Pages/rateEmployee/RateEmployee'
import Task from './Pages/task/Task'
import EmployeeProfile from './Pages/employeeProfile/EmployeeProfile'

const HodDashboard = () => {
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
              <RateEmployee/>
              {/* <Task/> */}
              {/* <EmployeeProfile/> */}
            </div>
          </div>
        </div>
    </div>
  )
}

export default HodDashboard
