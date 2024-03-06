import { useState } from "react";
import { createContext } from "react";

export const MyContext= createContext()

const AppContext= ({children})=>{
const [adminData, setAdminData]= useState({
    businessName:'',
    businessEmail:'',
    firstName: '',
    lastName:'',
    password:'',
    phoneNumber:'',

})
const [userInfo, setUserInfo]=useState('')
return(
    <MyContext.Provider value={{adminData, setAdminData,setUserInfo, userInfo, AppContext}}>
        {children}
    </MyContext.Provider>
)
}
export default AppContext
