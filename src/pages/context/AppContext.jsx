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
return(
    <MyContext.Provider value={{adminData, setAdminData, AppContext}}>
        {children}
    </MyContext.Provider>
)
}
export default AppContext
