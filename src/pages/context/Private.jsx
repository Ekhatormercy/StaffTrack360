
import { Navigate, Outlet } from 'react-router-dom'

const PrivatePage = () => {
  const userInfo= JSON.parse(localStorage.getItem("loginUserInfo"))

  console.log("userDetail?.token")
  return (
    <div>
      {
        userInfo?.token ? (<Outlet/>) : (<Navigate to="/"/>)
      }
    </div>
  )
}

export default PrivatePage

