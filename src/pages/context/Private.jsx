// import React, {useContext} from 'react'
import { Navigate, Outlet } from 'react-router-dom'
// import { AppContext } from '../context/context'

const PrivatePage = () => {
  // const {userToken} = useContext(AppContext)
  const userToken = JSON.parse(localStorage.getItem("token"))
  console.log(userToken?.data.token)
  return (
    <div>
      {
        userToken?.data.token ? (<Outlet/>) : (<Navigate to="/"/>)
      }
    </div>
  )
}

export default PrivatePage
