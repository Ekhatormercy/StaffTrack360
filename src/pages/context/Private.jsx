// import React, {useContext} from 'react'
import { Navigate, Outlet } from 'react-router-dom'
// import { AppContext } from '../context/context'

const PrivatePage = () => {
  // const {userToken} = useContext(AppContext)
  const userDetail = JSON.parse(localStorage.getItem("userData"))
  console.log(userDetail?.data.token)
  return (
    <div>
      {
        userDetail?.data.token ? (<Outlet/>) : (<Navigate to="/"/>)
      }
    </div>
  )
}

export default PrivatePage
