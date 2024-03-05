import { Navigate, Outlet } from 'react-router-dom';

const PrivatePage = () => {
  const userInfo = JSON.parse(localStorage.getItem("loginUserInfo"));
  // const userInfo2 = JSON.parse(localStorage.getItem("loginUserInfo2"));

  
  return (
    <div>
      {
        userInfo?.token?  <Outlet />  : <Navigate to="/" />
      }
    </div>
  );
}

export default PrivatePage;
