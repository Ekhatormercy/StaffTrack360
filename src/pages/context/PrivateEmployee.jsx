import { Navigate, Outlet } from 'react-router-dom';

const PrivatePageEmployee = () => {
  // const userInfo = JSON.parse(localStorage.getItem("loginUserInfo"));
  const userInfo2 = JSON.parse(localStorage.getItem("loginUserInfo2"));
const userinfoMAin = userInfo2[0].token
console.log(userinfoMAin)
  
  return (
    <div>
      {
        userinfoMAin?  <Outlet />  : <Navigate to="/" />
      }
    </div>
  );
}

export default PrivatePageEmployee;
