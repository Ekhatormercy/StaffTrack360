import { Navigate, Outlet } from 'react-router-dom';

const PrivatePage = () => {
  const userInfo = JSON.parse(localStorage.getItem("loginUserInfo"));
  const userInfo2 = JSON.parse(localStorage.getItem("loginUserInfo2"));

  // Assuming userInfo2 is an array containing user information objects
  // const tokenFromUserInfo2 = userInfo2.length > 0 ? userInfo2[0].token :null;

  return (
    <div>
      {
        userInfo?.token?  <Outlet /> : userInfo2?.token?  <Outlet /> : <Navigate to="/" />
      }
    </div>
  );
}

export default PrivatePage;
