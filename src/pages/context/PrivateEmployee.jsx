import { Navigate, Outlet } from 'react-router-dom';

const PrivatePageEmployee = () => {
  // const userInfo = JSON.parse(localStorage.getItem("loginUserInfo"));
  const userInfo2 = JSON.parse(localStorage.getItem("loginUserInfo2"));
  console.log(userInfo2)
const userinfoMain = userInfo2.token
console.log(userinfoMain)
  
  return (
    <div>
      {
        userinfoMain?  <Outlet />  : <Navigate to="/" />
      }
    </div>
  );
}

export default PrivatePageEmployee;
